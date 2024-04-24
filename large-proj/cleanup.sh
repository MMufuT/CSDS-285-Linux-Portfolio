#!/bin/bash

# Define the directory where the script is located
script_dir=$(dirname "$0")

# Navigate to the script directory
cd "$script_dir"

# Remove all files in the current directory and subdirectories that do not end in .sh or .txt
find . -type f ! \( -name '*.sh' -o -name '*.txt' \) -delete

# Remove all directories except the current directory
find . -mindepth 1 -type d -exec rm -rf {} +

echo "Cleanup complete. All files not ending with .sh or .txt have been removed."

