#!/usr/bin/env bash

hyprctl dispatch workplace special:powermenu
chosen=$(echo -e "Shutdown\nReboot\nSuspend\nLock" | wofi --dmenu -p "Power Menu:")

case "$chosen" in
  Shutdown) systemctl poweroff ;;
  Reboot) systemctl reboot ;;
  Suspend) systemctl suspend ;;
  Lock) hyprlock ;;

esac
