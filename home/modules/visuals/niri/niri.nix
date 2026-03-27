{
  config,
  pkgs,
  wallpaper,
  inputs,
  lib,
  self,
  ...
}: {
  home.file.".config/niri/config.kdl".source = "${inputs.niri-config.packages.${pkgs.system}.default}/config.kdl";

  home.packages = with pkgs; [
    inputs.niri.packages."${pkgs.system}".niri
    swaybg #background image
    dbus
    xwayland-satellite
    inputs.agsConfig.packages.${system}.default
    fluent-icon-theme
    libnotify
  ];


  #audio and brightness slider
  services.swayosd = {
    enable = true;
    topMargin = 0.9;
  };

  #notifications
  services.swaync = {
    enable = true;
    settings = {
      positionX = "right";
      positionY = "top";
      layer = "overlay";
      control-center-layer = "top";
      control-center-margin-top = 0;
      control-center-margin-bottom = 0;
      control-center-margin-right = 0;
      control-center-margin-left = 0;
      notification-inline-replies = false;
      notification-icon-size = 64;
      notification-body-image-height = 100;
      notification-body-image-width = 200;
    };
  };

  #screen sharing
  xdg.portal = {
    enable = true;
    extraPortals = [
      pkgs.xdg-desktop-portal-gtk
      pkgs.xdg-desktop-portal-gnome
    ];
    config = {
      common = {
        default = ["gtk"];
      };
      niri = {
        default = [
          "gtk"
          "gnome"
        ];
        "org.freedesktop.impl.portal.ScreenCast" = ["gnome"];
        "org.freedesktop.impl.portal.Screenshot" = ["gnome"];
      };
    };
  };
}
