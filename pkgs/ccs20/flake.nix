{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";

    pkgs = import nixpkgs {
      inherit system;
      config.allowUnfree = true;
      overlays = [
      ];
    };
  in {
    packages.${system}.default = pkgs.stdenv.mkDerivation rec {
      name = "SIMPLELINK-MSP432-SDK";

      src = pkgs.fetchurl {
        url = "https://dr-download.ti.com/software-development/software-development-kit-sdk/MD-dSV82B3Lb6/3.40.01.02/simplelink_msp432p4_sdk_3_40_01_02.run";
        hash = "sha256-qwt4Frh9c2v0cxzGWNbWPRA3ZY4cHXta4ShsG8ZSfb8=";
      };

      buildInputs = with pkgs; [
        steam-run
      ];

      dontUnpack = true;

      installPhase = ''
        runHook preInstall

        mkdir -p $out

        cp $src installer.run
        chmod +x installer.run

        INSTALL_DIR=$(mktemp -d)

        steam-run ./installer.run \
        --mode unattended \
        --prefix "$INSTALL_DIR"

        mkdir -p $out
        cp -r $INSTALL_DIR/* $out/

        runHook postInstall
      '';
    };
  };
}
