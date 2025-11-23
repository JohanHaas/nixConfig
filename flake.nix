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

    niri.url = "github:YaLTeR/niri";

    niri-config.url = "path:pkgs/niri-config";

    agsConfig.url = "github:JohanHaas/agsConfig";

    nvf = {
      url = "github:NotAShelf/nvf";
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
      nix-tests = nixpkgs.lib.nixosSystem {
        inherit system;
        specialArgs = {
          inherit inputs self;
        };
        modules = [
          ./hosts/common
          ./usrs
          ./hosts/nix-tests
          inputs.home-manager.nixosModules.default
        ];
      };

      nixos-Johan = nixpkgs.lib.nixosSystem {
        inherit system;
        specialArgs = {
          inherit inputs self;
        };
        modules = [
          ./hosts/common
          ./usrs
          ./hosts/nixos-Johan
          inputs.home-manager.nixosModules.default
          inputs.nixos-hardware.nixosModules.framework-13-7040-amd
        ];
      };
    };

    # Home-configurations

    homeConfigurations = {
      "johan@nix-tests" = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;
        extraSpecialArgs = {
          inherit inputs self;
        };
        modules = [
          ./home/common
          ./home/johan_nix-tests
        ];
      };

      "johan@mint" = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;
        extraSpecialArgs = {inherit inputs self;};
        modules = [
          ./home/johan_mint
        ];
      };

      "johan@nixos-Johan" = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;
        extraSpecialArgs = {
          inherit inputs self;
        };
        modules = [
          ./home/common
          ./home/johan_main
        ];
      };
    };
  };
}
