from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone



class User(AbstractUser):
    # Fields inherited: id, username, first_name, last_name, email, password, etc.
    profile_photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

