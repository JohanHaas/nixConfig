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
    wlogout
    inputs.agsConfig.packages.${system}.default
    fluent-icon-theme
  ];


  #audio and brightness slider
  services.swayosd = {
    enable = true;
    topMargin = 0.9;
  };


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
