@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"

set "VERSION="
set /p VERSION=Enter version (example 0.7.3): 

if "%VERSION%"=="" (
  echo Version is required.
  pause
  exit /b 1
)

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0build-app.ps1" "%VERSION%"

if errorlevel 1 (
  echo.
  echo Build failed.
  pause
  exit /b 1
)

echo.
echo Build finished successfully.
echo Open GitHub Desktop and Commit ^> Push origin.
pause
