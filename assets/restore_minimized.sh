#!/bin/bash

minimized_file="$HOME/.config/hypr/minimized_windows.txt"

[ ! -f "$minimized_file" ] && exit 0

# Fensterliste anzeigen
choice=$(cat "$minimized_file" | rofi -dmenu -p "Restore window:")

if [ -n "$choice" ]; then
    window=$(echo "$choice" | cut -d'|' -f1)
    title=$(echo "$choice" | cut -d'|' -f2-)

    # Aktuellen Workspace ermitteln
    target_ws=$(hyprctl activeworkspace -j | jq .id)

    # Fenster verschieben und aktivieren
    hyprctl dispatch movetoworkspace "$target_ws,address:$window"
    hyprctl dispatch focuswindow "address:$window"

    # Aus der Liste löschen
    grep -v "$window" "$minimized_file" > "$minimized_file.tmp" && mv "$minimized_file.tmp" "$minimized_file"
fi

