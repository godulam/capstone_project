#!/usr/bin/python3

import subprocess


PATH_TO_REPORTS = "/home/ubuntu/capstone_project/reports/report*"

def import_report(server):
    try:
        subprocess.check_output("scp -i 'capstone.pem' " + server + ":" + PATH_TO_REPORTS + " ./reports/ && ssh -i 'capstone.pem' " + server + " rm " + PATH_TO_REPORTS, shell=True)
    except:
        print("Failed to connect")
        raise ConnectionError
    else:
        print("Connection established")

def main():
    try:
        with open("servers.conf", "r") as servers:
            for serv in servers:
                serv = serv.replace("\n","")
                #print(serv)
                import_report(serv)
        servers.close()
    except:
        print("Failed to import")
    else:
        print("Import successful")

if __name__ == "__main__":
    main()
