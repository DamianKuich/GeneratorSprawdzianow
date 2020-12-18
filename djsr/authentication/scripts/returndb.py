from rest_framework_simplejwt.token_blacklist import models as m

from djsr.djsr import settings
def retouttokens():
    settings.configure()
    task = m.OutstandingToken.objects.all()
    return task