{
  config,
  pkgs,
  inputs,
  ...
}:
{
  imports = [
    inputs.stylix.homeModules.stylix
  ];

  stylix = {
    enable = true;
    base16Scheme = "${pkgs.base16-schemes}/share/themes/catppuccin-mocha.yaml";
    autoEnable = false;
    targets = {
      gtk.enable = true;
    };
  };

  gtk.iconTheme = {
    name = "Papirus";
    package = pkgs.papirus-icon-theme;
  };
}
