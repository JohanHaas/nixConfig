{
  config,
  pkgs,
  inputs,
  ...
}:
{
  boot.kernelPackages = pkgs.linuxPackages_latest;
  boot.kernelParams = [ "amd_pstate=active" ];
}
