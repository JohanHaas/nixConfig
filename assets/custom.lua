vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
vim.opt.softtabstop = 4

vim.api.nvim_create_autocmd("FileType", {
    pattern = {
        "nix"
    },
    callback = function()
        local filetype = vim.bo.filetype

        if filetype == "nix" then
            vim.opt.tabstop = 2
            vim.opt.shiftwidth = 2
            vim.opt.expandtab = true
            vim.opt.softtabstop = 2
        end
    end,
})

vim.g.mapleader = ",";
vim.keymap.set("n", "<Leader>n", function()
    if vim.bo.filetype == "neo-tree" then
        vim.cmd("wincmd l")
    else
        vim.cmd("wincmd h")
    end
end, { desc = "Toggle Focus Neo-tree / Code Window" })
