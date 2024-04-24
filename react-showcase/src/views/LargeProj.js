import React from 'react';
import Navbar from '../components/navbar';
import CustomCodeBlock from '../components/codeBlock';

const LargeProj = () => {
    const bashScript = `
#!/bin/bash

# Define the output HTML file
output="system_health_dashboard.html"

# Function to get CPU usage
get_cpu_usage() {
    echo "$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\x01/" | awk '{print 100 - $1}')"
}

# Function to get memory usage
get_mem_usage() {
    echo "$(free | grep Mem | awk '{print $3/$2 * 100.0}')"
}

# Function to get disk usage
get_disk_usage() {
    echo "$(df -h | grep '^/dev' | awk '{print $5 " " $1}')"
}

# Function to get network statistics
get_network_stats() {
    echo "$(netstat -i | tail -n +3)"
}

# Create/update the HTML file
{
    echo "<html><head><title>System Health Dashboard</title></head><body>"
    echo "<h1>System Health Dashboard</h1>"
    echo "<h2>CPU Usage</h2>"
    echo "<p>$(get_cpu_usage)%</p>"
    echo "<h2>Memory Usage</h2>"
    echo "<p>$(get_mem_usage)%</p>"
    echo "<h2>Disk Usage</h2>"
    echo "<pre>$(get_disk_usage)</pre>"
    echo "<h2>Network Statistics</h2>"
    echo "<pre>$(get_network_stats)</pre>"
    echo "</body></html>"
} > $output

# Print the location of the output file
echo "Dashboard created at $(pwd)/$output"
`;

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Large Project: HTML System Health Dashboard</h1>
                <p>NOTE FOR MacOS USERS: <code>get_cpu_usage()</code> and <code>get_mem_usage()</code> methods don't work on mac because the <code>top</code> and <code>free</code> commands have command line options unique to Linux systems and don't work on Mac. The rest of the dashboard will load correctly on MacOS.</p>
                <h2>Video Tutorial</h2>
                <iframe
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/aPpU52aU4c8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <h2>Instructions</h2>
                <ul>
                    <li>Make script executable with <code>chmod +x SysHealthDash.sh</code></li>
                    <li>Execute command with <code>./SysHealthDash.sh</code></li>
                    <li>Open HTML file in browser (if your machine allows you to) or run <code>less system_health_dashboard.html</code> to view the HTML dashboard in the terminal</li>
                </ul>
                <h2>Cleanup</h2>
                <p>This will delete all files and directories not ending in <code>.txt</code> or <code>.sh</code>:</p>
                <ul>
                    <li>Make cleanup file executable with <code>chmod +x cleanup.sh</code></li>
                    <li>Execute cleanup with <code>./cleanup.sh</code></li>
                </ul>
                <h2>System Health Dashboard Script</h2>
                <CustomCodeBlock text={bashScript}/>
            </div>
        </div>
    );
};

export default LargeProj;
