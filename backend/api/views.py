from django.shortcuts import render
from api.models import Task
from rest_framework import viewsets
from api.serializers import TaskSerializer
# Create your views here.


class TaskViewSet(viewsets.ModelViewSet):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer
