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
        ];
        modules-center = [ "clock" ];
        modules-right = [
          "custom/sysinfo"
          "battery"
          "network"
          "custom/shutdown"
        ];

        "clock" = {
          "format" = "<big>{:%H:%M %a, %d. %b}</big>";
          "locale" = "de_DE.UTF-8";

          "tooltip" = true;
          "tooltip-format" = "<tt><small>{calendar}</small></tt>";

          "calendar" = {
            "mode" = "year";
            "mode-mon-col" = 3;
            "weeks-pos" = "right";
            "on-scroll" = 1;

            "format" = {
              "months" = "<span color='#ffead3'><b>{}</b></span>";
              "days" = "<span color='#ecc6d9'><b>{}</b></span>";
              "weeks" = "<span color='#99ffdd'><b>W{}</b></span>";
              "weekdays" = "<span color='#ffcc66'><b>{}</b></span>";
              "today" = "<span color='#ff6699'><b><u>{}</u></b></span>";
            };
          };
          "actions" = {
            "on-click" = "shift_down";
            "on-click-right" = "shift_up";
          };
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

        "hyprland/workspaces" = {
          "format" = "{icon}";
          "on-click" = "activate";
          "format-icons" = {
            "default" = "●"; # ●
            "active" = "●"; # ⬤
            "urgent" = "";
          };
          "sort-by-number" = true;
          "active-only" = false;

          "persistent-workspaces" = {
            "*" = 9;
          };
        };
      };
    };
  };
}
