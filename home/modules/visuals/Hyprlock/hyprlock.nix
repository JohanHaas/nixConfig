{
  config,
  pkgs,
  inputs,
  ...
}:
let
  dir = builtins.dirOf __curPos.file;
  wallpaper = "${dir}/assets/nix-wallpaper.jpg";
in
{
  home.packages = with pkgs; [
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
        fade_out = {
          duration = 300;
          bezier = "easeOutQuint";
        };
      };

      background = [
        {
          path = "${wallpaper}";
        }
      ];

      input-field = [
        {
          size = "250, 50";
          position = "0, -80";
          monitor = "";
          dots_center = true;
          fade_on_empty = false;
          font_color = "rgb(202, 211, 245)";
          inner_color = "rgba(24, 25, 38, 0.5)";
          outer_color = "rgb(cb, a6, f7)";
          outline_thickness = 5;
          placeholder_text = "";
          shadow_passes = 2;
        }
      ];

      label = [
        {
          monitor = "";
          text = "$TIME";
          color = "rgba(242, 243, 244, 1)";
          font_size = 120;
          font_family = "JetBrains Mono";
          position = "0, 300";
          halign = "center";
          valign = "center";
        }
        {
          monitor = "";
          text = ''cmd[update:1000] echo $(date +"%A, %d %B")'';
          color = "rgba(242, 243, 244, 1)";
          font_size = 25;
          font_family = "JetBrains Mono";
          position = "0, 200";
          halign = "center";
          valign = "center";
        }
      ];
    };
  };
}
