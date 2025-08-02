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
      package = pkgs.catppuccin-gtk;
    };
    iconTheme = {
      name = "Papirus";
    };
    gtk3.extraConfig = {
      gtk-application-prefer-dark-theme = true;
    };
    gtk4.extraConfig = {
      gtk-application-prefer-dark-theme = true;
    };
  };
}
