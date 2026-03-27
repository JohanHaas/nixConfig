{
  config,
  pkgs,
  lib,
  ...
}: {
  home.shellAliases = {
  };

  home.file.".config/shell_functions.sh".text = builtins.readFile ./shellFunctions.sh;

  home.packages = with pkgs; [
    jq
  ];

  programs.zsh = {
    enable = true;

    syntaxHighlighting.enable = true;
    enableCompletion = true;

    initExtra = ''
      PROMPT="%F{red}%~%f %F{magenta}>%f "
      PS2="> "

      source "$HOME/.config/shell_functions.sh"
    '';
  };

  programs.fzf = {
    enable = true;
    enableZshIntegration = true;
  };
}
