#!/bin/bash
# Script to fix ENOSPC file watcher limit issue

echo "Current inotify watcher limit:"
cat /proc/sys/fs/inotify/max_user_watches

echo ""
echo "Increasing the limit to 524288..."
sudo sysctl -w fs.inotify.max_user_watches=524288

echo ""
echo "Making the change permanent..."
echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf

echo ""
echo "New limit:"
cat /proc/sys/fs/inotify/max_user_watches

echo ""
echo "Done! You can now restart your development server."

