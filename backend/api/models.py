from django.db import models

# Create your models here.


class Task(models.Model):
    text = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.text.__str__()

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'
