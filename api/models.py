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




from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Fixed choices for course levels
class LevelChoices(models.TextChoices):
    BEGINNER = 'Beginner', 'Beginner'
    INTERMEDIATE = 'Intermediate', 'Intermediate'
    PROFESSIONAL = 'Professional', 'Professional'


class Course(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courses')
    title = models.CharField(max_length=255)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='course_thumbnails/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class CourseLevel(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='levels')
    level = models.CharField(max_length=20, choices=LevelChoices.choices)
    
    class Meta:
        unique_together = ('course', 'level')  # Prevent duplicate levels per course

    def __str__(self):
        return f"{self.course.title} - {self.level}"

from core.storage_backends import R2Storage




class Video(models.Model):
    course_level = models.ForeignKey(CourseLevel, on_delete=models.CASCADE, related_name='videos')
    title = models.CharField(max_length=255)
    description = models.TextField()
    video_file = models.FileField(storage=R2Storage(), upload_to='course_videos/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.course_level.level}"

    @property
    def public_url(self):
        return f"https://pub-c24b4ce82c314030ac44820f8cc0b95e.r2.dev/{self.video_file.name}"
