
local ls = require("luasnip")

local keymap = vim.keymap

ls.setup({
    update_events = {"TextChanged", "TextChangedI"},
    enable_autosnippets = true,
})



require("plugins.snippets.latex")


keymap.set({"i", "s"}, "<A-j>", function()
    print("Jumpable:", ls.jumpable(1))
    print("In snippet:", ls.in_snippet())
    if ls.expand_or_jumpable() then
        ls.expand_or_jump()
    end
end, { silent = true, desc = "LuaSnip: Expand or jump forward" })

keymap.set({"i", "s"}, "<A-k>", function()
    print("Jumpable:", ls.jumpable(1))
    print("In snippet:", ls.in_snippet())
    if ls.jumpable(-1) then
        ls.jump(-1)
    end
end, { silent = true, desc = "LuaSnip: Jump backward" })

