{
  config,
  pkgs,
  lib,
  ...
}:
{
  users.users.johan = {
    isNormalUser = true;
    description = "Johan";
    extraGroups = [
      "networkmanager"
      "wheel"
    ];
    packages = with pkgs; [ ];

    shell = pkgs.zsh;
  };
}
