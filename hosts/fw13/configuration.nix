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
    ../modules/nfs.nix
  ];

  environment.systemPackages = with pkgs; [
    guitarix
    qjackctl

    brave

    thunderbird

    man-pages
    man-pages-posix

    distrobox
  ];

  virtualisation.virtualbox.host.enable = true;
  users.extraGroups.vboxusers.members = [ "johan" ];

  programs.nix-ld.enable = true;

  documentation.enable = true;
  documentation.man.enable = true;
  documentation.dev.enable = true;


  systemd.user.services.protonmail-bridge = {          
    description = "Protonmail Bridge";          
    enable = true;          
    script = "${pkgs.protonmail-bridge}/bin/protonmail-bridge --noninteractive --log-level info";          
    path = [ pkgs.gnome-keyring ]; # HACK: https://github.com/ProtonMail/proton-bridge/issues/176          
    wantedBy = [ "graphical-session.target" ];          
    partOf = [ "graphical-session.target" ];
  };

  services.gnome.gnome-keyring.enable = true;
  security.pam.services.login.enableGnomeKeyring = true;
  services.desktopManager.gnome.enable = true;
  services.gnome.core-apps.enable = true;
  services.gnome.core-developer-tools.enable = false;
  services.gnome.games.enable = false;
  environment.gnome.excludePackages = with pkgs; [ gnome-tour gnome-user-docs ];


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

  #services.xserver = {
  #  enable = true;
  #  desktopManager = {
  #    xterm.enable = false;
  #    xfce.enable = false;
  #  };
  #  xkb.layout = "de";

  virtualisation.docker = {
    enable = true;
  };

  #virtualisation.podman = {
  #  enable = true;
  #  dockerCompat = true;
  #};

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

  services.printing.enable = true;

  services.upower.enable = true;

  services.fprintd.enable = false;

  hardware.bluetooth = {
    enable = true;
    powerOnBoot = true;
    settings.General.Experimental = true;
  };
  services.blueman.enable = true;

  services.fwupd.enable = true;

  system.stateVersion = "25.11";
}
