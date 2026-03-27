{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    nixos-hardware.url = "github:NixOS/nixos-hardware/master";

    disko = {
      url = "github:nix-community/disko";
      inputs.nixpkgs.follows = "nixpkgs";
    };


    niri-config.url = "path:pkgs/niri-config";
    nvim-config.url = "path:pkgs/nvim";
    agsConfig.url = "github:JohanHaas/agsConfig";

    niri.url = "github:YaLTeR/niri";

    firefox-addons = {
      url = "gitlab:rycee/nur-expressions?dir=pkgs/firefox-addons";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    stylix = {
      url = "github:danth/stylix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs @ {
    self,
    nixpkgs,
    home-manager,
    stylix,
    ...
  }:
  let
    helpers = import ./lib/helpers.nix { inherit inputs nixpkgs home-manager self; };
  in {
    nixosConfigurations = {
      fw13 = helpers.mkHost {
        name = "fw13";
        modules = [
          inputs.nixos-hardware.nixosModules.framework-13-7040-amd
        ];
      };

      desktop = helpers.mkHost {
        name = "desktop";
        modules = [
          inputs.disko.nixosModules.disko
          disko/disko-desktop.nix
        ];
      };
    };

    homeConfigurations = {
      "johan@fw13" = helpers.mkHome { name = "fw13"; };
      "johan@desktop" = helpers.mkHome { name = "desktop"; };
    };
  };
}
