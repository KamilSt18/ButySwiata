# Generated by Django 4.0.3 on 2022-11-30 19:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('butyswiata', '0008_size'),
    ]

    operations = [
        migrations.AddField(
            model_name='shoes',
            name='size',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='butyswiata.size'),
        ),
    ]