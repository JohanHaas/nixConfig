#!/usr/bin/env bash


TITLE="aichat"

SPECIAL="aichat" # Dies ist der Name, der für togglespecialworkspace verwendet wird


Prüfen Sie, ob das Fenster mit dem Titel "aichat" bereits existiert

if ! hyprctl clients | grep -q "title: $TITLE"; then

    # Falls nicht, starten Sie alacritty mit dem korrekten Titel im Hintergrund
    alacritty --title "$TITLE" -e aichat &
fi

hyprctl dispatch togglespecialworkspace "$SPECIAL"

