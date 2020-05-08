from django.contrib import admin
from .models import CustomUser, Tasks


class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Tasks)
# Register your models here.
