from django.http import JsonResponse
from .models import Reservation

from django.shortcuts import render, get_object_or_404
from .models import Room, Reservation

from django.http import HttpResponse
from django.shortcuts import render
from .forms import ReservationForm
from django.shortcuts import render, redirect, get_object_or_404
from .models import Reservation

def reservation_list(request):
    reservations = Reservation.objects.all()
    return render(request, 'reservations/reservation_list.html',
                  {'reservations': reservations})

def create_reservation(request):
    if request.method == 'POST':
        form = ReservationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('reservation_list')
    else:
        form = ReservationForm()
    return render(request, 'reservations/create_reservation.html',
                  {'form': form})

def update_reservation(request, reservation_id):
    reservation = get_object_or_404(Reservation, pk=reservation_id)
    if request.method == "POST":
        form = ReservationForm(request.POST, instance=reservation)
        if form.is_valid():
            form.save()
            return redirect('reservation_list')
    else:
        form = ReservationForm(instance=reservation)
    return render(request, 'reservations/update_reservation.html', {'form': form})


def delete_reservation(request, reservation_id):
    reservation = get_object_or_404(Reservation, id=reservation_id)
    if request.method == 'POST':  # リクエストメソッドがPOSTの場合のみ削除
        reservation.delete()
        return redirect('reservation_list')
    else:
        return redirect('reservation_list')  # GETの場合、一覧にリダイレクト（またはエラーメッセージを表示）

