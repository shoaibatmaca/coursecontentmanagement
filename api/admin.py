from django.contrib import admin
from .models import Course, CourseLevel, Video, User


admin.site.register(User)



@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'user', 'created_at']
    search_fields = ['title', 'description']

@admin.register(CourseLevel)
class CourseLevelAdmin(admin.ModelAdmin):
    list_display = ['course', 'level']
    list_filter = ['level']

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ['title', 'course_level', 'uploaded_at']
    search_fields = ['title', 'description']
