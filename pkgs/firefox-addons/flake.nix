{
  description = "firefox-addons";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-24.05";
    nixpkgs-unstable.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs =
    inputs@{
      self,
      nixpkgs,
      nixpkgs-unstable,
      ...
  }:
  let
    system = "x86_64-linux"; 

    addonDir = builtins.readDir ./addons;
    addonFiles = builtins.attrNames addonDir;
    

    addonPackages = builtins.listToAttrs (
      map (fileName:
      let 
        name = nixpkgs.lib.removeSuffix ".nix" fileName;
      in {
        name = name;
        value = {
          path = ./addons/${fileName};
          description = "package for ${name}";
        };
      }) addonFiles
    );
  in
  {
    packages.${system} = addonPackages;
  };
}
