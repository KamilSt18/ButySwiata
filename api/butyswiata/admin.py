from django.contrib import admin
from .models import Category, Color, Shoes, Size

# Register your models here.
admin.site.register(Category)
admin.site.register(Color)
admin.site.register(Shoes)
admin.site.register(Size)
