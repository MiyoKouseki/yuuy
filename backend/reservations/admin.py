from django.contrib import admin
from .models import Reservation, Organization, Room

admin.site.register(Reservation)
admin.site.register(Room)
admin.site.register(Organization)
