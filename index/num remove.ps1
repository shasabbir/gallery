Get-ChildItem '*.png' | Rename-Item -NewName { $_.Name -Replace 'png','bmp' }
