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
    guitarix
    qjackctl
  ];

  programs.steam.enable = true;

  services.displayManager.sddm.wayland.enable = true;
  services.displayManager.sddm.enable = true;
 

  services.desktopManager.gnome.enable = true;
  services.gnome.core-apps.enable = false;
  environment.gnome.excludePackages = with pkgs; [
    gnome-tour
  ];

  virtualisation.docker.enable = false;

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

  networking.hostName = "nix-btw";

  hardware.bluetooth = {
    enable = true;
    powerOnBoot = true;
    settings.General.Experimental = true;
  };
  services.blueman.enable = true;

  system.stateVersion = "25.11";
}
