local ls = require("luasnip")
local s = ls.snippet
local t = ls.text_node
local i = ls.insert_node

local extras = require("luasnip.extras")
local rep = extras.rep

ls.add_snippets("tex", {

    --begin block
    s({trig = ":beg", snippetType = "autosnippet", }, {
        t("\\begin{"), i(1, "environment"), t("}"),
        t({"", "    "}), i(2),
        t({"", "\\end{"}),
        rep(1), t("}"), i(0)
    }),

    --enum block
    s({trig = ":enum", snippetType = "autosnippet", }, {
        t({"\\begin{enumerate}", "\t\\item "}), i(1),
        t({"", "\\end{enumerate}"}), i(0)
    }),
  
    --itemize block
    s({trig = ":item", snippetType = "autosnippet", }, {
        t({"\\begin{itemize}", "\t\\item "}), i(1),
        t({"", "\\end{itemize}"}), i(0)
    }),

    --enumerate alphabeticly
    s({trig = ":alph", snippetType = "autosnippet", }, {
        t({"\\begin{enumerate}[label=(\\alph*)]", "    \\item "}), i(1),
        t({"", "\\end{enumerate}"}), i(0)
    }),

    --underline
    s({trig = ":ul", snippetType = "autosnippet", }, {
        t("\\underline{"), i(1), t("}"), i(0)
    }),

    --bold
    s({trig = ":bf", snippetType = "autosnippet"}, {
        t("\\textbf{"), i(1), t("}"), i(0)
    }),

    --frac
    s({trig = ":frac", snippetType = "autosnippet"}, {
        t("\\frac{"), i(1), t("}{"), i(2), t("}"), i(0)
    }),
})


