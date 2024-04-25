import React from 'react';
import Navbar from '../components/navbar';
import CustomCodeBlock from '../components/codeBlock';

const DoOrDie = () => {

    const bashScript = `
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
    `

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Small Project 4: Do or Die</h1>
                <h2>Description</h2>
                <p>This simple yet engaging Bash script challenges users to guess a randomly generated number (1 or 2). A correct guess results in congratulations, while a wrong guess leads to the immediate closure of the terminal, adding a playful risk element to the game.</p>
                <h2>Video Demo</h2>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/zbJ_7hbkHy8?si=BSOyH5s4F0WJCXqC"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen />
                <h2>Directions</h2>
                <ul>
                    <li>Make script executable with <code>chmod +x DoOrDie.sh</code></li>
                    <li>Execute command with <code>./DoOrDie.sh</code></li>
                    <li>Enter your guess into the terminal (1 or 2)</li>
                    <li>See how many times you can guess correctly!</li>
                </ul>
                <h2>Do or Die Script</h2>
                <CustomCodeBlock text={bashScript} />
            </div>
        </div>
    );
};

export default DoOrDie;
