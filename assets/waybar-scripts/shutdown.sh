#!/usr/bin/env bash
chosen = $(echo -e "Shutdown\nReboot\nSuspend\nLock" | rofi -dmenu -p "Power Menu:"))

case "$chosen" in
  Shutdown) systemctl poweroff ;;
  Reboot) systemctl reboot ;;
  Suspend) systemctl suspend ;;
  Lock) hyprlock ;;

esac
