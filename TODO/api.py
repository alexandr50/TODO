import requests
from requests.auth import HTTPBasicAuth

# auth = HTTPBasicAuth(username='liza', password='1')
# response = requests.get('http://127.0.0.1:8000/api/users/', auth=auth)
# print(response)

data = {'username': 'liza', 'password': '1'}
response = requests.post('http://127.0.0.1:8000/api-token-auth/', data=data)
token = response.json().get('token')
response_users = requests.get('http://127.0.0.1:8000/api/users/', headers={'Authorization':f'Token {token}'})
print(response_users)
