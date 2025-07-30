#waybar configuration
{
  config,
  pkgs,
  inputs,
  self,
  ...
}:
let
  dir = builtins.dirOf __curPos.file;
  shutdownScript = "${dir}/assets/shutdown.sh";
in
{
  home.packages = with pkgs; [
    pavucontrol
    pamixer
  ];

  programs.waybar = {
    enable = true;
    style = builtins.readFile ./assets/waybar-style.css;
    package = inputs.waybar.packages.${pkgs.system}.waybar;
    settings = {
      mainBar = {
        layer = "top";
        position = "top";
        modules-left = [
          "hyprland/workspaces"
          "hyprland/window"
        ];
        modules-center = [ "clock" ];
        modules-right = [
          "custom/sysinfo"
          "battery"
          "network"
          "custom/shutdown"
        ];

        "clock" = {
          "format" = "{:%H:%M %a, %d. %b}";
          "locale" = "de_DE.UTF-8";
          "tooltip-format" = "<big>{:%A, %d. %B %Y}</big>\n\n<tt><b>@exec cal -3</b></tt>";
        };

        "battery" = {
          "format" = "{capacity}% {icon}";
          "format-icons" = [
            ""
            ""
            ""
            ""
            ""
          ];
          "states" = {
            "warning" = 30;
            "critical" = 15;
          };
        };

        "custom/sysinfo" = {
          "interval" = 1;
          "format" = "{}";
          "exec" = "bash ${dir}/assets/sysinfo.sh";
          "return-type" = "plain";
          "tooltip" = false;
        };

        "network" = {
          "format-ethernet" = " ";
          "format-wifi" = "";
          "format-disconnected" = "<span color='red'> </span>";
          "interval" = 1;
        };

        "custom/shutdown" = {
          "format" = "";
          "on-click" = "${shutdownScript}";
        };
      };
    };
  };
}
