{
  description = "A very basic flake";

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
  in {
    packages.${system} = {
      default = pkgs.stdenv.mkDerivation rec {
        name = "niri-config";
        src = ./.;

        installPhase = ''
          mkdir -p $out

          cp $src/config.kdl ./config.kdl

          echo "spawn-sh-at-startup \"swaybg -i ${inputs.wallpapers.packages.${pkgs.system}.default}/my-neighbour-totoro-sunflowers.png\"" >> ./config.kdl

          cp ./config.kdl $out/
        '';
      };
    };
  };
}
