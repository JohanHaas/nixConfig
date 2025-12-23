local Rule = require('nvim-autopairs.rule')
local npairs = require('nvim-autopairs')
local cond = require('nvim-autopairs.conds')

npairs.setup({
})


--latex
npairs.add_rules({
    Rule("$", "$", "tex"),
    Rule("(", ")", "tex"),
    Rule("[", "]", "tex"),
    Rule("{", "}", "tex"),
})

