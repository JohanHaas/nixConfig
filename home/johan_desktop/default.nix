{
  config,
  pkgs,
  inputs,
  ...
}: {
  imports = [
    ../modules/userImports/johan_desktop.nix
  ];

  home.username = "johan";
  home.homeDirectory = "/home/johan";

  home.stateVersion = "25.05";

  home.packages = with pkgs; [
    discord
    spotify
    wasistlos
    pavucontrol
    usbutils
    bitwarden-desktop
  ];

  home.sessionVariables = {
  };


  programs.home-manager.enable = true;
}
