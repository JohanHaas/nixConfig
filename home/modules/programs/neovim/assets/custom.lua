vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
vim.opt.softtabstop = 4

vim.o.clipboard = "unnamedplus"

vim.opt.cursorline = true
vim.cmd("highlight CursorLine guibg=#3C3E4F ctermbg=237")

vim.opt.relativenumber = true
vim.cmd("highlight CursorLineNr guifg=#F5C2E7 ctermfg=170")

vim.opt.wrap = false

vim.opt.whichwrap = "b,s,<,>,[,]"

local tab_settings = {
	["nix"] = 2,
	["qml"] = 2,
	["sh"] = 2,
	["c"] = 2,
	["h"] = 2,
	["rs"] = 2,
	["cpp"] = 2,
	["hpp"] = 2,
	["ts"] = 2,
	["typescriptreact"] = 2,
	["css"] = 2,

	["python"] = 4,
}

vim.api.nvim_create_autocmd("FileType", {
	pattern = vim.tbl_keys(tab_settings),
	callback = function()
		local size = tab_settings[vim.bo.filetype]
		if size then
			vim.opt_local.tabstop = size
			vim.opt_local.shiftwidth = size
			vim.opt_local.softtabstop = size
			vim.opt_local.expandtab = true
		end
	end,
})

if vim.fn.executable("wl-copy") == 1 and vim.fn.executable("wl-paste") == 1 then
	vim.g.clipboard = {
		name = "wl-clipboard",
		copy = {
			["+"] = "wl-copy",
			["*"] = "wl-copy --primary",
		},
		paste = {
			["+"] = "wl-paste",
			["*"] = "wl-paste --primary",
		},
	}
end

vim.g.mapleader = ","

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

vim.api.nvim_set_keymap("x", "<C-c>", '"+y<Esc>', { noremap = true, silent = true, desc = "Copy to system clipboard" })

vim.api.nvim_set_keymap("i", "<C-v>", "<C-r>+", { noremap = true, silent = true, desc = "Paste from system clipboard" })
