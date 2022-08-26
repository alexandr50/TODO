from django.db import models

from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=64)
    link = models.URLField()
    users = models.ManyToManyField(User)

    def __str__(self):
        return f'{self.name}'

class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    person = models.ForeignKey(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.person} {self.text[:20]} {self.is_active} {self.project.name}'