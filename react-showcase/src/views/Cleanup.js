import React from 'react';
import Navbar from '../components/navbar';
import CustomCodeBlock from '../components/codeBlock';

const Cleanup = () => {

    const bashScript = `
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
    `

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Small Project 2: Cleanup Script</h1>
                <h2>Description</h2>
                <p>This Bash script automates the cleanup process by removing all files except those ending in '.sh' or '.txt' and deleting all subdirectories within its operating directory. It's designed to tidy up a project directory by safely preserving script and text files while removing all other file types.</p>
                <h2>Video Demo</h2>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/79ZF7Fq_xFc?si=K11Wg7J-zr-HRaHM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen />
                <h2>Directions</h2>
                <ul>
                    <li>Make script executable with <code>chmod +x cleanup.sh</code></li>
                    <li>Create some empty folders and files to test the cleanup script</li>
                    <li>Execute command with <code>./cleanup.sh</code></li>
                </ul>
                <h2>Cleanup Script</h2>
                <CustomCodeBlock text={bashScript} />
            </div>
        </div>
    );
};

export default Cleanup;
