{
  config,
  pkgs,
  ...
}:
{
  home.packages = with pkgs; [
    inputs.hyprlock.packages.${pkgs.system}.hyprlock
  ];

  programs.hyprlock = {
    enable = true;
    settings = {

      general = {
        hide_cursor = true;
        ignore_empty_input = true;
      }; 

      animations = {
        enable = true;
        fade_in = {
          duration = 300;
          bezier = "easeOutQuint";
        };
        fade:out = {
          duration = 300;
          bezier = "easeOutQuint";
        };
      };

      background = [
        {
          path = "/etc/nixConfig/assets/nix-wallpaper.jpg";
        }
      ];

        input-field = [
          {
            size = "200, 50";
            position = "0, -80";
            monitor = "";
            dots_center = true;
            fade_on_empty = false;
            font_color = "rgb(202, 211, 245)";
            inner_color = "rgb(91, 96, 120)";
            outer_color = "rgb(24, 25, 38)";
            outline_thickness = 5;
            placeholder_text = '\'<span foreground="##cad3f5">Password...</span>'\';
            shadow_passes = 2;
        }
      ];
    };
  };
}
