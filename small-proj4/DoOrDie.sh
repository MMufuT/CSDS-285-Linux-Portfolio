#!/bin/bash

# Generate a random number, 1 or 2
number=$(( RANDOM % 2 + 1 ))

# Ask user to guess
echo "Guess a number (1 or 2):"
read guess

# Check if the guess is correct
if [ "$guess" -eq "$number" ]; then
    echo "Congratulations! Your guess is correct."
else
    echo "Wrong guess. The correct number was $number. Closing the terminal..."
    sleep 2  # Give the user time to see the message before the terminal closes

    # Close the terminal
    kill -9 $PPID
fi
