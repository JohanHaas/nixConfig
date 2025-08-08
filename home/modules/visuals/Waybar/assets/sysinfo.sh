#!/bin/bash

# Force English output to ensure consistent grep patterns
export LANG=C

#CPU
cpu_raw=$(top -bn1 2>/dev/null | grep "Cpu(s):")
if [ -n "${cpu_raw}" ]; then
    cpu=$(echo "${cpu_raw}" | awk '{printf "%d", $2 + $4}')
else
    cpu=0
fi

#memory
mem_raw=$(free 2>/dev/null | grep "Mem:") # Added 2>/dev/null
if [ -n "${mem_raw}" ]; then
    mem=$(echo "${mem_raw}" | awk '{if ($2 != 0) printf "%d", ($3/$2 * 100); else print 0}')
else
    mem=0
fi

storage=$(df -h / | tail -n 1 | awk '{print $5}')

echo "${cpu}% C / ${mem}% M / ${storage} S"

unset LANG
