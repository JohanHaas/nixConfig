{ config, pkgs, ... }:
{
  imports = [

  ];

  home.packages = with pkgs; [
    firefox
    udiskie

  ];

  services.udiskie = {
    enable = true;
    notify = true;
  };
}
