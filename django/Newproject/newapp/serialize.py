from dataclasses import field
from rest_framework import serializers
from newapp.models import Account


from rest_framework.serializers import ModelSerializer


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model=Account
        fields="__all__"




