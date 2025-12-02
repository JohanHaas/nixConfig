{
  config,
  pkgs,
  ...
}: {
  imports = [
  ];

  environment.systemPackages = with pkgs; [
  ];

  networking.hostName = "nix-tests";

  services.xserver.xkb = {
    layout = "de";
    variant = "";
  };

  system.stateVersion = "25.05";

  hardware.nvidia = {
    modesetting.enable = true;
    powerManagement.enable = true;
    open = false;
    nvidiaSettings = true;
    package = config.boot.kernelPackages.nvidiaPackages.stable;
  };
}
