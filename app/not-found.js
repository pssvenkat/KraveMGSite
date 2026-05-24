import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🌱</div>
        <h1 className="font-playfair text-5xl font-bold text-forest-DEFAULT mb-4">404</h1>
        <p className="font-playfair text-2xl text-leafy-DEFAULT mb-3">Page Not Found</p>
        <p className="font-inter text-text-muted mb-8 max-w-md mx-auto">
          This page seems to have gone to seed. Let's get you back to fresh ground.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-leafy-DEFAULT text-white font-semibold rounded-full hover:bg-forest-DEFAULT transition-colors font-inter"
          >
            Go Home
          </Link>
          <Link
            href="/microgreens"
            className="px-8 py-3 border-2 border-leafy-DEFAULT text-leafy-DEFAULT font-semibold rounded-full hover:bg-leafy-DEFAULT hover:text-white transition-colors font-inter"
          >
            Browse Microgreens
          </Link>
        </div>
      </div>
    </div>
  );
}
