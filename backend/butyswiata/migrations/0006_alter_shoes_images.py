# Generated by Django 4.0.3 on 2022-11-30 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('butyswiata', '0005_alter_shoes_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoes',
            name='images',
            field=models.ImageField(null=True, upload_to='images'),
        ),
    ]
