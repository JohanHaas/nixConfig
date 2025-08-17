{
  config,
  lib,
  pkgs,
  ...
}:
{
  imports = [
    ../modules
  ];

  environment.systemPackages = with pkgs; [
    spice
    spice-gtk
    virtiofsd
  ];

  #virtualmachines
  programs.virt-manager.enable = true;

  users.groups.libvirtd.members = [ "johan" ];

  virtualisation.libvirtd = {
    enable = true;
    qemu = {
      package = pkgs.qemu_kvm;
      runAsRoot = true;
      swtpm.enable = true;
      ovmf = {
        enable = true;
        packages = [
          (pkgs.OVMF.override {
            secureBoot = true;
            tpmSupport = true;
          }).fd
        ];
      };
    };
  };

  virtualisation.spiceUSBRedirection.enable = true;

  networking.firewall.trustedInterfaces = [ "virbr0" ];

  #powermenu
  services.logind.extraConfig = ''
    HandlePowerKey=ignore
  '';

  services.fprintd.enable = false;

  security.pam.services.hyprlock = { };

  networking.hostName = "nixos-Johan";

  hardware.bluetooth = {
    enable = true;
    powerOnBoot = true;
    settings.General.Experimental = true;
  };
  services.blueman.enable = true;

  programs.thunar.enable = true;
  programs.xfconf.enable = true;
  services.gvfs.enable = true;

  services.fwupd.enable = true;

  system.stateVersion = "25.11";
}
