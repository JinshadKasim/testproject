
from django.urls import path
from .import views

urlpatterns = [
    path('',views.home,name='hm'),
    path('blog',views.blog,name='bg'),
    path('aboutus',views.aboutus,name='au'),
    path('placements',views.placement,name='pl'),
    path('test',views.test,name='tst'),
    path('test2',views.kasim,name='ksm'),
    path('test3',views.test3,name='tst3'),
    path('test4',views.test4,name='tst4'),
    path('bootstrap',views.bootstrap,name='bt'),
    path('btstrap2',views.btstrap2,name='bt2'),
    path('js',views.js,name='js'),
    path('dom',views.dom,name='dom'),
    path('form',views.form,name='form'),
    path('password',views.password,name='password'),
    path('db',views.db,name='db'),
    path('db2',views.db2,name='db2'),
    path('Login',views.login,name='login'),
    path('profile',views.profile,name='profile'),
    path('logout',views.logout,name='logout'),
    path('product',views.productReg,name='productreg'),
    path('home',views.homeScreen,name='home'),
    path('show_products',views.showProducts,name='showProducts'),
    path('update_products/<int:id>',views.updateProducts,name='updateProducts'),
    path('update_products/update',views.update,name='update'),
]
