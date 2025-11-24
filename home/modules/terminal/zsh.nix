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
  };
}
