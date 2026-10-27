$username = "10.2.12.100\ProfVespertino"
$password = "companerosv" | ConvertTo-SecureString -AsPlainText -Force

New-PSDrive -Name Z -PSProvider FileSystem -Root "\\10.2.12.13\C$" -Credential $cred

Copy-Item -Path "C:\Users\Vespertino.C12PC13\OneDrive - Gobierno de La Rioja - Educación\Escritorio\New Text Document.txt" -Destination "Z:\Users\ProfVespertino\Desktop\Nuevo Documento.txt"

Get-ChildItem "Z:\Users\ProfVespertino\Desktop"

pause
exit