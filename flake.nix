{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    firefox-addons = {
      url = "gitlab:rycee/nur-expressions?dir=pkgs/firefox-addons";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    nixos-hardware.url = "github:NixOS/nixos-hardware/master";

    disko = {
      url = "github:nix-community/disko";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    niri.url = "github:YaLTeR/niri";

    niri-config.url = "path:pkgs/niri-config";

    nvim-config.url = "path:pkgs/nvim";

    agsConfig.url = "github:JohanHaas/agsConfig";

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
  }: let
    system = "x86_64-linux";

    pkgs = import nixpkgs {
      inherit system;
      config.allowUnfree = true;
      overlays = [
      ];
    };
  in {
    #nixos-configurations

    nixosConfigurations = {
      idea = nixpkgs.lib.nixosSystem {
        inherit system;
        specialArgs = {
          inherit inputs self;
        };
        modules = [
          ./hosts/common
          ./usrs
          ./hosts/nix-tests
          inputs.disko.nixosModules.disko
          ./disko/disko-config.nix
          inputs.home-manager.nixosModules.default
        ];
      };

      fw13 = nixpkgs.lib.nixosSystem {
        inherit system;
        specialArgs = {
          inherit inputs self;
        };
        modules = [
          ./hosts/common
          ./usrs
          ./hosts/fw13
          #inputs.disko.nixosModules.disko
          #./disko/disko-config.nix
          inputs.home-manager.nixosModules.default
          inputs.nixos-hardware.nixosModules.framework-13-7040-amd
        ];
      };
    };

    # Home-configurations

    homeConfigurations = {
      "johan@idea" = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;
        extraSpecialArgs = {
          inherit inputs self;
        };
        modules = [
          ./home/common
          ./home/johan_idea
          inputs.nvim-config.homeManagerModules.default
        ];
      };

      "johan@fw13" = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;
        extraSpecialArgs = {
          inherit inputs self;
        };
        modules = [
          ./home/common
          ./home/johan_fw13
          inputs.nvim-config.homeManagerModules.default
        ];
      };
    };
  };
}
