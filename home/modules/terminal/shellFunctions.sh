fetchShell() {
  local hash
  hash=$(curl -s https://api.github.com/repos/JohanHaas/DevShells/commits/main | jq -r '.sha')

  if [[ -z $1 ]]; then
    echo "Kein Template angegeben. Verfügbare Templates:"
    nix flake show "github:JohanHaas/DevShells?ref=$hash"
    return 1
  fi

  if ! nix flake init --template "github:JohanHaas/DevShells?ref=$hash#$1"; then
    echo "Template '$1' existiert nicht. Verfügbare Templates:"
    nix flake show "github:JohanHaas/DevShells?ref=$hash"
    return 1
  fi
}

buildC() {
  rm -rf build
  cmake -B build -S . -DCMAKE_EXPORT_COMPILE_COMMANDS=ON
  cmake --build build
  ln -sf build/compile_commands.json compile_commands.json
}
