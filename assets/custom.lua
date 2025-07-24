vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
vim.opt.softtabstop = 4

vim.o.clipboard = "unnamedplus"

vim.opt.cursorline = true
vim.cmd('highlight CursorLine guibg=#3C3E4F ctermbg=237')

vim.opt.relativenumber = false
vim.cmd('highlight CursorLineNr guifg=#F5C2E7 ctermfg=170')

vim.opt.wrap = false

vim.opt.whichwrap = 'b,s,<,>,[,]'


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

if vim.fn.executable('wl-copy') == 1 and vim.fn.executable('wl-paste') == 1 then
  vim.g.clipboard = {
    name = 'wl-clipboard',
    copy = {
      ['+'] = 'wl-copy',
      ['*'] = 'wl-copy --primary',
    },
    paste = {
      ['+'] = 'wl-paste',
      ['*'] = 'wl-paste --primary'
    },
  }
end

vim.g.mapleader = ",";

vim.keymap.set("n", "<Leader>n", function()
  if vim.bo.filetype == "neo-tree" then
    vim.cmd("wincmd l")
  else
    vim.cmd("wincmd h")
  end
end, { desc = "Toggle Focus Neo-tree / Code Window" })

vim.keymap.set("n", "<Leader>k", function()
  os.execute("alacritty --title neovim_alacritty_floating --working-directory " .. os.getenv("PWD") .. " &")
end, { desc = "terminal" })

vim.api.nvim_set_keymap('x', '<C-c>', '"+y<Esc>', { noremap = true, silent = true, desc = "Copy to system clipboard" })

vim.api.nvim_set_keymap('i', '<C-v>', '<C-r>+', { noremap = true, silent = true, desc = "Paste from system clipboard" })
