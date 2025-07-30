{
  config,
  pkgs,
  inputs,
  self,
  lib,
  ...
}:
let
  dir = builtins.dirOf __curPos.file;
  luaContent = builtins.readFile "${dir}/assets/custom.lua";
in
{
  imports = [
    inputs.nvf.homeManagerModules.default
  ];
  home.packages = with pkgs; [
    nerd-fonts.hack
    wl-clipboard
  ];

  fonts.fontconfig.enable = true;

  programs.nvf = {
    enable = true;
    settings = {
      vim = {
        luaConfigRC = lib.mkAfter {
          data = luaContent;
        };

        viAlias = true;
        vimAlias = true;

        lsp = {
          enable = true;

          formatOnSave = true;
          lspkind.enable = false;
          lightbulb.enable = true;
          lspsaga.enable = false;
          trouble.enable = true;

          lspSignature.enable = false;
          otter-nvim.enable = true;
          nvim-docs-view.enable = true;
        };

        debugger = {
          nvim-dap = {
            enable = true;
            ui.enable = true;
          };
        };

        theme = {
          enable = true;
          name = "catppuccin";
          style = "mocha";
          transparent = true;
        };

        languages = {
          enableTreesitter = true;
          nix.enable = true;
          lua.enable = true;
          python.enable = true;
        };

        visuals = {
          nvim-scrollbar.enable = true;
          nvim-web-devicons.enable = true;
          nvim-cursorline.enable = true;
          cinnamon-nvim.enable = true;
          fidget-nvim.enable = true;
          highlight-undo.enable = true;
          indent-blankline.enable = true;
        };

        statusline.lualine = {
          enable = true;
        };

        filetree = {
          neo-tree = {
            enable = true;
            setupOpts.window.width = 20;
          };
        };

        tabline = {
          nvimBufferline.enable = true;
        };

        binds = {
          whichKey.enable = true;
          cheatsheet.enable = true;
        };

        autopairs.nvim-autopairs.enable = true;

        telescope.enable = true;

        git = {
          enable = true;
          gitsigns.enable = true;
          gitsigns.codeActions.enable = false;
          neogit.enable = true;
        };

        autocomplete.blink-cmp.enable = true;

        dashboard = {
          dashboard-nvim.enable = false;
          alpha.enable = true;
        };

        notify = {
          nvim-notify.enable = true;
        };

        utility = {
          surround.enable = true;
        };

        ui = {
          borders.enable = true;
          noice.enable = true;
          illuminate.enable = true;
        };

        session = {
          nvim-session-manager.enable = true;
        };
      };
    };
  };
}
