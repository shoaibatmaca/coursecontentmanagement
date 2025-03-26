# from rest_framework import viewsets, permissions
# from .models import Course, CourseLevel, Video
# from .serializers import CourseSerializer, CourseLevelSerializer, VideoSerializer

# class CourseViewSet(viewsets.ModelViewSet):
#     queryset = Course.objects.all()
#     serializer_class = CourseSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)


# class CourseLevelViewSet(viewsets.ModelViewSet):
#     queryset = CourseLevel.objects.all()
#     serializer_class = CourseLevelSerializer
#     permission_classes = [permissions.IsAuthenticated]


# class VideoViewSet(viewsets.ModelViewSet):
#     queryset = Video.objects.all()
#     serializer_class = VideoSerializer
#     permission_classes = [permissions.IsAuthenticated]


from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Course, CourseLevel, Video
from .serializers import CourseSerializer, CourseLevelSerializer, VideoSerializer


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=True, methods=['get'], url_path='levels')
    def get_levels(self, request, pk=None):
        course = self.get_object()
        levels = course.levels.all()
        serializer = CourseLevelSerializer(levels, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path='levels/(?P<level_id>[^/.]+)/videos')
    def get_videos_for_level(self, request, pk=None, level_id=None):
        course = self.get_object()
        try:
            level = course.levels.get(id=level_id)
        except CourseLevel.DoesNotExist:
            return Response({'error': 'Level not found in this course'}, status=404)

        videos = level.videos.all()
        serializer = VideoSerializer(videos, many=True)
        return Response(serializer.data)
