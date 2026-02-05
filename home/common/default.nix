{
  config,
  pkgs,
  ...
}: {
  imports = [
  ];

  home.packages = with pkgs; [
    unzip
    brightnessctl
    wl-clipboard
    nerd-fonts.hack
  ];

  home.sessionVariables = {
    "EDITOR" = "vim";
  };
}
