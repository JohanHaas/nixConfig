#!/usr/bin/env bash

TITLE="aichat"
SPECIAL="aichat" # Dies ist der Name, der für togglespecialworkspace verwendet wird

# Prüfen Sie, ob das Fenster mit dem Titel "aichat" bereits existiert
if ! hyprctl clients | grep -q "title: $TITLE"; then
    # Falls nicht, starten Sie alacritty mit dem korrekten Titel im Hintergrund
    # Hier werden die Markdown-Einstellungen direkt in dieser Alacritty-Instanz gesetzt
    # Setzt PAGER und cat-Funktion auf Pandoc für diese Alacritty-Instanz
    alacritty --title "$TITLE" -e bash ./aichat-wrapper.sh
fi

hyprctl dispatch togglespecialworkspace "$SPECIAL"
hyprctl dispatch focuswindow title:"$TITLE"
