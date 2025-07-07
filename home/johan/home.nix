{ config, pkgs, ... }:

{

  imports = [
    ../modules/Hyprland.nix
    ../modules/waybar.nix
  ];

  home.username = "johan";
  home.homeDirectory = "/home/johan";

  home.stateVersion = "25.05";

  home.packages = [

  ];

  home.file = {

  };

  home.sessionVariables = {

  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
}
