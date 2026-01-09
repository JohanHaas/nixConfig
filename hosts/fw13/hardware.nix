{
  config,
  pkgs,
  inputs,
  ...
}:
{
  boot.kernelParams = [ "amd_pstate=active" ];
}
