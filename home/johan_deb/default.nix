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
<<<<<<< HEAD:home/johan_mint/default.nix
=======
    papirus-icon-theme
>>>>>>> 198cd34 (deb):home/johan_deb/default.nix
  ];

  home.file = {
  };

  home.sessionVariables = {
  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
<<<<<<< HEAD:home/johan_mint/default.nix
=======

  nix = {
    package = pkgs.nix;
    settings.experimental-features = ["nix-command" "flakes"];
  };
>>>>>>> 198cd34 (deb):home/johan_deb/default.nix
}
