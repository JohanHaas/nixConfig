{
  inputs,
  nixpkgs,
  home-manager,
  self,
}:
let
  inherit (nixpkgs) lib;
in
{
  mkHost = {
    name,
    system ? "x86_64-linux",
    specialArgs ? {},
    modules ? [],
  }:
    lib.nixosSystem {
      inherit system;
      specialArgs = { inherit inputs self; } // specialArgs;
      modules = [
        { networking.hostName = name; }
        "${self}/hosts/common"
        "${self}/hosts/${name}"
        "${self}/usrs"
        inputs.home-manager.nixosModules.default
      ] ++ modules;
    };

  mkHome = {
    name,
    system ? "x86_64-linux",
    extraSpecialArgs ? {},
    modules ? [],
    nixpkgsConfig ? {},
  }:
    home-manager.lib.homeManagerConfiguration {
      pkgs = import nixpkgs {
        inherit system;
        config = {
          allowUnfree = true;
        } // nixpkgsConfig;
      };
      extraSpecialArgs = { inherit inputs self; } // extraSpecialArgs;
      modules = [
        "${self}/home/common"
        "${self}/home/johan_${name}"
        inputs.nvim-config.homeManagerModules.default
      ] ++ modules;
    };
}
