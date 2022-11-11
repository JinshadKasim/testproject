from django.db import models

# Create your models here.

class Registration(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.BigIntegerField()
    password = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

    class Meta():
        db_table = 'registration'


class Products(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    price = models.IntegerField()
    quantity = models.IntegerField()
    product_category = models.CharField(max_length=100)
    user  = models.ForeignKey(Registration, on_delete=models.CASCADE)

    class Meta():
        db_table = 'products'