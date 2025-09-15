{
  config,
  pkgs,
  lib,
  ...
}: {
  users.users.johan = {
    isNormalUser = true;
    description = "Johan";
    extraGroups = [
      "networkmanager"
      "wheel"
      "libvirtd"
      "fprint"
      "audio"
    ];
    packages = with pkgs; [];

    shell = pkgs.zsh;
  };
}
