#!/bin/bash

# Define a list of server IP addresses or domain names
servers=("google.com" "emailaifilter.com" "mufutebit.org" "gifewouhewfoewfhewoi.com")

# Loop through each server and ping it
for server in "${servers[@]}"; do
    echo "Pinging $server..."
    ping -c 1 $server &> /dev/null

    # Check if the ping was successful
    if [ $? -eq 0 ]; then
        echo "$server is up."
    else
        echo "$server is down!"
    fi
done
