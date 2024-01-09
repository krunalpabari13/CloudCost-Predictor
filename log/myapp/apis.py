from django.shortcuts import render
import hashlib
from .models import registration
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from . import extract
@csrf_exempt
def selected(request):
    if request.method=='POST':
        data=request.body.decode('utf-8');
        jsondata=json.loads(data)
        print(jsondata)
        data=extract.extract(jsondata);
        print(data)
        return JsonResponse(data)

@csrf_exempt
def login(request):
    if request.method=='POST':
        data=request.body.decode('utf-8')
        jsondata=json.loads(data)
        email=jsondata['email']
        password=jsondata['password']
        password = hashlib.sha256(password.encode()).hexdigest()
        try:
            user = registration.objects.get(email=email, password=password)
            data={"message":"successfully done"}
            return JsonResponse(data,status=200)
        
        except:
            data={"message":"Some Error Has Occured"}
            return JsonResponse(data,status=400)
    return JsonResponse(jsondata)


@csrf_exempt
def sign(request):
    if request.method=='POST':
        rawdata=request.body.decode('utf-8')
        jsondata=json.loads(rawdata)
        email=jsondata['email'];
        password=jsondata['password']
        phone=jsondata['phone']
        name=jsondata['name']
        password=hashlib.sha256(password.encode()).hexdigest()
        try:
            user=registration.objects.get(email=email)
            data={"Error":"Email is already in used"}
            return JsonResponse(data, status=200)
        except:
            user=None
            query = registration(name=name, email=email, password=password, phone=phone)
            query.save()
            data={"Success":"Successfully Registered"}
            return JsonResponse(data, status=200)

