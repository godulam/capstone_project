# -*- coding: utf-8 -*-

"""

Created on Thu Sep 11 10:37:07 2017



@author: marcin

"""
import sys
import pymysql.cursors
import re
import glob
import os

# Load the values from the "parserconf.py" conf file
from parserconf import *

# mysql database connection config
connection = pymysql.connect(host='127.0.0.1',
                             user='root',
                             password='ata3g2',
                             db='lsmt',
                             autocommit=True,
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

# This is the path where all the reports are stored.
folder_path = '/home/ubuntu/capstone_project/reports'
folder_path2 = '/home/ubuntu/capstone_project/reports_archive'
folder_path3 = 'home/ubuntu/capstone_project/reports_baddata'

# Check the folder for new files and prepare a list for processing
lista = []
for plik in sorted(os.listdir(folder_path)):
    lista.append(plik)

# Alert generated if there is no new reports
if len(lista) == 0:
    print('0 new reports found')

# Read and process the files from the list
else:
    i = 0
    for inp in lista:
        fpath = os.path.join(folder_path, inp)
        with open(fpath) as f:
            gdata = []
            for line in f:
                if line == "":
                    print("end of the report file")
                else:
                    lineent = line.split()
                    gdata.append(lineent[1])

# Export the generated data to mysql database
                    if len(gdata) == 11:
                        with connection.cursor() as cursor:

# Checking for thresholds and if the anomaly is detected storing the alerts in the 'alerts' database

                            if float(gdata[0]) > cpu_thr:
                                sql_cpu = "INSERT INTO `alerts` (`timestamp`, `hostname`, `threshold`, `msg`) VALUES (%s, %s, %s, %s);"
                                cursor.execute(sql_cpu, (gdata[9], gdata[3], gdata[0], ('WARNING! Cpu load above MAXIMUM - current value is ' + gdata[0])))
                                print('WARNING! Cpu load above MAXIMUM - current value is ' + gdata[0])
                            if float(gdata[1]) < disk_thr:
                                sql_disk = "INSERT INTO `alerts` (`timestamp`, `hostname`, `threshold`, `msg`) VALUES (%s, %s, %s, %s);"
                                cursor.execute(sql_disk, (gdata[9], gdata[3], gdata[1], ('WARNING! Free disk space below MINIMUM - current value is ' + gdata[1])))
                                print('WARNING! Free disk space below MINIMUM - current value is ' + gdata[1])
                            if float(gdata[4]) < mem_thr:
                                sql_mem = "INSERT INTO `alerts` (`timestamp`, `hostname`, `threshold`, `msg`) VALUES (%s, %s, %s, %s);"
                                cursor.execute(sql_mem, (gdata[9], gdata[3], gdata[4], ('WARNING! Free memory below MINIMUM - current value is ' + gdata[4])))
                                print('WARNING! Free memory below MINIMUM - current value is ' + gdata[4])
                            if float(gdata[8]) > swap_thr:
                                sql_swap = "INSERT INTO `alerts` (`timestamp`, `hostname`, `threshold`, `msg`) VALUES (%s, %s, %s, %s);"
                                cursor.execute(sql_swap, (gdata[9], gdata[3], gdata[8], ('WARNING! Swap usage above MAXIMUM - current value is ' + gdata[8])))
                                print('WARNING! Swap usage above MAXIMUM - current value is ' + gdata[8])

# Sending the report to the main database 'stats'
                            sql_main = "INSERT INTO `stats` (`cpu_load`, `disk_free`, `disk_used`, `hostname`, `mem_free`, `mem_total`, `mem_used`, `proc_num`, `swap_used`, `timestamp`, `uptime`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);"
                            cursor.execute(sql_main, (gdata[0], gdata[1], gdata[2], gdata[3], gdata[4], gdata[5], gdata[6], gdata[7], gdata[8], gdata[9], gdata[10]))
                            print('file processed - data sent')
                            os.rename(fpath, os.path.join(folder_path2,inp))
