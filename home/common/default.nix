{
  config,
  pkgs,
  ...
}: {
  imports = [
  ];

  home.packages = with pkgs; [
    firefox
    udiskie
    unzip
    brightnessctl
  ];

  services.udiskie = {
    enable = true;
    notify = true;
  };
}
