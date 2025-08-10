#!/usr/bin/env bash

wallpaper=$(nix eval --json "git+ssh://git@github.com/JohanHaas/wallpapers.git?ref=main#wallpaper-names" | jq -r '.[]')
chosen=$(echo -e "$wallpaper" | fuzzel --dmenu)


path="$HOME/nixConfig/"
current_wallpaper=$(cat "$path/assets/wallpaper_name.txt")

if [[ -n "$chosen" && "$chosen" != "$current_wallpaper" ]]; then
    echo "$chosen" > "$path/assets/wallpaper_name.txt"
    home-manager switch --flake "$path#$USER@$HOSTNAME"
    pkill hyprpaper
    sleep 0.5
    hyprpaper &
fi
