<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="page-header">
      <text class="page-title">关于我</text>
      <text class="page-subtitle">我的成长经历和教育背景</text>
    </view>

    <!-- 时间轴 -->
    <view class="timeline">
      <view
        v-for="(experience, index) in experiences"
        :key="index"
        class="timeline-item"
      >
        <!-- 时间轴节点 -->
        <view class="timeline-node">
          <view class="node-dot"></view>
          <!-- 连接线（除了最后一项） -->
          <view v-if="index < experiences.length - 1" class="node-line"></view>
        </view>

        <!-- 经历内容卡片 -->
        <view class="experience-card">
          <!-- 时间标签 -->
          <view class="time-badge">
            <text class="time-text">{{ experience.time }}</text>
          </view>

          <!-- 经历标题 -->
          <text class="experience-title">{{ experience.title }}</text>

          <!-- 经历描述 -->
          <text class="experience-desc">{{ experience.description }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { experiences } from '@/data/resume'
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

/* 时间轴容器 */
.timeline {
  padding-left: 20rpx;
}

/* 时间轴单项 */
.timeline-item {
  display: flex;
  margin-bottom: 40rpx;
  position: relative;
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }
.timeline-item:nth-child(5) { animation-delay: 0.5s; }

/* 时间轴节点 */
.timeline-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40rpx;
  position: relative;
  z-index: 1;
}

.node-dot {
  width: 20rpx;
  height: 20rpx;
  background: linear-gradient(135deg, #d9d0f0 0%, #b8e6ff 100%);
  border-radius: 50%;
  border: 4rpx solid white;
  box-shadow: 0 0 0 3rpx rgba(217, 208, 240, 0.3);
  margin-top: 25rpx;
  position: relative;
}

.node-dot::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8rpx;
  height: 8rpx;
  background: white;
  border-radius: 50%;
}

.node-line {
  width: 3rpx;
  flex: 1;
  background: linear-gradient(to bottom, #d9d0f0 0%, rgba(217, 208, 240, 0.4) 50%, rgba(217, 208, 240, 0.1) 100%);
  margin-top: 15rpx;
  min-height: 100rpx;
  border-radius: 2rpx;
}

/* 经历卡片 */
.experience-card {
  flex: 1;
  background: white;
  border-radius: 20rpx;
  padding: 35rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4rpx solid #d9d0f0;
  position: relative;
}

.experience-card:hover {
  transform: translateY(-2rpx);
  box-shadow: 0 8rpx 30rpx rgba(0, 0, 0, 0.12);
}

.experience-card:active {
  transform: scale(0.98);
}

/* 时间标签 */
.time-badge {
  display: inline-block;
  background: linear-gradient(135deg, #e0f2e9 0%, #d9d0f0 100%);
  padding: 10rpx 20rpx;
  border-radius: 25rpx;
  margin-bottom: 18rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
}

.time-text {
  font-size: 24rpx;
  color: #2d5a3d;
  font-weight: 600;
}

/* 经历标题 */
.experience-title {
  font-size: 30rpx;
  font-weight: bold;
  color: #2c3e50;
  display: block;
  margin-bottom: 15rpx;
  line-height: 1.4;
}

/* 经历描述 */
.experience-desc {
  font-size: 26rpx;
  color: #5a6c7d;
  line-height: 1.7;
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30rpx);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>