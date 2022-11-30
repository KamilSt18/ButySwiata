from django.db import models
import uuid


class Color(models.Model):
    class Meta:
        verbose_name = "Color"
        verbose_name_plural = "Colors"

    name = models.CharField(max_length=100)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.name


class Category(models.Model):
    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    name = models.CharField(max_length=100)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.name


class Size(models.Model):
    class Meta:
        verbose_name = "Size"
        verbose_name_plural = "Sizes"

    name = models.CharField(max_length=100)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.name


class Shoes(models.Model):
    class Meta:
        verbose_name = "Shoe"
        verbose_name_plural = "Shoes"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    image = models.ImageField(null=True, upload_to="images")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    size = models.ForeignKey(Size, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    price = models.FloatField()
    pieces = models.IntegerField()
    color = models.ForeignKey(Color, on_delete=models.CASCADE, null=True)
    description = models.TextField()

    def __str__(self):
        return self.name

