{
  config,
  pkgs,
  ...
}:
{
  programs.zsh = {
    enable = true;
    enableBashCompletion = true;
    enableSyntaxHighlighting = true;
    autosuggestions.enable = true;
    defaultShell = true;

    shellAliases = {
      ll = "ls -l";
      update = "sudo nixos-rebuild switch";
    };
    history.size = 10000;
  };
}
