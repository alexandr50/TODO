import graphene
from graphene import ObjectType
from graphene_django import DjangoObjectType
from django.utils.encoding import force_str

from users.models import User
from project.models import Todo, Project

class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'

class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'


class Query(graphene.ObjectType):
    all_todos = graphene.List(TodoType)
    all_users = graphene.List(UserType)
    all_projects = graphene.List(ProjectType)
    def resolve_all_todos(root, info):
        return Todo.objects.all()

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()

# class Query(graphene.ObjectType):
#     all_todos = graphene.List(TodoType)
#     user_todos_by_id = graphene.List(TodoType, id=graphene.Int(required=True))
#
#     def resolve_user_todo_by_id(self, info, id):
#         todos = Todo.objects.all()
#         try:
#             return todos.filter(user_owner__id=id)
#         except:
#             return None

schema = graphene.Schema(query=Query)


'''
{
allTodos {
id
text
  project{
    name
    link
    users{
      username
      id
      email
      
    }
   
  }

  }
}

'''