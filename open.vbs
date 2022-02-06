command = "cmd /c ""php -S 0.0.0.0:16969 router.php"
Set WshShell = CreateObject("WScript.Shell")
ReturnCode = WshShell.Run(command, 0, True)