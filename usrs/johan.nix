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
      "plugdev"
      "dialout"
      "docker"
    ];
    packages = with pkgs; [];
    
    hashedPassword = "$6$EdwXj4YFHrKrIiBF$bijzFiEc4HCxd8b/MvNFgRs1LeCDwS6kcIC4hylrHZPiNP83SIx24JApZ0qUez.pK3QWb0ja1e8VPKGgxPUy//";

    shell = pkgs.zsh;
  };

  users.groups.plugdev = {};
  services.udev.extraRules = ''
    SUBSYSTEM=="usb", ATTRS{idVendor}=="0451", ATTRS{idProduct}=="bef3", MODE="0666", GROUP="plugdev"
    SUBSYSTEM=="usb", ATTRS{idVendor}=="0451", ATTRS{idProduct}=="bef4", MODE="0666", GROUP="plugdev"
  '';
}
