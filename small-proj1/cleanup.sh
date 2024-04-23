#!/bin/bash

# Define the directory where the script is located
script_dir=$(dirname "$0")

# Navigate to the script directory
cd "$script_dir"

# Remove all files except photo_backup.sh and cleanup.sh
find . -type f -not -name 'photo_backup.sh' -not -name 'cleanup.sh' -delete

# Remove all directories except the current directory
find . -mindepth 1 -type d -exec rm -rf {} +

echo "Cleanup complete. All files and directories removed except photo_backup.sh and cleanup.sh."
