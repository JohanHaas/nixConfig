{
  config,
  pkgs,
  ...
}:
{
  programs.fuzzel = {
    enable = true;
    settings = {
      main = {
        terminal = "${pkgs.alacritty}/bin/alacritts";
        layer = "overlay";
        font = "Hack Nerd Font";
        lines = 10;
        width = 50;
        height = "auto";
        icons-enabled = true;
        icon-theme = "Papirus";
      };
      colors = {
        background = "1e1e2eE0";
        text = "cdd6f4FF";
        match = "89b4faFF";
        selection = "45475aE0";
        border = "89b4faFF";
      };
    };
  };
}
