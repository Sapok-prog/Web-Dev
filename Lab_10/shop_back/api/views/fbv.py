from ..models import Product , Category
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..serializers import ProductSerializer, CategorySerializer
from django.shortcuts import get_object_or_404

@api_view(["GET" , "POST"])
def products_list(request):

    if request.method == "GET":

        products = Product.objects.all()
        serializer = ProductSerializer(products , many=True)

        return Response(serializer.data , status=status.HTTP_200_OK)

    elif request.method == "POST":
        # body = request.data
        serializer = ProductSerializer(data=request.data) #body = json.loads(request.body)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def product_detail(request, product_id):
    product = get_object_or_404(Product, id=product_id)

    if request.method == "GET":
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



#     if (request.method =='GET'):
#
#         products = Product.objects.all()
#         data = []
#
#         for product in products:
#             data.append(
#                 {
#                     "name" : product.name,
#                     "price" : product.price,
#                     "description" : product.description,
#                     "count" : product.count,
#                     "is_active" : product.is_active,
#                     "category" : product.category
#
#                 }
#             )
#         return JsonResponse(data , safe=False)
#
#     elif (request.method == 'POST'):
#
#         body = json.loads(request.body)
#         category = Category.objects.get(id=body["category"])
#
#         product = Product.objects.create(
#             name=body["name"],
#             price=body["price"],
#             description=body["description"],
#             count=body["count"],
#             is_active=body["is_active"],
#             category=category
#         )
#
#
# def product_detail(request , product_id):
#     if (request.method == 'GET'):
#
#         product = Product.objects.get(id=product_id)
#
#         return JsonResponse({
#             "id": product.id,
#             "name": product.name,
#             "price": product.price,
#             "description": product.description,
#             "count": product.count,
#             "is_active": product.is_active,
#             "category": product.category.id if product.category else None
#         })
#
#     elif (request.method == 'PUT'):
#
#         body = json.loads(request.body)
#         category = Category.objects.get(id=body.category)
#
#         product = Product.objects.get(id=product_id)
#         product = product.



