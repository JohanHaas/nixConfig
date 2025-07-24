{
  config,
  pkgs,
  self,
  ...
}:
{
  programs.alacritty = {
    enable = true;
    # config = "${self.path}/assets/alacritty.yml";
  };
}
