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


cost() {
  local tmp1 tmp2
  tmp1=$(mktemp)
  tmp2=$(mktemp)
  {
    set +m
    npx ccusage@latest claude monthly --since $(date +%Y%m) > "$tmp1" 2>/dev/null &
    npx ccusage@latest claude daily --since $(date +%Y%m%d) > "$tmp2" 2>/dev/null &
    wait > /dev/null 2>/dev/null
  }

  cat "$tmp1" "$tmp2"
  rm -f "$tmp1" "$tmp2"
}

claude() {
  cost
  command claude "$@"
}

