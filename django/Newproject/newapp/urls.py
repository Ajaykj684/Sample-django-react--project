from django.urls import path
from . import views


from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)




urlpatterns = [
    
    path('',views.DetailsTable.as_view()),
    path('update/<int:id>',views.DetailsUpdate.as_view()),
    path('delete/<int:id>',views.DetailsDelete.as_view()),
    path('add/',views.DetailsAdd.as_view()),

    path('signup/',views.DetailsSignup.as_view()),



    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]

