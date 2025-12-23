local opt = vim.opt

--numbers
opt.number = true
opt.relativenumber = true

--clipboard to system
opt.clipboard = "unnamedplus"

--line wrap around
opt.wrap = true
opt.whichwrap = "b,s,<,>,[,],l,l"


--tabstop config
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
vim.opt.softtabstop = 4


--disable mouse
opt.mouse = ""


local tab_settings = {
    ["nix"] = 2,
	["sh"] = 2,
	["rs"] = 2,
	["ts"] = 2,
	["typescriptreact"] = 2,
	["css"] = 2,
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
