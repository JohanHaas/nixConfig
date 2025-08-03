{
  config,
  pkgs,
  ...
}:
{
  home.packages = with pkgs; [
    bat
    pistol
    file
    poppler_utils
    ueberzug
    glow
    mpv
    mediainfo
    unzip
    gnutar
    tmux
  ];

  programs.nnn = {
    enable = true;

    plugins = {
      src =
        (pkgs.fetchFromGitHub {
          owner = "jarun";
          repo = "nnn";
          rev = "5d55b4af6b3b362bf598ef2426d030b8b9b45f40";
          sha256 = "sha256-c64qMlmYNK1J1BOp9MaaMO1vjZ3KUTod6rlqbCT/0ks=";
        })
        + "/plugins";
      mappings = {
        j = "autojump";
        p = "preview-tui";
      };
    };
  };
}
