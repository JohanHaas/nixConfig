{
  config,
  pkgs,
  lib,
  ...
}:
{
  programs.zsh = {
    enable = true;

    syntaxHighlighting.enable = true;
    enableCompletion = true;

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
