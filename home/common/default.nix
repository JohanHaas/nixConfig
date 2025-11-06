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
  ];
}
