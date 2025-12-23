

local keymap = vim.keymap

keymap.set("n", "<Leader>n", function()
	if vim.bo.filetype == "neo-tree" then
		vim.cmd("wincmd l")
	else
		vim.cmd("wincmd h")
	end
end, { desc = "Toggle Focus Neo-tree / Code Window" })


vim.keymap.set({'n', 'v', 'i'}, '<Up>', '<Nop>')
vim.keymap.set({'n', 'v', 'i'}, '<Down>', '<Nop>')
vim.keymap.set({'n', 'v', 'i'}, '<Left>', '<Nop>')
vim.keymap.set({'n', 'v', 'i'}, '<Right>', '<Nop>')


