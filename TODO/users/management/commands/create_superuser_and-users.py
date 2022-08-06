from django.core.management import BaseCommand
from users.models import User
import string
import random
from django.utils.crypto import get_random_string

number = 3


class Command(BaseCommand):
    '''Скрипт создания ползователей и суперпользователя'''

    def get_email(self):
        return ''.join(random.choice(string.ascii_lowercase) for i in range(8)) + '@gmail.com'

    def handle(self, *args, **options):
        User.objects.create_superuser(username='superuser: ' + get_random_string(5),
                                      email=self.get_email(),
                                      first_name=get_random_string(5),
                                      last_name=get_random_string(5),
                                      password='1')
        for i in range(number):
            User.objects.create_user(username=get_random_string(5),
                                     email=self.get_email(),
                                     first_name=get_random_string(5),
                                     last_name=get_random_string(5),)
