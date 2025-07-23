{config, pkgs, inputs, self, ...}:
let
  luaContent = builtins.readFile "${self.outPath}/assets/custom.lua";
in
{
  imports = [
    inputs.nvf.homeManagerModules.default
  ];

  programs.nvf = {
    enable = true;
    settings = {
      vim = {
        viAlias = false;
        vimAlias = true;

        theme = {
          enable = true;
          name = "catppuccin";
          style = "mocha";
        };
        
        languages = {
            enableLSP = true;
            enableTreesitter = true;
            nix.enable = true;
            lua.enable = true;
        };
        
        statusline.lualine.enable = true;
        telescope.enable = true;
        autocomplete.nvim-cmp.enable = true;
        
        extraConfig = luaContent;
      };
    };
  };
}


