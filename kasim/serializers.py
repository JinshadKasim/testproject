from rest_framework import serializers
from kasim.models import Doctors

class DoctorsRegSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctors
        fields = ('id','name','email','phone','department','place')