{ config, pkgs, inputs, ... }:

{
  home.username = "johan";
  home.homeDirectory = "/home/johan";
  home.stateVersion = "25.05";

  home.packages = with pkgs; [
    inputs.ags.packages.${pkgs.system}.default
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

