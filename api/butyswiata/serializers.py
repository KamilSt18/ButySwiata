from rest_framework import serializers
from .models import Category, Color, Shoes, Size


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'id']


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['name', 'id']


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ['name', 'id']


class ShoesSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()
    color = serializers.SerializerMethodField()
    size = SizeSerializer(many=True, read_only=True)
    class Meta:
        model = Shoes
        fields = ['id', 'image', 'category', 'name', 'brand', 'model', 'size', 'price', 'pieces', 'color', 'description']

    def get_category(self, obj):
        return obj.category.name

    def get_color(self, obj):
        return obj.color.name

