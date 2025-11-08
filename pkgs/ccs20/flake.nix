{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

    ccs.url = "github:abeljim/ccs-nix";
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
      sdk = pkgs.stdenv.mkDerivation rec {
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

      compiler = pkgs.stdenv.mkDerivation rec {
        name = "ti_cgt_tms470_20.2.7";

        src = pkgs.fetchurl {
          url = "https://dr-download.ti.com/software-development/ide-configuration-compiler-or-debugger/MD-sDOoXkUcde/20.2.7.LTS/ti_cgt_tms470_20.2.7.LTS_linux-x64_installer.bin";
          hash = "sha256-aXvDge0AxS174Z1n8c32UaMGjsfDhATt1pbuf4Afs+g=";
        };

        buildInputs = with pkgs; [
          steam-run
        ];

        dontUnpack = true;

        installPhase = ''
          runHook preInstall


          cp $src installer.bin
          chmod +x installer.bin

          INSTALL_DIR=$(mktemp -d)

          steam-run ./installer.bin \
          --mode unattended \
          --prefix "$INSTALL_DIR"

          mkdir -p $out
          cp -r $INSTALL_DIR/* $out/

          runHook postInstall
        '';
      };
    };

    homeManagerModules = {
      ccs = {pkgs, ...}: {
        home.packages = [
          self.packages.${system}.sdk
          self.packages.${system}.compiler
          inputs.ccs.packages.${system}.default
        ];

        home.file."ti/simplelink_msp432p4_sdk_3_40_01_02".source = self.packages.${system}.sdk;
        home.file."ti/ti_cgt_tms470_20.2.7".source = self.packages.${system}.compiler;
      };
    };
  };
}
