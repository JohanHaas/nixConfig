#Hyprland configuration
{
  config,
  pkgs,
  inputs,
  self,
  ...
}:
{
  home.packages = with pkgs; [
    libnotify
    kitty
    rofi-wayland
    dunst
    gtk3
    nerd-fonts.jetbrains-mono
    bibata-cursors
    inputs.hyprpaper.packages.${pkgs.system}.hyprpaper
    inputs.hyprcursor.packages.${pkgs.system}.hyprcursor
    aichat
    jq
    pandoc
  ];

  xdg.portal = {
    enable = true;
    extraPortals = [ pkgs.xdg-desktop-portal-gtk ];
    config.common.default = "*";
  };

  #Wallpapers
  services.hyprpaper = {
    enable = true;
    package = inputs.hyprpaper.packages.${pkgs.system}.hyprpaper;
    settings = {
      ipc = "on";
      splash = false;
      preload = [ "/etc/nixConfig/assets/nix-wallpaper.jpg" ];
      wallpaper = [
        "eDP-1,/etc/nixConfig/assets/nix-wallpaper.jpg"
      ];
    };
  };

  #Hyprland
  wayland.windowManager.hyprland = {

    enable = true;

    package = inputs.hyprland.packages.${pkgs.system}.hyprland;

    plugins = with inputs.hyprland-plugins.packages.${pkgs.system}; [
      xtra-dispatchers
    ];

    settings = {
      input = {
        kb_layout = "de";
        natural_scroll = true;
        touchpad.natural_scroll = true;
      };

      exec-once = [
        "hyprpaper"
        "hyprctl setcursor Bibata-Modern-Classic 20"
        "waybar"
        "${pkgs.rofi-wayland}/bin/rofi -show drun & closeunfocused"
      ];

      "$mod" = "Super";
      #shortcuts
      bind = [
        #general short cuts
        "$mod, Q, exec, ${pkgs.alacritty}/bin/alacritty"
        "$mod, D, exec, ${pkgs.rofi-wayland}/bin/rofi -show drun"
        "$mod, C, killactive,"

        #fullscreen
        "$mod, F, exec, hyprctl dispatch fullscreen active toggle"

        #aichat
        "$mod, K, exec, /etc/nixConfig/assets/aichat.sh"

      ]
      ++ (builtins.concatLists (
        builtins.genList (
          i:
          let
            ws = i + 1;
          in
          [
            "$mod, code:1${toString i}, workspace, ${toString ws}"
            "$mod SHIFT, code:1${toString i}, movetoworkspace, ${toString ws}"
          ]
        ) 9
      ));

      #gui settings
      decoration = {
        rounding = 10; # Rundet die Fensterecken auf 10px
      };

      windowrulev2 = [
        "float,title:neovim_alacritty_floating"
        "float,title:aichat"

        "workspace special:aichat,title:^(aichat)$"
        "size 90% 90%,title:^(aichat)$"
        "center,1,title:^(aichat)$"
      ];

      general = {
        border_size = 3;

        "col.active_border" = "rgba(cba6f7FF)";
        "col.inactive_border" = "rgba(444444aa)";
        gaps_out = 5; # gaps between screen and window
        gaps_in = 3; # gaps between windows
      };
    };
  };
}
