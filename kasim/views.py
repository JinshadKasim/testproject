from django.shortcuts import render

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