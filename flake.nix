{

  inputs = {

    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    hyprland.url = "github:hyprwm/Hyprland";

    hyprland-plugins = {
      url = "github:hyprwm/hyprland-plugins";
      inputs.hyprland.follows = "hyprland";
    };

    hyprpaper.url = "github:hyprwm/hyprpaper";

    waybar.url = "github:Alexays/Waybar";

    hyprcursor.url = "github:hyprwm/hyprcursor";

    astal = {
      url = "github:aylur/astal";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    ags = {
      url = "github:aylur/ags";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.astal.follows = "astal";
    };
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
        inherit pkgs;
        extraSpecialArgs = { inherit inputs self; };
        modules = [
          ./home/common
          ./home/johan_nix-tests
          inputs.ags.homeManagerModules.default
        ];
      };

      "johan@nix-vm" = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;
        extraSpecialArgs = { inherit inputs self; };
        modules = [
          ./home/common
          ./home/johan_nix-tests
        ];
      };

      "johan@mint" = home-manager.lib.homeManagerConfiguration { 
        inherit pkgs;
        extraSpecialArgs = { inherit inputs self; };
        modules = [
          ./home/johan_mint
          inputs.ags.homeManagerModules.default
        ];
      };
    };
  };
}
