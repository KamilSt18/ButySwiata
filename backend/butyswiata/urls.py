from rest_framework import routers
from django.urls import include, path, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

from butyswiata.views import CategoryViewSet, ColorViewSet, ShoesViewSet, SizeViewSet

router = routers.DefaultRouter()
router.register(r'category', CategoryViewSet)
router.register(r'color', ColorViewSet)
router.register(r'shoes', ShoesViewSet)
router.register(r'size', SizeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    re_path(r'^images/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
