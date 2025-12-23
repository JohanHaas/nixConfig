


local global = vim.g

global.vimtex_view_method = 'zathura'
global.vimtex_compiler_method = 'latexmk'
global.vimtex_view_forward_search_on_start = 1
global.vimtex_mappings_prefix = ','

global.vimtex_compiler_latexmk = {
    build_dir = 'build',
    continuous = 1,
    executable = 'latexmk',
    aux_dir = "/home/johan/.texfiles/",
    out_dir = "/home/johan/.texfiles/",
}



