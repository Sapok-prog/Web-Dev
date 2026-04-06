from django.core.serializers import serialize
from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Product , Category
from .serializers import ProductSerializer , CategorySerializer
from rest_framework import viewsets


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    @action(detail=True, methods=['get'],url_path='products')
    def products(self , request , pk=None):
        category = self.get_object() #like Category.objects.get(id=pk)
        products = category.product_set.all()
        serializer = ProductSerializer(products , many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer



