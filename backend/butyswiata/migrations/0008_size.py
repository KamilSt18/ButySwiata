# Generated by Django 4.0.3 on 2022-11-30 19:05

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('butyswiata', '0007_rename_images_shoes_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Size',
            fields=[
                ('name', models.CharField(max_length=100)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
            ],
            options={
                'verbose_name': 'Size',
                'verbose_name_plural': 'Sizes',
            },
        ),
    ]
