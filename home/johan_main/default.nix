{
  config,
  pkgs,
  inputs,
  ...
}:

{

  imports = [
    ../modules/userImports/johan_main.nix
  ];

  home.username = "johan";
  home.homeDirectory = "/home/johan";

  home.stateVersion = "25.05";

  home.packages = with pkgs; [
    anki
    eog

  ];

  home.file = {

  };

  home.sessionVariables = {

  };

  programs.ssh = {
    enable = true;
    matchBlocks = {
      "github.com" = {
        hostname = "github.com";
        user = "git";
        identityFile = "~/.ssh/id_ed25519_github";
        identitiesOnly = true;
      };
    };
  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
}
