#!/bin/bash

# Define the output HTML file
output="system_health_dashboard.html"

# Function to get CPU usage
get_cpu_usage() {
    echo "$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1}')"
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
