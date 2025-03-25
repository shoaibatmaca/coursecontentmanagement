from rest_framework import serializers
from .models import Course, CourseLevel, Video

class VideoSerializer(serializers.ModelSerializer):
    public_url = serializers.SerializerMethodField()

    class Meta:
        model = Video
        fields = ['id', 'title', 'description', 'video_file', 'public_url', 'uploaded_at', 'course_level']

    def get_public_url(self, obj):
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

