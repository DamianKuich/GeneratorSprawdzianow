from django.contrib import admin
from .models import CustomUser, Task, Dział, Umiejętność


class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Task)
admin.site.register(Dział)
admin.site.register(Umiejętność)
# Register your models here.
