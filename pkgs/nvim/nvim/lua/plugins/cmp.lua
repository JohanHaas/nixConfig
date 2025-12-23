local cmp = require("cmp")

local luasnip = require("luasnip")


cmp.setup({
    snippet = {
        expand = function(args)
            luasnip.lsp_expand(args.body)
        end,
    },

    mapping = {
        ["<Tab>"] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),
        ["<A-CR>"] = cmp.mapping.confirm({ select = true }),
    },

    sources = {
        { name = "nvim_lsp" },
        { name = "buffer" },
        { name = "path" },
    },

    performance = {
        max_view_entries = 20,
    },
})

