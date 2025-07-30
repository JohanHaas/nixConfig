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

    nvf = {
      url = "github:NotAShelf/nvf";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    nixos-hardware.url = "github:NixOS/nixos-hardware/master";
  };

  outputs =
    inputs@{
      self,
      nixpkgs,
      home-manager,
      ...
    }:
    let
      system = "x86_64-linux";

      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true;
      };

    in
    {

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

        nixos-Johan = nixpkgs.lib.nixosSystem {
          inherit system;
          specialArgs = { inherit inputs self; };
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
          ];
        };

        "johan@nixos-Johan" = home-manager.lib.homeManagerConfiguration {
          inherit pkgs;
          extraSpecialArgs = { inherit inputs self; };
          modules = [
            ./home/common
            ./home/johan_main
          ];
        };
      };
    };
}
