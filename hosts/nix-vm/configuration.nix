{ config, pkgs, ... }:

{
  imports =
    [
      
    ];

  networking.hostName = "nix-vm";


  services.xserver.xkb = {
    layout = "de";
    variant = "";
  };

  environment.systemPackages = with pkgs; [
    
  ];

  system.stateVersion = "25.05";

}
