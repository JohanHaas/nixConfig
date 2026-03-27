{ inputs, pkgs }:
with inputs.firefox-addons.packages.${pkgs.system}; [
  bitwarden
  darkreader
  privacy-badger
  localcdn
  ublock-origin
  sponsorblock
  return-youtube-dislikes
  youtube-shorts-block
  youtube-no-translation
  duckduckgo-privacy-essentials
]
