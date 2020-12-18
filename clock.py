from apscheduler.schedulers.blocking import BlockingScheduler
import subprocess

sched = BlockingScheduler()

@sched.scheduled_job('cron', hour=00)
def scheduled_job():
    subprocess.run("python djsr/manage.py flushexpiredtokens", shell=True)
    print("Deleting Expired Tokens")

sched.start()