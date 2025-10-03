#Hyprland configuration
{
  config,
  pkgs,
  inputs,
  self,
  wallpaper,
  ...
}: let
  dir = builtins.dirOf __curPos.file;
  aichatScript = "${dir}/assets/aichat.sh";
  powerMenu = "${dir}/assets/shutdown.sh";
  wallpaperScript = "${dir}/assets/wallpaper.sh";

  hyprland = inputs.hyprland.packages.${pkgs.system}.hyprland;
in {
  home.packages = with pkgs; [
    libnotify
    dunst
    gtk3
    nerd-fonts.jetbrains-mono
    inputs.hyprpaper.packages.${pkgs.system}.hyprpaper
    aichat
    hyprshot
    jq
  ];

  #Wallpapers
  services.hyprpaper = {
    enable = true;
    package = inputs.hyprpaper.packages.${pkgs.system}.hyprpaper;
    settings = {
      ipc = "on";
      splash = false;
      preload = ["${wallpaper}"];
      wallpaper = [
        "eDP-1,${wallpaper}"
      ];
    };
  };

  #Hyprland
  wayland.windowManager.hyprland = {
    enable = true;

    package = hyprland;

    plugins = with inputs.hyprland-plugins.packages.${pkgs.system}; [
      hyprscrolling
    ];

    settings = {
      input = {
        kb_layout = "de";
        natural_scroll = true;
        touchpad.natural_scroll = true;
      };

      plugin = {
        hyprscrolling = {
          fullscreen_on_one_column = true;
          column_width = 0.5;
          explicit_column_widths = "0.333, 0.5, 0.667, 1.0";
          focus_fit_method = 1;
          follow_focus = true;
        };
      };

      exec-once = [
      ];

      "$mod" = "Super";
      #shortcuts
      bind =
        [
          #general short cuts
          "$mod, Q, exec, ${pkgs.alacritty}/bin/alacritty"
          "$mod, D, exec, ${pkgs.fuzzel}/bin/fuzzel"
          "$mod, C, killactive,"

          #powermenu
          ", XF86PowerOff, exec, bash ${powerMenu}"

          #lockscreen
          "$mod, L, exec, ${pkgs.hyprlock}/bin/hyprlock"

          #fullscreen
          "$mod, F, exec, hyprctl dispatch fullscreen active toggle"

          #aichat
          #"$mod, K, exec, ${aichatScript}"

          #window resizing

          #"$mod SHIFT, left, resizeactive, -20 0"
          #"$mod SHIFT, right, resizeactive, 20 0"
          #"$mod SHIFT, up, resizeactive, 0 -20"
          #"$mod SHIFT, down, resizeactive, 0 20"

          #"$mod, up, swapwindow, u"
          #"$mod, down, swapwindow, d"
          #"$mod, right, swapwindow, r"
          #"$mod, left, swapwindow, l"

          #screenshot
          "$mod, p, exec, hyprshot -m region -o ~/Bilder/Screenshots"
          "$mod SHIFT, p, exec, hyprshot -m region --clipboard-only"

          #wallpaper
          "$mod, w, exec, ${wallpaperScript}"

          #hyprscrolling
          "$mod, Left, exec, hyprctl dispatch layoutmsg focus l"
          "$mod, Right, exec, hyprctl dispatch layoutmsg focus r"
          "$mod, R, exec, hyprctl dispatch layoutmsg colresize +conf"

          #hyprexpo
          "$mod, g, exec, hyprexpo:expo, toggle"
        ]
        ++ (builtins.concatLists (
          builtins.genList (
            i: let
              ws = i + 1;
            in [
              "$mod, code:1${toString i}, workspace, ${toString ws}"
              "$mod SHIFT, code:1${toString i}, movetoworkspace, ${toString ws}"
            ]
          )
          9
        ));

      layerrule = [
        "noanim,class:^(waybar)$"
      ];

      #gui settings
      decoration = {
        rounding = 10; # Rundet die Fensterecken auf 10px
      };

      windowrulev2 = [
        "float,title:neovim_alacritty_floating"
        "float,title:aichat"
      ];

      monitor = [
      ];

      workspace = [
        "1, monitor:eDP-1, persistent:true, default:true"
        "2, monitor:eDP-1, persistent:true"
        "3, monitor:eDP-1, persistent:true"
        "4, monitor:eDP-1, persistent:true"
        "5, monitor:eDP-1, persistent:true"
        "6, monitor:eDP-1, persistent:true"
        "7, monitor:eDP-1, persistent:true"
        "8, monitor:eDP-1, persistent:true"
        "9, monitor:eDP-1, persistent:true"
      ];

      misc = {
        disable_hyprland_logo = true;
      };

      general = {
        border_size = 0;

        layout = "scrolling";

        "col.active_border" = "rgba(cba6f7FF)";
        "col.inactive_border" = "rgba(444444aa)";
        gaps_out = 5; # gaps between screen and window
        gaps_in = 3; # gaps between windows
      };
    };
  };
}
