from django.test import TestCase
import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import ProjectModelViewSet, TodoCustomViewSet
from users.views import UserModelViewSet
from .models import Project, Todo
from users.models import User



class TestModelViewSet(TestCase):

    def setUp(self) -> None:
        self.format = 'json'
        self.username = 'admin'
        self.password = 'password'
        self.email = 'admin@gmail.com'

        self.data = {'username': 'user', 'email': 'randommail@gmail.com',
                     'password': 'password'}
        self.data_put = {'username': 'user_1', 'email': 'randommail_1@gmail.com',
                         'password': 'password'}
        self.url = '/api/users/'
        self.admin = User.objects.create_superuser(self.username, self.email, self.password)
        self.user = User.objects.create(**self.data)



    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = UserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post(self.url, self.data, format='json')
        view = UserModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_admin(self):

        factory = APIRequestFactory()
        request = factory.post(self.url, self.data, format=self.format)

        force_authenticate(request, self.admin)
        view = UserModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_detail(self):

        client = APIClient()
        response = client.get(f'{self.url}{self.user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_admin(self):
        client = APIClient()

        client.force_authenticate(user=self.admin)
        response = client.put(f'{self.url}{self.user.id}/', self.data_put)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # self.user.refresh_from_db()
        user_ = User.objects.get(id=self.user.id)
        self.assertEqual(user_.username, self.data_put.get('username'))
        self.assertEqual(user_.email, self.data_put.get('email'))
        client.logout()


    def test_get_list_todo(self):
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestDataBase(APISimpleTestCase):
    def test_math(self):
        self.assertEqual((4*2), 8)



class Mixertest(APITestCase):

    def test_mixer(self):
        self.admin = User.objects.create_superuser(username='admin', email='admin@mail.ru', password='password')
        self.data = {'name': 'todo_11', 'link': 'k'}
        project__1 = mixer.blend(Todo)
        self.client.force_login(user=self.admin)
        response = self.client.put(f'http://127.0.0.1:8000/api/project/{project__1.id}/', self.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo = Todo.objects.get(id=project__1.id)
        self.assertEqual(todo.text, 'text')
