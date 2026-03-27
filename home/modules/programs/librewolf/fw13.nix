{
  config,
  pkgs,
  inputs,
  ...
}:
let
  profileDir = "gaocorkf.default";
  extensions = import ./extensions.nix { inherit inputs pkgs; };
  
  mkExtensionSymlink = ext: {
    name = ".librewolf/${profileDir}/extensions/${ext.passthru.addonId}.xpi";
    value = {
      source = "${ext}/share/mozilla/extensions/{ec8030f7-c20a-464f-9b0e-13a3a9e97384}/${ext.passthru.addonId}.xpi";
    };
  };
in
{
  home.file = builtins.listToAttrs (map mkExtensionSymlink extensions);
}
