# Declare variables & credentials
$username = "10.2.12.100\ProfVespertino"
$password = "companerosv" | ConvertTo-SecureString -AsPlainText -Force

# Declare new credential object
$cred = New-Object System.Management.Automation.PSCredential($username, $password)

# Initiate new connection
New-PSDrive -Name Z -PSProvider FileSystem -Root "\\10.2.12.100\C$" -Credential $cred

# Transfer / Copy new file
# Copy-Item -Path "C:\Users\Vespertino.C12PC13\OneDrive - Gobierno de La Rioja - Educación\Escritorio\New Text Document.txt" -Destination "Z:\Users\ProfVespertino\Desktop\Nuevo Documento.txt"

# Remove an item
# Remove-Item "Z:\Users\ProfVespertino\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\Nuevo Documento.bat"

# List all the items
# Get-ChildItem "Z:\Users\ProfVespertino\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup"

exit