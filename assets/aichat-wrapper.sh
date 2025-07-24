#!/usr/bin/env bash
aichat | pandoc -f markdown -t man | less -R

