{
  config,
  pkgs,
  inputs,
  ...
}: {
  vim.extraPlugins = {
    vimtex = {
      package = pkgs.vimPlugins.vimtex;
      setup = ''
        vim.g.vimtex_view_method = 'zathura'

        vim.g.vimtex_compiler_latexmk = {
          build_dir = 'build',
          continuous = 1,
        }

        vim.g.vimtex_quickfix_mode = 0
      '';
    };
  };
}
