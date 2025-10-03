{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    niri.url = "github:YaLTeR/niri";

    #hyprland.url = "github:hyprwm/Hyprland";

    #hyprland-plugins = {
    #  url = "github:hyprwm/hyprland-plugins";
    #  inputs.hyprland.follows = "hyprland";
    #};

    #hyprpaper.url = "github:hyprwm/hyprpaper";

    waybar.url = "github:Alexays/Waybar";

    nvf = {
      url = "github:NotAShelf/nvf";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    nixos-hardware.url = "github:NixOS/nixos-hardware/master";

    stylix = {
      url = "github:danth/stylix";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    wallpapers = {
      url = "git+ssh://git@github.com/JohanHaas/wallpapers.git?ref=main";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs @ {
    self,
    nixpkgs,
    home-manager,
    ...
  }: let
    system = "x86_64-linux";

    pkgs = import nixpkgs {
      inherit system;
      config.allowUnfree = true;
      overlays = [
      ];
    };

    #globally set wallpaper
    wallpaperName = builtins.readFile ./assets/wallpaper_name.txt;
    wallpaper = "${inputs.wallpapers.packages.${pkgs.system}.default}/${wallpaperName}";

    sddmWallpaperName = "my-neighbour-totoro-sunflowers.png";
    sddmWallpaper = "${inputs.wallpapers.packages.${pkgs.system}.default}/${sddmWallpaperName}";
  in {
    inherit wallpaper;

    #nixos-configurations

    nixosConfigurations = {
      nix-tests = nixpkgs.lib.nixosSystem {
        inherit system;
        specialArgs = {inherit inputs self;};
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
          inherit
            inputs
            self
            sddmWallpaper
            sddmWallpaperName
            ;
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
          inherit inputs self wallpaper;
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
          inherit
            inputs
            self
            wallpaper
            wallpaperName
            ;
        };
        modules = [
          ./home/common
          ./home/johan_main
        ];
      };
    };
  };
}
