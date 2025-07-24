#!/bin/bash

# Aktives Fenster minimieren, indem es in ein "hidden" workspace verschoben wird
window_address=$(hyprctl activewindow -j | jq -r .address)

# Optional: Fenster-Titel in Log schreiben
title=$(hyprctl activewindow -j | jq -r .title)
echo "$window_address|$title" >> ~/.config/hypr/minimized_windows.txt

hyprctl dispatch movetoworkspacesilent "special:minimized"

