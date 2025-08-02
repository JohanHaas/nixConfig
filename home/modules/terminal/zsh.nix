{
  config,
  pkgs,
  lib,
  ...
}:
{
  home.shellAliases = {
    fetchShell = "nix flake init --template github:JohanHaas/DevShells";
  };

  programs.zsh = {
    enable = true;

    syntaxHighlighting.enable = true;
    enableCompletion = true;

    plugins = [
      {
        name = "fzf";
        src = pkgs.fzf.src;
      }
    ];
    initContent = lib.mkOrder 1000 ''
      PROMPT="%F{red}%~%f %F{magenta}>%f "
      PS2="> "
    '';

    profileExtra = ''
      if [[ -z "$WAYLAND_DISPLAY" && "$XDG_VTNR" -eq 1 ]]; then
        exec dbus-run-session Hyprland
      fi
    '';

  };
}
