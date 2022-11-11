from django.shortcuts import render,redirect
from kasim.models import Registration,Products

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
        userObj = Registration(name=name, email=email, phone=phone, password=password, address=address)
        userObj.save()
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

    

def profile(request):
    if 'userId' in request.session:
        current_user = Registration.objects.get(id = request.session['userId'])
        return render(request,'kasim/profile.html',{'name':current_user})
    else:
        return redirect('login')


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
        productObj = Products(name=name, description=description, price=price, quantity=quantity, product_category=category)
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
        product_data = Products.objects.all()
        return render(request,'kasim/show_products.html',{'data':product_data})
    else:
        return redirect('login')
    
