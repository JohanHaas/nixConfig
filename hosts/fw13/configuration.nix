{
  config,
  lib,
  pkgs,
  inputs,
  home-manager,
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
    guitarix
    qjackctl

    distrobox
  ];

  services.xserver.enable = true;
  services.desktopManager.gnome.enable = true;
  services.displayManager = {
    defaultSession = "niri";
    sessionPackages = [
      inputs.niri.packages."${pkgs.system}".niri
    ];
  };

  virtualisation.docker.enable = true;

  virtualisation.podman = {
    enable = false;
    dockerCompat = true;
  };

  hardware.cpu.amd.updateMicrocode = true;

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

  services.printing.enable = false;
  services.avahi.enable = false;

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

  networking.hostName = "nix-btw";

  hardware.bluetooth = {
    enable = true;
    powerOnBoot = true;
    settings.General.Experimental = true;
  };
  services.blueman.enable = true;

  services.fwupd.enable = true;

  system.stateVersion = "25.11";
}
