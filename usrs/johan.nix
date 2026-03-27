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
      "audio"
      "docker"
    ];
    packages = with pkgs; [];
    
    hashedPassword = "$6$EdwXj4YFHrKrIiBF$bijzFiEc4HCxd8b/MvNFgRs1LeCDwS6kcIC4hylrHZPiNP83SIx24JApZ0qUez.pK3QWb0ja1e8VPKGgxPUy//";

    shell = pkgs.zsh;
  };
}
