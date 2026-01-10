{
  config,
  pkgs,
  inputs,
  ...
}:
let
  profileDir = "gaocorkf.default";

  mkExtensionSymlink = ext: {
    name = ".librewolf/${profileDir}/extensions/${ext.passthru.addonId}.xpi";
    value = {
      source = "${ext}/share/mozilla/extensions/{ec8030f7-c20a-464f-9b0e-13a3a9e97384}/${ext.passthru.addonId}.xpi";
    };
  };
  
  extensions = with inputs.firefox-addons.packages.${pkgs.system}; [
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
  ];
in
{
  home.file = builtins.listToAttrs (map mkExtensionSymlink extensions);
}
