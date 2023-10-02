from django.db import models

class Room(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Organization(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Reservation(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
