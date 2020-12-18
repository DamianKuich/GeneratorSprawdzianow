from apscheduler.schedulers.blocking import BlockingScheduler
import subprocess

sched = BlockingScheduler()

@sched.scheduled_job('interval', minutes=1)
def scheduled_job():
    subprocess.run(["heroku run python djsr/manage.py flushexpiredtokens"])

sched.start()