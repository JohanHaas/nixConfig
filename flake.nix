{

  inputs = {

    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };

  };

  outputs = inputs@{self, nixpkgs, home-manager}: 
  let
    system = "x86_64-linux";

    pkgs = import nixpkgs {
      inherit system;
      config.allowUnfree = true;
    };

    moduleArgs = {
      inherit pkgs;
      inherit (nixpkgs.lib) lib;
      inherit home-manager;
    };

  in {

    #nixos-configurations
    
    nixosConfigurations = {
      nix-tests = nixpkgs.lib.nixosSystem {
        inherit system;
        extraSpecialArgs = { inherit inputs self; };
        modules = [
          ./hosts/common
          ./hosts/nix-tests
          inputs.home-manager.nixosModules.default
        ];
      };

      nixos-johan = nixpkgs.lib.nixosSystem {
        inherit system;
        extraSpecialArgs = { inherit inputs self; };
        modules = [ 
          ./hosts/common
          ./hosts/nixos-johan
          inputs.home-manager.nixosModules.default
          ];
      };
    };


    # Home-configurations
    
    homeConfigurations = {
      "johan@nix-tests" = home-manager.lib.homeManagerConfiguration {
        pkgs = nixpkgs.legacyPackages."x86_64-linux";
        inherit system;
        extraSpecialArgs = { inherit inputs self; };
        modules = [
          ./home/common
          ./home/johan
        ];
      };
    };
  };
}
