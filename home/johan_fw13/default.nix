{
  config,
  pkgs,
  inputs,
  ...
}: {
  imports = [
    ../modules/userImports/johan_fw13.nix
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
    javaPackages.compiler.openjdk25

    protonvpn-gui
    signal-desktop

    arduino-ide
    wl-mirror
];

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

      "vps" = {
        hostname = "10.100.0.1";
        user = "admin";
        identityFile = "~/.ssh/admin";
        identitiesOnly = true;
      };

      "home" = {
        hostname = "10.100.0.2";
        user = "admin";
        identityFile = "~/.ssh/admin-home";
        identitiesOnly = true;
      };
    };
  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
}
