from itertools import product

from django.core.serializers import serialize
from django.http import Http404
from django.template.context_processors import request
from rest_framework.response import Response
from rest_framework.views import APIView
from ..models import Product , Category
from ..serializers import ProductSerializer , CategorySerializer
from rest_framework import status
from django.shortcuts import get_object_or_404

class ProductListAPIView(APIView):
    def get(self , request):
        product = Product.objects.all()
        serializer = ProductSerializer(product)

        return Response(serializer)

    def post(self , request):

        serializer = ProductSerializer(data=request.data)
        return Response(serializer , status=status.HTTP_201_CREATED)

class ProductDetailAPIView(APIView):
    def get_object(self, product_id):
        try:
            return Product.objects.get(id=product_id)
        except Product.DoesNotExist as exc:
            raise Http404 from exc
    def get(self , product_id):
        product = self.get_object(product_id)
        serializer = ProductSerializer(product)

        Response(serializer.data , status=status.HTTP_200_OK)

    def get(self, request , product_id):
        product = self.get_object(product_id)
        serializer = ProductSerializer(product , data=request.data)

        Response(serializer.data)

    def delete(self , product_id):
        product = self.get_object(product_id)

        product.delete()
        Response(status=status.HTTP_200_OK)


