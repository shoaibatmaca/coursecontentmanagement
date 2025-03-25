from rest_framework import serializers
from .models import Course, CourseLevel, Video

class VideoSerializer(serializers.ModelSerializer):
    public_url = serializers.SerializerMethodField()

    class Meta:
        model = Video
        fields = '__all__'  # or list fields like ['id', 'title', ..., 'public_url']

    def get_public_url(self, obj):
        # Adjust based on your R2.dev public base URL
        return f"https://pub-c24b4ce82c314030ac44820f8cc0b95e.r2.dev/{obj.video_file.name}"


class CourseLevelSerializer(serializers.ModelSerializer):
    videos = VideoSerializer(many=True, read_only=True)

    class Meta:
        model = CourseLevel
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    levels = CourseLevelSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = '__all__'

