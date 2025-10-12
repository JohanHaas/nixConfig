{
  config,
  pkgs,
  wallpaper,
  inputs,
  lib,
  self,
  ...
}: {
  home.file.".config/niri/config.kdl".source = ./config.kdl;
  home.file.".config/niri/flake.nix".source = "${self}/flake.nix";

  home.packages = with pkgs; [
    inputs.niri.packages."${pkgs.system}".niri
    swaybg
    dbus
    xwayland-satellite
    wlogout
    inputs.agsConfig.packages.${system}.default
  ];

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
