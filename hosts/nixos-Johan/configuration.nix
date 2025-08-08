{
  config,
  lib,
  pkgs,
  wallpaper,
  wallpaperName,
  ...
}:
let
  mainQML = ./SddmTheme/Main.qml;
  metadata = ./SddmTheme/metadata.desktop;

  SddmTheme = pkgs.stdenv.mkDerivation {
    name = "SddmTheme";
    src = ./.;
    installPhase = ''
            mkdir -p $out/share/sddm/themes/SddmTheme/images
            cp ${mainQML} $out/share/sddm/themes/SddmTheme/Main.qml
            cp ${metadata} $out/share/sddm/themes/SddmTheme/metadata.desktop
            cp ${wallpaper} $out/share/sddm/themes/SddmTheme/images/${wallpaperName}
            cat > $out/share/sddm/themes/SddmTheme/theme.conf <<EOF
      [General]
      Name=SddmTheme
      Description=Ein minimalistisches SDDM-Theme im Hyprlock-Stil
      Version=1.0
      background=images/${wallpaperName}
      EOF
    '';
  };
in
{
  imports = [

  ];

  environment.systemPackages = with pkgs; [
    spice
    spice-gtk
    virtiofsd

    kdePackages.sddm
    SddmTheme
  ];

  #virtualmachines
  programs.virt-manager.enable = true;

  users.groups.libvirtd.members = [ "johan" ];

  virtualisation.libvirtd = {
    enable = true;
    qemu = {
      package = pkgs.qemu_kvm;
      runAsRoot = true;
      swtpm.enable = true;
      ovmf = {
        enable = true;
        packages = [
          (pkgs.OVMF.override {
            secureBoot = true;
            tpmSupport = true;
          }).fd
        ];
      };
    };
  };

  virtualisation.spiceUSBRedirection.enable = true;

  networking.firewall.trustedInterfaces = [ "virbr0" ];

  #powermenu
  services.logind.extraConfig = ''
    HandlePowerKey=ignore
  '';

  #hyprlock login
  #services.getty.autologinUser = "johan";
  services.displayManager.sddm = {
    enable = true;
    wayland.enable = true;
    package = pkgs.kdePackages.sddm;
    extraPackages = with pkgs; [
      kdePackages.qtsvg
      SddmTheme
    ];

    settings = {
      General = {
        GreeterEnvironment = "QT_SCREEN_SCALE_FACTORS=2,QT_FONT_DPI=192";
      };

      Wayland.EnableHiDPI = true;

      X11 = {
        EnableHiDPI = true;
        ServerArguments = "-nolisten tcp -dpi 192";
      };
    };

    theme = "SddmTheme";
  };

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

  services.fwupd.enable = true;

  system.stateVersion = "25.11";
}
