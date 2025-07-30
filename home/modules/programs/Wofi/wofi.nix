{
  config,
  pkgs,
  ...
}:
let
  dir = builtins.dirOf __curPos.file;
  CssStyle = "${dir}/assets/style.css";
in
{
  home.packages = with pkgs; [

  ];

  programs.wofi = {
    enable = true;

    settings = {
      allow_markup = true;
      allow_images = true;
      insensitive = true;
      matching = "fuzzy";
      sort = true;
      no_actions = true;

    };
  };
  xdg.configFile."wofi/style.css".source = CssStyle;

}
