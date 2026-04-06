from rest_framework import serializers
from .models import Product
from .models import Category

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name' , 'price' , 'description' , 'count' , 'is_active' , 'category']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

