{
  config,
  lib,
  pkgs,
  ...
}:
{
  imports = [

  ];

  services.fwupd.enable = true;
  hardware.framework.amd-7040.preventWakeOnAC = true;

  environment.systemPackages = with pkgs; [

  ];

  networking.hostName = "nixos-Johan";
}
