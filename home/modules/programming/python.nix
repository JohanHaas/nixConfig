{ config, pkgs, ... }:
{
  home.packages = with pkgs; [
    python3
    python313
    python313Packages.google-genai
  ];
}
