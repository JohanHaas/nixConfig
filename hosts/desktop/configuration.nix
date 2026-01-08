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
    guitarix
    qjackctl
  ];

  programs.steam.enable = true;

  services.desktopManager.gnome.enable = true;

  virtualisation.docker.enable = true;

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

  #powermenu
  services.logind.extraConfig = ''
    HandlePowerKey=ignore
  '';

  networking.hostName = "nix-btw";

  hardware.bluetooth = {
    enable = true;
    powerOnBoot = true;
    settings.General.Experimental = true;
  };
  services.blueman.enable = true;

  system.stateVersion = "25.11";
}
