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