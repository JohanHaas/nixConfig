{
  config,
  pkgs,
  inputs,
  ...
}: {
  imports = [
    ../modules/userImports/johan_main.nix
  ];

  home.username = "johan";
  home.homeDirectory = "/home/johan";

  home.stateVersion = "25.05";

  home.packages = with pkgs; [
    anki
    eog
    discord
    spotify
    wasistlos
    pavucontrol
    usbutils
    pdfpc
    bitwarden-desktop
  ];


  programs.vscode = {
    enable = true;
    package = pkgs.vscodium;
  };

  home.sessionVariables = {
  };

  programs.ssh = {
    enable = true;

    matchBlocks = {
      "github.com" = {
        hostname = "github.com";
        user = "git";
        identityFile = "~/.ssh/id_ed25519_github";
        identitiesOnly = true;
      };

      "netcup-rootUser" = {
        hostname = "152.53.239.157";
        user = "nixer";
        identityFile = "~/ssh-keys/rootUser";
        identitiesOnly = true;
      };

      "netcup-wireguard" = {
        hostname = "152.53.239.157";
        user = "wireguard";
        identityFile = "~/ssh-keys/vpnUser";
        identitiesOnly = true;
      };
    };
  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
}
