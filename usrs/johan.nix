{
  config,
  pkgs,
  lib,
  ...
}:
{
  users.users.johan = {
    isNormalUser = true;
    description = "Johan";
    extraGroups = [
      "networkmanager"
      "wheel"
      "libvirtd"
    ];
    packages = with pkgs; [ ];

    shell = pkgs.zsh;
  };
}
