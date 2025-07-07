{ config, pkgs, lib, ... }:
{ 
  users.users.johan = {
    isNormalUser = true;
    description = "Johan";
    extraGroups = [ "networkmanager" "wheel" "vboxsf" ];
    packages = with pkgs; [];
  };
}