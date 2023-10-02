from django.urls import path
from . import views

urlpatterns = [
    path('', views.reservation_list, name='reservation_list'),
    path('create/', views.create_reservation, name='create_reservation'),
    path('<int:reservation_id>/update/', views.update_reservation, name='update_reservation'),
    path('<int:reservation_id>/delete/', views.delete_reservation, name='delete_reservation'),
]

