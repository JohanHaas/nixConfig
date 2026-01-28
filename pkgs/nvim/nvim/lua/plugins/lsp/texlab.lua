

local capabilities = require('cmp_nvim_lsp').default_capabilities()

vim.lsp.config.texlab = {
    cmd = { 'texlab' },
    filetypes = { 'tex', 'plaintex', 'bib' },
    root_markers = { '.git', '.latexmkrc' },
    capabilities = capabilities,
    settings = {
        texlab = {
            auxDirectory = "/home/johan/.texfiles/",
            build = {
                executable = "latexmk",
                args = { "-pdf", "-interaction=nonstopmode", "-synctex=1", "%f" },
                onSave = true,
            },
            forwardSearch = {
                executable = "zathura",
                args = { "--synctex-forward", "%l:1:%f", "%p" },
            },
        }
    }
}

vim.lsp.enable('texlab')




