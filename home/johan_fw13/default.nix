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
    hypothesis
    pytest
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

    go
    
    ocaml
    dune
    opam
    ocamlPackages.lsp
    gmp
    pkg-config

    saber

    arduino-ide

    sops
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
      # Schluessel "ssh github" kommt aus Vaultwarden ueber den rbw-Agent.
      "github.com" = {
        hostname = "github.com";
        user = "git";
      };

      "vps" = {
        hostname = "159.69.23.42";
        user = "admin";
        identityFile = "~/.ssh/admin";
        identitiesOnly = true;
      };

      "home" = {
        hostname = "100.64.0.1";
        user = "admin";
        identityFile = "~/.ssh/admin-home";
        identitiesOnly = true;
      };
      "gitlab.ruhr-uni-bochum.de" = {
        hostname = "gitlab.ruhr-uni-bochum.de";
        identityFile = "~/.ssh/gitlabRUB";
      };
    };

    # SSH-Schluessel kommen aus Vaultwarden ueber den Agent von rbw. Der Agent
    # kennt das Terminal nicht, aus dem ssh aufgerufen wird; deshalb vorher
    # hier entsperren, damit die Abfrage im aktuellen Terminal erscheint.
    # stdin/stderr sind bei Match exec (und unter git) nicht am Terminal; das
    # steuernde Terminal (ps -o tty=, z. B. pts/3) erbt ssh aber immer.
    extraConfig = ''
      Match exec "rbw unlocked 2>/dev/null || { set -- $(ps -o tty= -p $$); case $1 in pts/*|tty*) RBW_TTY=/dev/$1 rbw unlock;; esac; }; true"
        IdentityAgent ''${XDG_RUNTIME_DIR}/rbw/ssh-agent-socket
    '';
  };

  programs.rbw = {
    enable = true;
    settings = {
      email = "mail@johanhaas.de";
      base_url = "https://vault.johanhaas.de";
      pinentry = pkgs.pinentry-curses;
      lock_timeout = 3600;
    };
  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
}
