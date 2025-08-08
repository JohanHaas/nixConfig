#!/usr/bin/env bash

hyprctl dispatch workplace special:powermenu
chosen=$(echo -e "Hibernate\nShutdown\nReboot\nSuspend\nLock" | fuzzel --dmenu)

case "$chosen" in
  Hibernate) systemctl hibernate;;
  Shutdown) systemctl poweroff ;;
  Reboot) systemctl reboot ;;
  Suspend) systemctl suspend ;;
  Lock) hyprlock ;;


esac
