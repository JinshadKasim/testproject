
from django.urls import path
from .import views

urlpatterns = [
    path('',views.home,name='hm'),
    path('blog',views.blog,name='bg'),
    path('aboutus',views.aboutus,name='au'),
    path('placements',views.placement,name='pl')
]
