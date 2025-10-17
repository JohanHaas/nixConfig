vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
vim.opt.softtabstop = 4

vim.o.clipboard = "unnamedplus"

vim.opt.cursorline = true
vim.cmd("highlight CursorLine guibg=#3C3E4F ctermbg=237")

vim.opt.relativenumber = true
vim.cmd("highlight CursorLineNr guifg=#F5C2E7 ctermfg=170")

vim.opt.wrap = true

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

vim.g.mapleader = ","

vim.keymap.set("n", "<Leader>n", function()
	if vim.bo.filetype == "neo-tree" then
		vim.cmd("wincmd l")
	else
		vim.cmd("wincmd h")
	end
end, { desc = "Toggle Focus Neo-tree / Code Window" })

vim.keymap.set("n", "<Leader>k", function()
	os.execute("alacritty --title neovim_alacritty --working-directory " .. os.getenv("PWD") .. " &")
end, { desc = "terminal" })

local function setup_tex_autosave()
	-- Prüfen, ob die aktuelle Datei eine .tex-Datei ist
	if vim.bo.filetype ~= "tex" then
		return
	end

	-- Timer erstellen
	local timer = vim.loop.new_timer()
	timer:start(
		5000,
		5000,
		vim.schedule_wrap(function()
			-- Nur speichern, wenn Buffer verändert wurde
			if vim.bo.modified then
				vim.cmd("silent write")
			end
		end)
	)
end

-- AutoCmd, um den Timer nur für .tex Dateien zu starten
vim.api.nvim_create_autocmd("FileType", {
	pattern = "tex",
	callback = setup_tex_autosave,
})
