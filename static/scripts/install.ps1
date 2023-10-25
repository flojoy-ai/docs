Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass

$info_color = 'Cyan'

function info_msg {
  param (
    $message
  )
  Write-Host ""
  Write-Host "[info]:: $message " -ForegroundColor $info_color
  Write-Host ""
}
function cloneRepo {
  param (
    $repo, $location, $branch
    )
    $gitURL = "https://github.com/$repo.git"
    git clone --branch $branch $gitURL $location
    Set-Location $location
}

info_msg "Cloning flojoy-ai/studio repo..."

cloneRepo "flojoy-ai/studio" "studio" "develop"

info_msg "Starting the project..."

& .\flojoy.ps1
