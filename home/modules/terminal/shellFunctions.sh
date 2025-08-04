
fetchShell() {
    if [ -z "$1" ]; then
      echo "Usage: fetchShell <templateName>"
      return 1
    fi
    nix flake init --template "github:JohanHaas/DevShells#$1"
}

