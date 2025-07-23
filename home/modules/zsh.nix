{ lib, pkgs, ... }:
{
  home.packages = with pkgs; [

  ];

  programs.zsh = {
    enable = true;
  };
}
