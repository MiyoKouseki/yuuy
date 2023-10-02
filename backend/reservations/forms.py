from django import forms
from .models import Reservation, Room, Organization
from django.forms import widgets
from django.core.exceptions import ValidationError
        

class ReservationForm(forms.ModelForm):
    room = forms.ModelChoiceField(
        queryset=Room.objects.all(),
        to_field_name='name',
        label='Room',
        empty_label=None
    )

    class Meta:
        model = Reservation
        fields = ['room', 'organization', 'start_time', 'end_time']
        widgets = {
            'start_time': widgets.DateTimeInput(
                attrs={'type': 'datetime-local'}),
            'end_time': widgets.DateTimeInput(
                attrs={'type': 'datetime-local'}),
        }
        

    def clean(self):
        cleaned_data = super().clean()
        start_time = cleaned_data.get('start_time')
        end_time = cleaned_data.get('end_time')

        if start_time and end_time:
            if start_time >= end_time:
                raise ValidationError("終了時刻は開始時刻より遅くなければなりません。")

        return cleaned_data        
