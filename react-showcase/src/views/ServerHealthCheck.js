import React from 'react';
import Navbar from '../components/navbar';
import CustomCodeBlock from '../components/codeBlock';
import DocTitle from '../components/docTitle';

const ServerHealthCheck = () => {
    DocTitle('Server Health Check')

    const bashScript = `
        #!/bin/bash

        # Define a list of server IP addresses or domain names
        servers=("google.com" "emailaifilter.com" "mufutebit.org" "gifewouhewfoewfhewoi.com")

        # Loop through each server and ping it
        for server in "\${servers[@]}"; do
            echo "Pinging $server..."
            ping -c 1 $server &> /dev/null

            # Check if the ping was successful
            if [ \$? -eq 0 ]; then
                echo "$server is up."
            else
                echo "$server is down!"
            fi
        done
    `

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Small Project 3: Server Health Check</h1>
                <h2>Description</h2>
                <p>This Bash script continuously monitors the availability of specified servers by pinging them and reporting their status. It helps ensure critical servers are up and alerts users immediately if any servers go down.</p>
                <h2>Video Demo</h2>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/UJILWoJa_So?si=zGJPNNiYrOPuRjTw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen />
                <h2>Directions</h2>
                <ul>
                    <li>Make script executable with <code>chmod +x ServerHealthCheck.sh</code></li>
                    <li>Add domain names and/or IP addresses you want to check the health of to the "servers" array</li>
                    <li>Execute command with <code>./ServerHealthCheck.sh</code></li>
                    <li>Check terminal for server health results</li>
                </ul>
                <h2>Server Health Script</h2>
                <CustomCodeBlock text={bashScript} />
            </div>
        </div>
    );
};

export default ServerHealthCheck;