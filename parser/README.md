Parser

About
This script runs on main server in CRON every minute. It stores data from reprts text files into the database and moves processed reports into archive folder afterwards. It also checks tresholds for selected measurements in each report, and generates warning in separate table of database when treshold is exceeded.
