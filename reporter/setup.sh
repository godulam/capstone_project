#!/bin/bash

#write out current crontab
crontab -l > mycron
#echo new cron into cron file
echo "*/5 * * * * python3 /home/ubuntu/capstone_project/reporter.py"  >> mycron
#install new cron file
crontab mycron
rm mycron

#restart cron service
/etc/init.d/cron restart
