{
  config,
  pkgs,
  lib,
  ...
}: {
  home.shellAliases = {
  };

  home.file.".config/shell_functions.sh".text = builtins.readFile ./shellFunctions.sh;

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

      source "$HOME/.config/shell_functions.sh"
    '';

    #profileExtra = ''
    # if [[ -z "$WAYLAND_DISPLAY" && "$XDG_VTNR" -eq 1 ]]; then
    #   exec dbus-run-session Hyprland
    # fi
    #'';
  };
}
