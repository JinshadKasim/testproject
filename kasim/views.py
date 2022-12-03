from django.shortcuts import render,redirect
from kasim.models import Registration,Products,Staff,Doctors
from kasim.serializers import DoctorsRegSerializer
from random import random
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from decorators import login_check
from django.core.mail import send_mail
from django.conf import settings
from traceback import format_exc
# Create your views here.

def home(request):
    return render(request, 'kasim/index.html')

def aboutus(request):
    return render(request, 'kasim/aboutus.html')

def blog(request):
    return render(request,'kasim/blog.html')

def placement(request):
    return render(request,'kasim/placement.html')

def test(request):

    return render(request,'kasim/test.html')

def kasim(request):
    return render(request,'kasim/test2.html')


def test3(request):
    return render(request,'kasim/test3.html')


def test4(request):
    return render(request,'kasim/test4.html')


def bootstrap(request):
    return render(request,'kasim/bootstrap.html')


def btstrap2(request):
    return render(request,'kasim/btstrap2.html')


def js(request):
    return render(request,'kasim/js.html')


def dom(request):
    return render(request,'kasim/dom.html')


def form(request):
    return render(request,'kasim/form.html')


def password(request):
    return render(request,'kasim/password.html')





def db(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        phone = request.POST['phone']
        password = request.POST['password']
        address = request.POST['address']
        img = request.FILES['img']
        profile_image = str(random())+img.name
        add_image = FileSystemStorage()
        add_image.save(profile_image,img)
        userObj = Registration(name=name, email=email, phone=phone, password=password, address=address, img = img)
        userObj.save()
    
        subject = 'welcome to my app'
        message = 'hi{userObj.name}, You have Successfully Created an Account.Thankyou for registering'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [userObj.email]
        try:
            send_mail(subject, message, email_from, recipient_list)
        except Exception:
            error = format_exc()
            print(error)
    return render(request,'kasim/db.html')
    

def db2(request):
    userdata = Registration.objects.all()

    return render(request,'kasim/db2.html',{'data': userdata})




def login(request):
    if 'userId' not in request.session:
        if request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password']  
            try:
                user = Registration.objects.get(email=username,password=password)
                # if user.email == username and user.password == password:
                request.session['userId'] = user.id
                print(request.session['userId'])
                return redirect('home')

            except:
                return render(request,'kasim/login.html')

        
        # print(username)
        # print(password)
        return render(request,'kasim/login.html')
    return redirect('home')

    
@login_check
def profile(request):
    # if 'userId' in request.session:
    current_user = Registration.objects.get(id = request.session['userId'])
    #     return render(request,'kasim/profile.html',{'name':current_user})
    # else:
    #     return redirect('login')
    return render(request,'kasim/profile.html',{'name':current_user})


def logout(request):
    del  request.session['userId']
    return redirect('login')




def productReg(request):
    if request.method == 'POST':
        name = request.POST['name']
        description = request.POST['description']
        price = request.POST['price']
        quantity = request.POST['quantity']
        category = request.POST['category']
        current_user = request.session['userId']
        productObj = Products(name=name, description=description, price=price, quantity=quantity, product_category=category, user_id=current_user)
        productObj.save()

    return render(request,'kasim/productreg.html')




def homeScreen(request):
    if 'userId' in request.session:
        current_user = Registration.objects.get(id = request.session['userId'])
        return render(request,'kasim/home_screen.html')
    else:
        return redirect('login')
    return render(request,'kasim/home_screen.html')




def showProducts(request):
    if 'userId' in request.session:
        current_user = Registration.objects.get(id = request.session['userId'])
        product_data = Products.objects.filter(user_id=request.session['userId'])
        return render(request,'kasim/show_products.html',{'data':product_data})
    else:
        return redirect('login')
    

def updateProducts(request, id=0):
    print(id)
    productObj = Products.objects.get(id = id)



    return render(request, 'kasim/update_products.html',{'data':productObj})



def update(request):
    name = request.POST['name']
    description = request.POST['description']
    price = request.POST['price']
    quantity = request.POST['quantity']
    category = request.POST['category']
    pid = request.POST['pid']
    productObj = Products.objects.filter(id=pid).update(name=name, description=description, price=price, quantity=quantity, product_category=category)

    return redirect('showProducts')

    
def delete(request,id=0):
    productObj = Products.objects.get(id = id).delete()
    return redirect('showProducts')

@csrf_exempt   
def checkEmail(request):
    email = request.POST.get('email')
    print(email)
    emailExist = Registration.objects.filter(email = email).exists()
    print(emailExist)
    return JsonResponse({"message":emailExist})


def insert(request):
    return render(request,'kasim/insert.html')


@csrf_exempt   
def insertData(request):
    name = request.POST.get('name')
    email = request.POST.get('email')
    password = request.POST.get('password')
    place = request.POST.get('place')
    print(name)
    print(email)
    print(password)
    print(place)

    staffObj = Staff(name=name, email=email, password=password, place=place)
    staffObj.save()
    
    return JsonResponse({"data":staffObj})

def view_data(request):
    staff = Staff.objects.all()
    return JsonResponse({"data": staff})

@csrf_exempt   
def serve_doctor(request,id=0):
    if request.method == 'POST':
        doctorData = JSONParser().parse(request)
        print(doctorData)
        doctor_serializer = DoctorsRegSerializer(data=doctorData)
        if doctor_serializer.is_valid():
            doctor_serializer.save()
            return JsonResponse({'status':'Doctors Registered Successfully'})
    elif request.method == "GET":
        doctor = Doctors.objects.all()
        doctor_serializer = DoctorsRegSerializer(doctor,many=True)
        return JsonResponse({"data":doctor_serializer.data})
    elif request.method == "PUT":
        doctor_data = JSONParser().parse(request)
        doctor = Doctors.objects.get(id = doctor_data['id'])
        doctor_serializer = DoctorsRegSerializer(doctor,doctor_data)
    elif request.method == "DELETE":
        doctor = Doctors.objects.get(id = id)
        doctor.delete()
        return JsonResponse({"messagae":"Data Deleted Successfully"})

        if doctor_serializer.is_valid():
            doctor_serializer.save()
            return JsonResponse({"data":"data updated successfully"})


        
    return JsonResponse({'status':'Registration Failed'}
)



def modal(request):
    return render(request,'kasim/modal.html')



def responsive(request):
    return render(request,'kasim/responsive.html')