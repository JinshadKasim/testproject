# Generated by Django 4.0.6 on 2022-11-15 11:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('kasim', '0007_registration_photo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='registration',
            old_name='photo',
            new_name='img',
        ),
    ]
