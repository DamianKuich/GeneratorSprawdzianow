from django.contrib import admin
from .models import CustomUser, Task, Section, Skill, TestJSON, Answers, Image, CorrectAnswers


class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Task)
admin.site.register(Section)
admin.site.register(Skill)
admin.site.register(TestJSON)
admin.site.register(Answers)
admin.site.register(Image)
admin.site.register(CorrectAnswers)
# Register your models here.