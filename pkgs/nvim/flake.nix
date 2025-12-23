{
  description = "nvim-config";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
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
        name = "nvim-config";
        src = ./.;

        installPhase = ''
          mkdir -p $out

          cp -r $src/nvim/* $out/
        '';
      };
    };

    homeManagerModules.default = { pkgs, ... }:
    {
      home.file.".config/nvim".source = self.packages.${pkgs.system}.default;

      home.packages = with pkgs; [
        lua-language-server
        
        texliveFull
        texlivePackages.enumitem
        texlab
        zathura
      ];

      programs.neovim = {
        enable = true;
        viAlias = true;
        vimAlias = true;

        plugins = with pkgs.vimPlugins; [
          #lsp
          nvim-lspconfig
          nvim-cmp
          luasnip
          cmp-nvim-lsp

          #filesystem
          neo-tree-nvim
          nvim-web-devicons

          #visuals
          catppuccin-nvim
          
          #autopairs
          nvim-autopairs
          luasnip

          vimtex
          
        ];
      };
    };
  };
}
