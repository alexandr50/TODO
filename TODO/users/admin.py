from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from project.models import Todo, Project
from .models import User

admin.site.register(User, UserAdmin)
# admin.site.register(Todo, Project)