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
  ];

  environment.systemPackages = with pkgs; [
    guitarix
    qjackctl

    distrobox
  ];

  services.displayManager = {
    gdm = {
      enable = true;
      wayland = true;
    };

    sessionPackages = [
      inputs.niri.packages."${pkgs.system}".niri
    ];
    defaultSession = "niri";
  };

  services.xserver = {
    enable = true;
    desktopManager = {
      xterm.enable = false;
      xfce.enable = true;
    };
    xkb.layout = "de";
  };

  virtualisation.podman = {
    enable = true;
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
