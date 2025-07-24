#!/usr/bin/env bash
echo "Starte aichat-wrapper.sh" > /tmp/aichat.log
aichat > /tmp/aichat-output.md 2>&1 &
PID=$!
wait $PID
echo "aichat beendet" >> /tmp/aichat.log

cat /tmp/aichat-output.md | pandoc -f markdown -t man | less -R
