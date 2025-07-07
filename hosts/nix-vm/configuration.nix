{ config, pkgs, ... }:

{
  imports =
    [
      
    ];

  environment.systemPackages = with pkgs; [
    
  ];
  
  networking.hostName = "nix-vm";


  services.xserver.xkb = {
    layout = "de";
    variant = "";
  };

  system.stateVersion = "25.05";

  virtualisation.virtualbox.guest.enable = true;

}
