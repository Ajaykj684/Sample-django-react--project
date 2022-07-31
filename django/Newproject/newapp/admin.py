from django.contrib import admin
from newapp.models import Account



class AccountAdmin(admin.ModelAdmin):
    pass

admin.site.register(Account,AccountAdmin)