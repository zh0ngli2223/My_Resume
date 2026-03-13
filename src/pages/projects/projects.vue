<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="page-header">
      <text class="page-title">项目经验</text>
      <text class="page-subtitle">展示我的技术作品和项目经历</text>
    </view>

    <!-- 项目列表 -->
    <view class="projects-list">
      <view
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
        @tap="toggleProject(index)"
      >
        <!-- 项目基本信息 -->
        <view class="project-header">
          <view class="project-title-row">
            <text class="project-title">{{ project.title }}</text>
            <text class="project-role">{{ project.role }}</text>
          </view>
          <text class="project-desc">{{ project.desc }}</text>
        </view>

        <!-- 技术栈标签 -->
        <view class="tech-stack">
          <view
            v-for="(tech, techIndex) in project.techStack"
            :key="techIndex"
            class="tech-tag"
          >
            {{ tech }}
          </view>
        </view>

        <!-- 展开/收起图标 -->
        <view class="expand-icon">
          <text class="icon-text">{{ expandedProjects[index] ? '▼' : '▶' }}</text>
        </view>

        <!-- 详细描述（可展开/收起） -->
        <view v-show="expandedProjects[index]" class="project-detail">
          <view class="detail-divider"></view>
          <text class="detail-title">项目详情</text>
          <text class="detail-content">{{ project.detail }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { projects } from '@/data/resume'

// 控制项目详情展开/收起的响应式对象
const expandedProjects = reactive<{ [key: number]: boolean }>({})

// 切换项目详情的展开状态
const toggleProject = (index: number) => {
  expandedProjects[index] = !expandedProjects[index]
}
</script>

<style scoped>
/* 容器样式 */
.container {
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f2e9 0%, #f9f9f9 100%);
  padding: 30rpx;
  /* 优化渲染性能 */
  will-change: auto;
  transform: translateZ(0);
}

/* 页面头部 */
.page-header {
  text-align: center;
  margin-bottom: 40rpx;
}

.page-title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 10rpx;
}

.page-subtitle {
  font-size: 26rpx;
  color: #666;
  display: block;
}

/* 项目列表 */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 25rpx;
}

/* 项目卡片 */
.project-card {
  background: white;
  border-radius: 16rpx;
  padding: 30rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
}

.project-card:active {
  transform: scale(0.99);
  opacity: 0.9;
}

/* 项目头部信息 */
.project-header {
  margin-bottom: 20rpx;
}

.project-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12rpx;
}

.project-title {
  font-size: 30rpx;
  font-weight: bold;
  color: #333;
  flex: 1;
}

.project-role {
  background: #d9d0f0;
  color: white;
  padding: 6rpx 16rpx;
  border-radius: 20rpx;
  font-size: 22rpx;
  font-weight: 500;
}

.project-desc {
  font-size: 26rpx;
  color: #666;
  line-height: 1.5;
}

/* 技术栈标签 */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10rpx;
  margin-bottom: 20rpx;
}

.tech-tag {
  background: #e0f2e9;
  color: #2d5a3d;
  padding: 8rpx 16rpx;
  border-radius: 15rpx;
  font-size: 22rpx;
  font-weight: 500;
}

/* 展开/收起图标 */
.expand-icon {
  text-align: center;
  padding: 10rpx 0;
}

.icon-text {
  font-size: 20rpx;
  color: #999;
  transition: all 0.3s ease;
}

/* 项目详情区域 */
.project-detail {
  margin-top: 20rpx;
}

.detail-divider {
  height: 1rpx;
  background: #eee;
  margin-bottom: 20rpx;
}

.detail-title {
  font-size: 26rpx;
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 12rpx;
}

.detail-content {
  font-size: 24rpx;
  color: #666;
  line-height: 1.6;
}
</style>