import imp
from urllib import response
from newapp import serialize
from newapp.models import Account
from newapp.serialize import AccountSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated ,IsAdminUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
import json


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username
        token['is_admin'] = user.is_admin
       


        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])

def getRoutes(request):
    routes =[
        '/api/token',
        '/api/token/refresh',
       

    ]
    return Response(routes)

class DetailsTable(APIView):
   
    def get(self,request):
        users=Account.objects.all()
        dlSerializeObj=AccountSerializer(users,many=True)
        return Response(dlSerializeObj.data)

    def post(self,request):
        serializeobj=AccountSerializer(data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response (200)
        return Response(serializeobj.errors)



class DetailsUpdate(APIView):
    def post(self,request,id):

        try:
            users=Account.objects.get(pk=id)
        except:
            return Response("Not found in DataBase")
        serializeobj=AccountSerializer(users,data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response (200)
        return Response(serializeobj.errors)

        
    def get(self,request,id):

        try:
            users=Account.objects.get(pk=id)
        except:
            return Response("Not found in DataBase")
        
        serializeobj=AccountSerializer(users)
       
        return Response(serializeobj.data)



class DetailsDelete(APIView):
    def post(self,request,id):

        try:
            detailobj=Account.objects.get(pk=id)
        except:
            return Response("Not found in DataBase")
        detailobj.delete()
        return Response (200)




class DetailsAdd(APIView):
    def post(self,request ):
        print('POST', request.body)
        body = request.body.decode('utf-8')
        body = json.loads(body)
        email=body['email']
        username=body['username']
        password=body['password']
        phone=body['phone']
        print(password,"pas4444")
        


        user = Account.objects.create_user(email=email,username=username,password=password ,phone=phone,first_name="none",last_name="none")
        user.save()
        
        return Response (200)
       

 




class DetailsSignup(APIView):
    def post(self,request ):
        print('POST', request.body)
        body = request.body.decode('utf-8')
        body = json.loads(body)
        email=body['email']
        username=body['username']
        password=body['password']
        phone=body['phone']
       
        user = Account.objects.create_user(email=email,username=username,password=password ,phone=phone,first_name="none",last_name="none")
        user.save()
        
        return Response (200)