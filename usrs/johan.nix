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
    ];
    packages = with pkgs; [];

    shell = pkgs.zsh;
  };

  users.groups.plugdev = {};
  services.udev.extraRules = ''
    SUBSYSTEM=="usb", ATTRS{idVendor}=="0451", ATTRS{idProduct}=="bef3", MODE="0666", GROUP="plugdev"
    SUBSYSTEM=="usb", ATTRS{idVendor}=="0451", ATTRS{idProduct}=="bef4", MODE="0666", GROUP="plugdev"
  '';
}
