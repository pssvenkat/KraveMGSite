@echo off
REM Krave Microgreens — Dev Server Launcher
REM Run this from anywhere to start the Next.js dev server

echo.
echo  ================================
echo   Krave Microgreens Dev Server
echo  ================================
echo.

cd /d "%~dp0"

echo [1/2] Starting Next.js dev server...
echo       Open http://localhost:3000 when ready
echo.

set ELECTRON_RUN_AS_NODE=1
"C:\Users\venka\AppData\Local\Programs\Antigravity\Antigravity.exe" "%~dp0node_modules\next\dist\bin\next" dev
