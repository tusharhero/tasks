#! /bin/python3
'''
this script will be used to automatically create the task.js in my computer and then push it to git :)
'''
import os#this is very important for us to issue commands
os.system('gittasks')#using another script to get the material into tasks.txt
tasks = open("tasks",'rt')
tasks = tasks.read()
html = open("html.txt",'rt')
html = html.read()
html2 = open("html2.txt",'rt')
html2 = html2.read()
tasksjs = str(html2) + str(tasks) + str(html)
print(tasksjs)
f = open("tasks.js", "w")
f.write(tasksjs)
f.close()
os.system("cd ~/Documents/tasks & git commit -a -m 'routine daily tasks' & git push")