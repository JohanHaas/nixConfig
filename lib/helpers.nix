{
  inputs,
  nixpkgs,
  home-manager,
  self,
}:
{
  mkHost = {name, system ? "x86_64-linux", specialArgs ? {}, modules ? []}: nixpkgs.lib.nixosSystem {
    inherit system;
    specialArgs = {
      inherit inputs;
    } // specialArgs;
    modules = [
      "${self}/hosts/common"
      "${self}/hosts/${name}"
      "${self}/usrs"
      inputs.home-manager.nixosModules.default
    ] ++ modules;
  };

  mkHome = {name, system ? "x86_64-linux", extraSpecialArgs ? {}, modules ? [], nixpkgsConfig ? {}}: home-manager.lib.homeManagerConfiguration {
    pkgs = import nixpkgs {
      system = system;
      config = {
        allowUnfree = true;
        } // nixpkgsConfig;
    };
    extraSpecialArgs = {
      inherit inputs;
    } // extraSpecialArgs;
    modules = [
      "${self}/home/common"
      "${self}/home/johan_${name}"
      inputs.nvim-config.homeManagerModules.default
    ] ++ modules;
  };
}
