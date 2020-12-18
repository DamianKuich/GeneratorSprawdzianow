
from rest_framework_simplejwt.token_blacklist import models as m
def retouttokens():
    task = m.OutstandingToken.objects.all()
    return task