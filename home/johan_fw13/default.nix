{
  config,
  pkgs,
  inputs,
  ...
}: 
let
  python-with-pkgs = pkgs.python3.withPackages (ps: with ps; [
    vtk
    pyvista
    numpy

    black
    pyyaml
    sympy
    sortedcontainers
    scipy
    psutil
    mpmath
    galois
    numpy
  ]);
in
{
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

    maven
    javaPackages.compiler.openjdk25
    #javaPackages.compiler.openjdk21
    nodejs
    spring-boot-cli

    claude-code

    protonvpn-gui
    signal-desktop

    zulip
    gnumake
    gcc
  
    digital
  
    paraview

    python3Packages.pyyaml

    neural-amp-modeler-lv2
    ardour

    python-with-pkgs
    pylint
    pre-commit

    ripgrep

    tor-browser
  ];

  home.sessionVariables = {
  };

  programs.vscode = {
    enable = true;
    package = pkgs.vscodium;
    profiles.default.extensions = with pkgs.vscode-extensions; [
      dracula-theme.theme-dracula
      vscodevim.vim
      yzhang.markdown-all-in-one
      anthropic.claude-code
    ];
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
      "gitlab.ruhr-uni-bochum.de" = {
        hostname = "gitlab.ruhr-uni-bochum.de";
        identityFile = "~/.ssh/gitlabRUB";
      };
    };
  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
}
