{

  inputs = {

    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    hyprland.url = "github:hyprwm/Hyprland";

  };

  outputs = inputs@{self, nixpkgs, home-manager, ...}: 
  let
    system = "x86_64-linux";

    pkgs = import nixpkgs {
      inherit system;
      config.allowUnfree = true;
    };

  in {

    #nixos-configurations
    
    nixosConfigurations = {
      nix-tests = nixpkgs.lib.nixosSystem {
        inherit system;
        specialArgs = { inherit inputs self; };
        modules = [
          ./hosts/common
          ./usrs
          ./hosts/nix-tests
          inputs.home-manager.nixosModules.default
        ];
      };

      nix-vm = nixpkgs.lib.nixosSystem {
        inherit system;
        specialArgs = { inherit inputs self; };
        modules = [ 
          ./hosts/common
          ./usrs
          ./hosts/nix-vm
          inputs.home-manager.nixosModules.default
          ];
      };
    };


    # Home-configurations
    
    homeConfigurations = {
      "johan@nix-tests" = home-manager.lib.homeManagerConfiguration {
        pkgs = nixpkgs.legacyPackages."x86_64-linux";
        inherit system;
        specialArgs = { inherit inputs self; };
        modules = [
          ./home/common
          ./home/johan
        ];
      };

      "johan@nix-vm" = home-manager.lib.homeManagerConfiguration {
        pkgs = nixpkgs.legacyPackages."x86_64-linux";
        inherit system;
        SpecialArgs = { inherit inputs self; };
        modules = [
          ./home/common
          ./home/johan
        ];
      };
    };
  };
}
