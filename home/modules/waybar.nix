#waybar configuration
{config, pkgs, inputs, ...}:
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
        modules-left = [ "hyprland/workspaces" "hyprland/window" ];
        modules-center = [ "clock" ];
        modules-right = [ "network#2" "cpu" "memory" "battery" "network#1" "custom/shutdown" ];

        "clock" = {
          "format" = "{:%H:%M %a, %d. %b}";
          "locale" = "de_DE.UTF-8";
          "tooltip-format" = "<big>{:%A, %d. %B %Y}</big>\n\n<tt><b>@exec cal -3</b></tt>";
        };
        
        "cpu" = {
          "format" = "{usage}% ";
          "interval" = 1;
        };

        "memory" = {
          "format" = "{used}/{total} Gib";
          "interval" = 1;
        };

        "battery" = {
          "format" = "{capacity}% {icon}";
          "format-icons" = [ "" "" "" "" ""];
          "states" = {
            "warning" = 30;
            "critical" = 15;
          };
        };

        "network#1" = {
          "format-ethernet" = " ";
          "format-wifi" = "" ;
          "format-disconnected" = "<span color='red'> </span>";
          "interval" = 1;
        };
        
        "network#2" = {
          "format" = "<span color='green'>⬆</span><span color='red'>⬇</span>{bandwidthTotalBits}";
          "interval" = 1;
          "tooltip-format" = "<span color='green'>⬆</span>{bandwidthUpBits}\n<span color='red'>⬇</span>{bandwidthDownBits}";
        };

        "custom/shutdown" = {
          "format" = "";
          "on-click" = "${pkgs.systemd}/bin/systemctl poweroff";
        };
      };
    };
  };
}