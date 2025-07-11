{ config, pkgs, ... }:

{
  imports =
    [
      
    ];

  environment.systemPackages = with pkgs; [
    
  ];
  
  networking.hostName = "nix-tests";


  services.xserver.xkb = {
    layout = "de";
    variant = "";
  };

  system.stateVersion = "25.05";

  hardware.nvidia = {
    modesetting.enable = true;
    powerManagement.enable = true;  # Wichtig für Laptops/Energiesparmodus
    open = false;  # Falls du den Open-Source-Treiber testen willst (nicht empfohlen für Gaming)
    nvidiaSettings = true;  # Für nvidia-settings GUI
    package = config.boot.kernelPackages.nvidiaPackages.stable;  # Stabile Version
  };
}
