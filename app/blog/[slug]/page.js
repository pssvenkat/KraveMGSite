import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import CTABanner from '@/components/CTABanner';
import BlogCard from '@/components/BlogCard';
import AnimatedSection from '@/components/AnimatedSection';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const readingTime = Math.max(1, Math.ceil(post.content.split(' ').length / 200));

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-10 bg-gradient-to-br from-forest-DEFAULT to-leafy-DEFAULT relative overflow-hidden">
        <div className="absolute top-10 right-10 text-6xl opacity-15 animate-float select-none">🌱</div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-inter mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-4 flex flex-wrap gap-2 items-center">
            <span className="px-3 py-1 bg-white/20 text-white/90 text-xs font-semibold rounded-full font-inter flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            {post.tags && post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 text-white/70 text-xs font-medium rounded-full font-inter">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sage-DEFAULT flex items-center justify-center">
                <span className="text-sm font-bold text-white">K</span>
              </div>
              <span className="font-inter text-white/80 text-sm font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/60">
              <Calendar className="w-4 h-4" />
              <span className="font-inter text-sm">
                {post.date ? new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-white/60">
              <Clock className="w-4 h-4" />
              <span className="font-inter text-sm">{readingTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-playfair prose-headings:text-forest-DEFAULT prose-headings:leading-snug
              prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8
              prose-p:text-text-muted prose-p:leading-relaxed prose-p:font-inter
              prose-a:text-leafy-DEFAULT prose-a:no-underline hover:prose-a:underline
              prose-strong:text-forest-DEFAULT prose-strong:font-semibold
              prose-ul:text-text-muted prose-li:marker:text-leafy-DEFAULT
              prose-blockquote:border-leafy-DEFAULT prose-blockquote:bg-beige-200 prose-blockquote:rounded-2xl prose-blockquote:not-italic prose-blockquote:text-forest-DEFAULT
              prose-table:overflow-hidden prose-table:rounded-2xl prose-th:bg-forest-DEFAULT prose-th:text-white prose-th:font-inter prose-td:font-inter
              prose-hr:border-beige-200"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-beige-200">
              <div className="flex flex-wrap gap-2">
                <span className="font-inter text-xs font-bold uppercase tracking-widest text-forest-DEFAULT">Tags:</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-beige-200 text-text-muted text-xs font-medium rounded-full font-inter">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share on WhatsApp */}
          <div className="mt-8 p-6 rounded-3xl bg-green-50 border border-green-100">
            <p className="font-inter font-semibold text-green-800 mb-3">Found this helpful? Share it!</p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - Read on Krave Microgreens Blog 🌱')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-2xl hover:bg-green-400 transition-colors font-inter text-sm"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 bg-beige-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-10">
              <h2 className="font-playfair text-3xl font-bold text-forest-DEFAULT">Related Articles</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}

// Simple markdown to HTML converter (basic implementation)
function markdownToHtml(markdown) {
  if (!markdown) return '';

  let html = markdown
    // Headers
    .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Tables — basic
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
    })
    // Horizontal rule
    .replace(/^---$/gm, '<hr/>')
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote><p>$1</p></blockquote>')
    // Unordered lists
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    // Numbered lists
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    // Paragraphs (double newline)
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '\n');

  // Wrap list items
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);

  // Wrap in paragraph
  html = '<p>' + html + '</p>';

  // Clean up
  html = html
    .replace(/<p><h/g, '<h')
    .replace(/<\/h(\d)><\/p>/g, '</h$1>')
    .replace(/<p><ul>/g, '<ul>')
    .replace(/<\/ul><\/p>/g, '</ul>')
    .replace(/<p><hr/g, '<hr')
    .replace(/<\/hr><\/p>/g, '<hr/>')
    .replace(/<p><blockquote>/g, '<blockquote>')
    .replace(/<\/blockquote><\/p>/g, '</blockquote>')
    .replace(/<p><tr>/g, '<tr>')
    .replace(/<\/tr><\/p>/g, '</tr>')
    .replace(/(<tr>.*<\/tr>)+/g, (match) => `<table>${match}</table>`);

  return html;
}
