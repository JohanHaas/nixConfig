{ config, pkgs, inputs, ... }:

{

  imports = [
    ../modules/Hyprland.nix
    ../modules/waybar.nix
    ../modules/ags.nix
  ];

  home.username = "johan";
  home.homeDirectory = "/home/johan";

  home.stateVersion = "25.05";

  home.packages = with pkgs; [
    nodejs_24
    typescript
  ];

  home.file = {

  };

  home.sessionVariables = {

  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
}
