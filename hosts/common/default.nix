{
  config,
  lib,
  pkgs,
  modulesPath,
  inputs,
  ...
}: {
  imports = [];

  environment.systemPackages = with pkgs; [
    git
    fastfetch
    home-manager
    tree
    fzf
    ltrace
  ];

  nix.settings.experimental-features = [
    "nix-command"
    "flakes"
  ];


  boot.loader.systemd-boot.enable = true;
  boot.loader.timeout = 0;
  boot.loader.efi.canTouchEfiVariables = true;

  hardware.enableAllFirmware = true;
  services.fstrim.enable = true; 
  hardware.enableRedistributableFirmware = true; 

  networking.networkmanager.enable = true;

  time.timeZone = "Europe/Berlin";
  i18n.defaultLocale = "de_DE.UTF-8";
  i18n.extraLocaleSettings = {
    LC_ADDRESS = "de_DE.UTF-8";
    LC_IDENTIFICATION = "de_DE.UTF-8";
    LC_MEASUREMENT = "de_DE.UTF-8";
    LC_MONETARY = "de_DE.UTF-8";
    LC_NAME = "de_DE.UTF-8";
    LC_NUMERIC = "de_DE.UTF-8";
    LC_PAPER = "de_DE.UTF-8";
    LC_TELEPHONE = "de_DE.UTF-8";
    LC_TIME = "de_DE.UTF-8";
  };
  console.keyMap = "de";

  nixpkgs.config.allowUnfree = true;

  nix.gc = {
    automatic = true;
    dates = "monthly";
    options = "--delete-older-than 30d";
    randomizedDelaySec = "30min";
    persistent = true;
  };

  nix.optimise = {
    automatic = true;
    dates = ["06:00"];
    persistent = true;
  };

  programs.zsh.enable = true;

  services.pipewire = {
    enable = true;
    alsa.enable = true;
    alsa.support32Bit = true;
    pulse.enable = true;
  };

  security.polkit.enable = true;
}
