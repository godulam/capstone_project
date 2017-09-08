#!/usr/bin/python3

import subprocess
import time


def create_report():
    try:
        hostname = (subprocess.check_output("hostname", shell=True)).decode()
        hostname = hostname.replace("\n", "")
        top_out = (subprocess.check_output("top -b -n 1 | head -n 5", shell=True)).decode()
        top_out = top_out.split("\n")
        df_out = (subprocess.check_output("df -m | grep -m 1 /dev/", shell=True)).decode()
        df_out = df_out.split()
        cpu_p = (subprocess.check_output("top -b -n 5 -d.2 | grep \"Cpu\" | tail -n1 | awk '{print($2)}' | cut -d'%' -f 1", shell=True)).decode()
    except:
        print("An error occurred")
    else:
        timestamp = str(int(time.time()))
        data = {}
        data["hostname"] = hostname
        data["timestamp"] = timestamp
        data["cpu_load"] = str(float(cpu_p))
        for line in top_out:  
            line = line.split()  
            #print(line) 
            if 2 > len(line):
                break
            if "Mem" == line[1]:
                data["mem_total"] = line[line.index("total,")-1]
                data["mem_free"] = line[line.index("free,")-1]
                data["mem_used"] = line[line.index("used,")-1]
            elif "Swap:" == line[1]:
                data["swap_used"] = line[line.index("used.")-1]
            elif "top" == line[0]:
                if "min," == line[5]:
                    data["uptime"] = line[4]
                else:
                    uptime = (line[4].replace(",","")).split(":")
                    data["uptime"] = str(int(uptime[0])*60 + int(uptime[1]))
            elif "Tasks:" == line[0]:
                data["proc_num"] = line[line.index("total,")-1]
        #print(df_out)  
        data["disk_free"] = df_out[3]
        disk_used = float(df_out[4].replace("%",""))/100
        data["disk_used"] = str(disk_used)
        report_name = "report_" + hostname + "_" + timestamp
        
        try:
            with open("/home/ubuntu/capstone_project/reporter/reports/"+report_name, "w") as report_file:
                for k,v in sorted(data.items()):
                    report_file.write(k + " " + v + " \n")
            report_file.close()
        except:
            print("An error occurred")
        else:
            print("Report has been created: " + report_name) 

def main():
    create_report()

if __name__=="__main__":
    main()
