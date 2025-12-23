local cmd = vim.cmd

require("catppuccin").setup({
	flavour = "mocha",
	transparent_background = true,
	float = {
		transparent = true,
	},
	term_colors = true,
	integrations = {
		nvimtree = {
			enabled = true,
			transparent_panel = true,
			show_root = true,
		},
	},
})
cmd.colorscheme("catppuccin")
