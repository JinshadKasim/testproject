# Generated by Django 4.0.6 on 2022-11-11 11:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('kasim', '0005_rename_category_products_product_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='kasim.registration'),
            preserve_default=False,
        ),
    ]
