{
  config,
  lib,
  pkgs,
  ...
}:
{
  imports = [

  ];

  environment.systemPackages = with pkgs; [

  ];

  services.logind.extraConfig = ''
    HandlePowerKey=ignore
  '';

  services.getty.autologinUser = "johan";

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

  system.stateVersion = "25.11";
}
