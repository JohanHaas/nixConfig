{
  config,
  lib,
  pkgs,
  ...
}:
{
  imports = [
    #../modules/stylix
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

  system.stateVersion = "25.11";
}
