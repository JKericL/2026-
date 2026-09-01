param(
  [Parameter(Position = 0)]
  [string]$Version = ""
)

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$OutputEncoding = [Console]::OutputEncoding

$root = $PSScriptRoot
$sourcePath = Join-Path $root "app.source.js"
$outputPath = Join-Path $root "app.min.js"
$indexPath  = Join-Path $root "index.html"

if ([string]::IsNullOrWhiteSpace($Version)) {
  $Version = Read-Host "Version (example: 0.7.3)"
}

if ([string]::IsNullOrWhiteSpace($Version)) {
  throw "Version is required."
}

if (-not (Test-Path $sourcePath)) {
  throw "app.source.js not found: $sourcePath"
}

if (-not (Test-Path $indexPath)) {
  throw "index.html not found: $indexPath"
}

$utf8 = New-Object System.Text.UTF8Encoding($false)

# 1) app.source.js -> app.min.js
$source = [System.IO.File]::ReadAllText($sourcePath, [System.Text.Encoding]::UTF8)
$bytes  = [System.Text.Encoding]::UTF8.GetBytes($source)
$base64 = [System.Convert]::ToBase64String($bytes)

# UTF-8 safe browser decoder. This is only light obfuscation, not security.
$wrapper = '(()=>{const b="' + $base64 + '";const x=atob(b);const a=Uint8Array.from(x,c=>c.charCodeAt(0));const s=new TextDecoder("utf-8").decode(a);Function(s)();})();'
[System.IO.File]::WriteAllText($outputPath, $wrapper, $utf8)

# 2) Cache-busting version in index.html
$index = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)

$updated = [System.Text.RegularExpressions.Regex]::Replace(
  $index,
  'app\.min\.js\?v=[^"''\s>]+',
  "app.min.js?v=$Version"
)

$updated = [System.Text.RegularExpressions.Regex]::Replace(
  $updated,
  'style\.css\?v=[^"''\s>]+',
  "style.css?v=$Version"
)

if ($updated -eq $index -and $index -notmatch 'app\.min\.js\?v=') {
  throw "Could not find app.min.js?v=... in index.html"
}

[System.IO.File]::WriteAllText($indexPath, $updated, $utf8)

Write-Host ""
Write-Host "Build complete."
Write-Host "  app.source.js -> app.min.js"
Write-Host "  index.html cache version -> $Version"
Write-Host ""
Write-Host "Next: open GitHub Desktop, Commit, then Push origin."
