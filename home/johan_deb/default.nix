{
  config,
  pkgs,
  inputs,
  ...
}: {
  imports = [
    ../modules/userImports/johan_deb.nix
  ];
  home.username = "johan";
  home.homeDirectory = "/home/johan";
  home.stateVersion = "25.05";

  home.packages = with pkgs; [
    papirus-icon-theme
    discord
  ];

  home.file = {
  };

  home.sessionVariables = {
  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;

  nix = {
    package = pkgs.nix;
    settings.experimental-features = ["nix-command" "flakes"];
  };
}
