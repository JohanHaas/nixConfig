{
  config,
  pkgs,
  ...
}: {
  imports = [
  ];

  home.packages = with pkgs; [
    udiskie
    unzip
    brightnessctl
  ];

  services.udiskie = {
    enable = true;
    notify = true;
  };
}
