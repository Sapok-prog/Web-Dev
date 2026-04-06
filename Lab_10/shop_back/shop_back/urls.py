from django.urls import path

from api.views import (
    CategoryDetailAPIView,
    CategoryListAPIView,
    CategoryProductsAPIView,
    api_overview,
    product_detail_view,
    product_list_view,
)

urlpatterns = [
    path("", api_overview, name="api_overview"),
    path("api/categories/", CategoryListAPIView.as_view(), name="categories"),
    path(
        "api/categories/<int:category_id>/",
        CategoryDetailAPIView.as_view(),
        name="category_detail",
    ),
    path(
        "api/categories/<int:category_id>/products/",
        CategoryProductsAPIView.as_view(),
        name="category_products",
    ),
    path("api/products/", product_list_view, name="products"),
    path("api/products/<int:product_id>/", product_detail_view, name="product_detail"),
]