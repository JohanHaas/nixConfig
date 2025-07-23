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

  networking.hostName = "nixos-Johan";
}
