#!/bin/bash

# Create directories for pseudo photos and backup folder
mkdir -p psuedo-photos
mkdir -p backup

# Path definitions
sourcedir="./psuedo-photos"
targetdir="./backup"

# Function to create an image and modify its creation date
create_image() {
    filename=$1
    createdate=$2

    # Modify the creation date of the file
    touch -t $createdate $filename
}

# Generate images with various creation dates b/w 2016 and 2024
years=(2016 2017 2018 2019 2020 2021 2022 2023 2024)
for i in {1..100}; do
    year=${years[$RANDOM % ${#years[@]}]}
    month=$(printf "%02d" $((RANDOM % 12 + 1)))
    day=$(printf "%02d" $((RANDOM % 28 + 1)))
    hour=$(printf "%02d" $((RANDOM % 24)))
    minute=$(printf "%02d" $((RANDOM % 60)))
    
    create_image "$sourcedir/image_$i.jpg" "${year}${month}${day}${hour}${minute}"
done

echo "Mock data created in testdirectory."

# Array of month names for mapping. Numbers are included in names so months are sorted from Jan to Dec as opposed to alphabetically
month_names=("01-January" "02-February" "03-March" "04-April" "05-May" "06-June" "07-July" "08-August" "09-September" "10-October" "11-November" "12-December")

# Function to organize photos by year and month name based on file's metadata
organize_photos() {
    for file in $sourcedir/*.{jpg,png,JPG,PNG}; do
        if [ -f "$file" ]; then
            # Extract year and numeric month from the file's last modified date
            year=$(date -r $file "+%Y")
            month_num=$(date -r $file "+%m")
            
            # Ensure month_num is treated as decimal as opposed to an octal
            month_num=$((10#$month_num))
            month_name=${month_names[$((month_num - 1))]}

            # Create directory for the year and month name if it doesn't exist
            mkdir -p "$targetdir/$year/$month_name"

            # Move file to the appropriate directory
            cp "$file" "$targetdir/$year/$month_name"
        fi
    done
}

# Organize the photos in target directory
organize_photos

echo "Photos have been organized in $targetdir."
