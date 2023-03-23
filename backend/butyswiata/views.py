from django.shortcuts import render, get_object_or_404

# Create your views here.
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from django.core.exceptions import ValidationError
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.response import Response
from rest_framework import filters

from butyswiata.models import Category, Color, Shoes, Size
from butyswiata.serializers import CategorySerializer, ColorSerializer, ShoesSerializer, SizeSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (AllowAny,)

    def list(self, request, *args, **kwargs):
        """
        return list of categories saved in db
        """
        queryset = self.get_queryset()

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ColorViewSet(viewsets.ModelViewSet):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer
    permission_classes = (AllowAny,)

    def list(self, request, *args, **kwargs):
        """
        return list of colors saved in db
        """
        queryset = self.get_queryset()

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class SizeViewSet(viewsets.ModelViewSet):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer
    permission_classes = (AllowAny,)

    def list(self, request, *args, **kwargs):
        """
        return list of sizes saved in db
        """
        queryset = self.get_queryset()

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ShoesViewSet(viewsets.ModelViewSet):
    queryset = Shoes.objects.all()
    serializer_class = ShoesSerializer
    permission_classes = (AllowAny,)
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    filterset_fields = ['category__name', 'color__name', 'size__name']
    search_fields = ['name', 'brand', 'model']

    def list(self, request, *args, **kwargs):
        """
        return list of shoes saved in db
        """
        filtered_queryset = self.filter_queryset(self.queryset)

        serializer = self.get_serializer(filtered_queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        """
        if shoes with the given primary key is saved in the database
        it returns object of this class, otherwise it returns code 404
        """
        try:
            shoes = get_object_or_404(self.queryset, pk=pk)
            serializer = self.get_serializer(shoes)
            return Response(serializer.data)
        except ValidationError:
            return Response({'error': 'Brak butów o podanym id!'}, status=status.HTTP_404_NOT_FOUND)
