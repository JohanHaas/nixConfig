{
  config,
  pkgs,
  sddmWallpaper,
  sddmWallpaperName,
  ...
}: let
  mainQML = ./sddm-config/Main.qml;
  metadata = ./sddm-config/metadata.desktop;

  SddmTheme = pkgs.stdenv.mkDerivation {
    name = "SddmTheme";
    src = ./.;
    installPhase = ''
            mkdir -p $out/share/sddm/themes/SddmTheme/images
            cp ${mainQML} $out/share/sddm/themes/SddmTheme/Main.qml
            cp ${metadata} $out/share/sddm/themes/SddmTheme/metadata.desktop
            cp ${sddmWallpaper} $out/share/sddm/themes/SddmTheme/images/${sddmWallpaperName}
            cat > $out/share/sddm/themes/SddmTheme/theme.conf <<EOF
      [General]
      Name=SddmTheme
      Description=Ein minimalistisches SDDM-Theme im Hyprlock-Stil
      Version=1.0
      background=images/${sddmWallpaperName}
      EOF
    '';
  };
in {
  environment.systemPackages = with pkgs; [
    kdePackages.sddm
    SddmTheme
  ];

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

    #theme = "SddmTheme";
  };
}
