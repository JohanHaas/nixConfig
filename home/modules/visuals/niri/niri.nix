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
  ];

  xdg.portal = {
    enable = true;
    extraPortals = [pkgs.xdg-desktop-portal-gtk];
    config.common.default = "*";
  };
}
