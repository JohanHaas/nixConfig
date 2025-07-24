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

  };
}
