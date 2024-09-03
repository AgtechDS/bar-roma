# Definisci le cartelle di partenza e di output
$cartellaDiPartenza = "D:\Desktop\AGtech\app\bar-roma-2.0\AnimaPackage-React-taDSq"
$fileOutput = "D:\Desktop\AGtech\app\bar-roma-2.0\AnimaPackage-React-taDSq\struttura_cartelle_e_file.txt"

# Cartelle da escludere
$cartelleDaEscludere = @("node_modules", "AI", "chat", "Lib", ".git")

# Soglia di dimensione massima per le cartelle e i file (in MB)
$sogliaDimensioneCartella = 100 # Modifica questo valore secondo le tue esigenze
$sogliaDimensioneFile = 10 # Modifica questo valore secondo le tue esigenze

# Funzione ricorsiva per esplorare le cartelle e i file e scrivere su file
function Get-DirectoryStructure {
    param(
        [string]$path,
        [int]$level = 0
    )
    
    # Processa le cartelle
    Get-ChildItem -Path $path -Directory -ErrorAction SilentlyContinue | ForEach-Object {
        $dimensioneCartella = (Get-ChildItem $_.FullName -Recurse -File -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1MB
        
        if (-not ($cartelleDaEscludere -contains $_.Name) -and ($dimensioneCartella -lt $sogliaDimensioneCartella)) {
            # Crea l'indentazione in base al livello
            $indentazione = "  " * $level
            
            # Scrivi il nome della cartella con l'indentazione nel file
            Add-Content -Path $fileOutput -Value "$indentazione[D] $($_.Name)"
            
            # Ricorsione per le sottocartelle
            Get-DirectoryStructure -path $_.FullName -level ($level + 1)
        }
    }
    
    # Processa i file
    Get-ChildItem -Path $path -File -ErrorAction SilentlyContinue | ForEach-Object {
        $dimensioneFile = $_.Length / 1MB
        
        if ($dimensioneFile -lt $sogliaDimensioneFile) {
            # Crea l'indentazione in base al livello
            $indentazione = "  " * ($level + 1)
            
            # Scrivi il nome del file con l'indentazione nel file
            Add-Content -Path $fileOutput -Value "$indentazione[F] $($_.Name)"
        }
    }
}

# Crea il file di output (se non esiste) e svuotalo
if (Test-Path $fileOutput) {
    Clear-Content $fileOutput
} else {
    New-Item -ItemType File -Path $fileOutput -Force
}

# Esegui la funzione sulla cartella di partenza
Get-DirectoryStructure -path $cartellaDiPartenza

Write-Host "Struttura salvata in $fileOutput"