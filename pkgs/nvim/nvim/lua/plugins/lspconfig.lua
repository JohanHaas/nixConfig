
local uv = vim.loop
local lsp_path = vim.fn.stdpath("config") .. "/lua/plugins/lsp"

for _, file in ipairs(vim.fn.readdir(lsp_path)) do
    if file:match("%.lua$") then
        require("plugins.lsp." .. file:gsub("%.lua$", ""))
    end
end
