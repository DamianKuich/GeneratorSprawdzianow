from django.contrib import admin
from .models import CustomUser, Task, Section, Skill, TestJSON, Answers, Image, Variables


class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Task)
admin.site.register(Section)
admin.site.register(Skill)
admin.site.register(TestJSON)
admin.site.register(Answers)
admin.site.register(Image)
admin.sie.register(Variables)
# Register your models here.