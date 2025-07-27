{
  config,
  lib,
  pkgs,
  ...
}:
{
  imports = [

  ];

  environment.systemPackages = with pkgs; [

  ];

  security.pam.services.hyprlock = { };

  networking.hostName = "nixos-Johan";

  system.stateVersion = "25.11";
}
