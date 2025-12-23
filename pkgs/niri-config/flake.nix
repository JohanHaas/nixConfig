{
  description = "niri-config";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

    wallpapers = {
      url = "git+ssh://git@github.com/JohanHaas/wallpapers.git?ref=main";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs @ {
    self,
    nixpkgs,
    ...
  }: let
    system = "x86_64-linux";

    pkgs = import nixpkgs {
      inherit system;
      config.allowUnfree = true;
      overlays = [
      ];
    };

    wallpaperPath = 
      if inputs ? wallpapers && inputs.wallpapers ? packages.${system}.default
      then "${inputs.wallpapers.packages.${system}.default}/my-neighbour-totoro-sunflowers.png"
      else "${pkgs.nixos-artwork.wallpapers.simple-blue}/share/backgrounds/nixos/nix-wallpaper-simple-blue.png";

      in {
    packages.${system} = {
      default = pkgs.stdenv.mkDerivation rec {
        name = "niri-config";
        src = ./.;

        installPhase = ''
          mkdir -p $out

          cp $src/config.kdl ./config.kdl

          echo "spawn-sh-at-startup \"swaybg -i ${wallpaperPath}\"" >> ./config.kdl

          cp ./config.kdl $out/
        '';
      };
    };
  };
}
