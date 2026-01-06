@echo off
set "ZIP_NAME=portfolio-the-writer.zip"
echo Packaging project to %ZIP_NAME%...

REM Remove old zip if exists
if exist "%ZIP_NAME%" del "%ZIP_NAME%"

REM Use PowerShell to zip files, excluding specific items
REM Excludes: node_modules, .git, dist (build artifacts), SOCIAL.md, GUMROAD.md, and the zip itself plus this script
powershell -Command "Get-ChildItem -Path . -Exclude 'node_modules', '.git', 'dist', '.vs', '.vscode', 'SOCIAL.md', 'GUMROAD.md', '%ZIP_NAME%', 'package_project.bat' | Compress-Archive -DestinationPath '%ZIP_NAME%' -Force"

echo Done! Package saved as %ZIP_NAME%
timeout /t 5
