{
  config,
  pkgs,
  ...
}:
{
  home.packages = with pkgs; [
    catppuccin-gtk
    papirus-icon-theme
    nautilus
    eog
  ];
  gtk = {
    enable = true;
    theme = {
      name = "Catppuccin-Mocha-Standard-Dark";
    };
    iconTheme = {
      name = "Papirus";
    };
  };
}
