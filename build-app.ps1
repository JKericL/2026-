param(
    [Parameter(Position = 0)]
    [string]$Version = "0.7"
)

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$sourcePath = Join-Path $root "app.source.js"
$outputPath = Join-Path $root "app.min.js"
$indexPath = Join-Path $root "index.html"

if (-not (Test-Path $sourcePath)) {
    throw "app.source.js 파일을 찾을 수 없습니다: $sourcePath"
}
if (-not (Test-Path $indexPath)) {
    throw "index.html 파일을 찾을 수 없습니다: $indexPath"
}

$utf8 = New-Object System.Text.UTF8Encoding($false)
$source = [System.IO.File]::ReadAllText($sourcePath, [System.Text.Encoding]::UTF8)
$bytes = [System.Text.Encoding]::UTF8.GetBytes($source)
$base64 = [System.Convert]::ToBase64String($bytes)
$wrapper = '(()=>{const b="' + $base64 + '";const s=decodeURIComponent(escape(atob(b)));Function(s)();})();' + [Environment]::NewLine
[System.IO.File]::WriteAllText($outputPath, $wrapper, $utf8)

$index = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
$replacement = 'app.min.js?v=' + $Version
$updated = [System.Text.RegularExpressions.Regex]::Replace(
    $index,
    'app\.min\.js\?v=[^"'']+',
    $replacement
)
if ($updated -eq $index -and $index -notmatch 'app\.min\.js\?v=') {
    throw "index.html에서 app.min.js?v= 항목을 찾지 못했습니다."
}
[System.IO.File]::WriteAllText($indexPath, $updated, $utf8)

Write-Host "완료: app.source.js -> app.min.js"
Write-Host "완료: index.html 캐시 버전 -> $Version"
Write-Host "이제 README.txt에 변경사항을 기록한 뒤 Commit -> Push 하세요."
