from django.contrib import admin
from .models import CustomUser, Task, Section, Skill, TestJSON, Answers, Image, ImageDB, SecAndSkillhelp
from .models import Sectionv2


class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Task)
admin.site.register(Section)
admin.site.register(Skill)
admin.site.register(TestJSON)
admin.site.register(Answers)
admin.site.register(Image)
admin.site.register(ImageDB)
admin.site.register(Sectionv2)
admin.site.register(SecAndSkillhelp)
# Register your models here.