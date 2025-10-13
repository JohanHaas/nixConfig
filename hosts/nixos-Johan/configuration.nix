{
  config,
  lib,
  pkgs,
  inputs,
  ...
}: {
  imports = [
    ../modules
  ];

  environment.systemPackages = with pkgs; [
    spice
    spice-gtk
    virtiofsd
    pulseaudio
    guitarix
    jack2
    qjackctl
  ];

  services.vaultwarden = {
    enable = true;
    config = {
      ROCKET_PORT = 8222;
      DOMAIN = "https://vault.example.com";
      SIGNUPS_ALLOWED = false;
    };
  };

  services.pipewire.jack.enable = true;
  security.pam.loginLimits = [
    {
      domain = "@audio";
      type = "-";
      item = "rtprio";
      value = "95";
    }
    {
      domain = "@audio";
      type = "-";
      item = "memlock";
      value = "unlimited";
    }
    {
      domain = "@audio";
      type = "-";
      item = "nice";
      value = "-19";
    }
  ];

  services.displayManager.gdm.enable = true;

  services.printing.enable = true;

  services.avahi.enable = true;

  services.upower.enable = true;

  #virtualmachines
  programs.virt-manager.enable = true;

  users.groups.libvirtd.members = ["johan"];

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

  networking.firewall.trustedInterfaces = ["virbr0"];

  #powermenu
  services.logind.extraConfig = ''
    HandlePowerKey=ignore
  '';

  services.fprintd.enable = false;

  security.pam.services.hyprlock = {};

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
