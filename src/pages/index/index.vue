<template>
  <view class="container" @tap="hideTooltip">
    <!-- 头部个人信息区域 -->
    <view class="header">
      <image class="avatar" src="/static/头像.jpg" mode="aspectFill" />
      <text class="name">郭玉峰</text>
      <text class="intro">AI前端开发工程师 | 应届毕业生</text>
    </view>

    <!-- 技能标签云 -->
    <view class="skills-section">
      <text class="section-title">技能标签</text>
      <view class="skills-cloud">
        <view
          v-for="(skill, index) in skills"
          :key="index"
          class="skill-tag"
          :style="{ backgroundColor: getRandomSoftColor(index) }"
          @tap.stop="toggleTooltip(index, $event)"
        >
          {{ skill.name }}
          <!-- 对话框提示 -->
          <view
            v-if="activeTooltip === index"
            class="skill-tooltip"
            :style="{ backgroundColor: getRandomSoftColor(index) }"
          >
            <text class="tooltip-text">{{ skill.level || '了解' }}{{ skill.name }}</text>
            <view class="tooltip-arrow"></view>
          </view>
        </view>
      </view>
    </view>

    <!-- 导航卡片 -->
    <view class="cards-section">
      <view class="nav-card" @tap="navigateTo('/pages/projects/projects')">
        <view class="card-icon">📱</view>
        <text class="card-title">项目经验</text>
        <text class="card-desc">查看我的项目作品</text>
      </view>

      <view class="nav-card" @tap="navigateTo('/pages/about/about')">
        <view class="card-icon">👤</view>
        <text class="card-title">关于我</text>
        <text class="card-desc">了解我的经历和背景</text>
      </view>

      <view class="nav-card" @tap="navigateTo('/pages/contact/contact')">
        <view class="card-icon">📞</view>
        <text class="card-title">联系我</text>
        <text class="card-desc">获取联系方式</text>
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { skills } from '@/data/resume'

// 提示框状态
const activeTooltip = ref<number | null>(null)

// 切换工具提示显示/隐藏
const toggleTooltip = (index: number, event: any) => {
  event.stopPropagation()
  if (activeTooltip.value === index) {
    // 如果当前已显示，则隐藏
    activeTooltip.value = null
  } else {
    // 如果当前未显示，则显示
    activeTooltip.value = index
  }
}

// 点击其他地方隐藏提示
const hideTooltip = () => {
  activeTooltip.value = null
}

// 页面跳转
const navigateTo = (url: string) => {
  // 添加页面跳转加载状态
  uni.showLoading({
    title: '加载中...',
    mask: true
  })

  uni.navigateTo({
    url: url,
    success: () => {
      setTimeout(() => {
        uni.hideLoading()
      }, 100)
    },
    fail: () => {
      uni.hideLoading()
      uni.showToast({
        title: '页面跳转失败',
        icon: 'none'
      })
    }
  })
}

// 生成随机柔和颜色
const getRandomSoftColor = (index: number) => {
  const softColors = [
    '#e0f2e9', // 薄荷绿
    '#d9d0f0', // 淡紫
    '#b8e6ff', // 浅蓝
    '#ffd6e0', // 浅粉
    '#c7f0db', // 浅薄荷
    '#e8d5ff', // 浅薰衣草
    '#ffeaa7', // 浅黄
    '#fab1a0'  // 浅珊瑚
  ]
  return softColors[index % softColors.length]
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

/* 头部区域 */
.header {
  text-align: center;
  margin-bottom: 40rpx;
  background: white;
  border-radius: 20rpx;
  padding: 40rpx 30rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
  margin-bottom: 20rpx;
  border: 4rpx solid #d9d0f0;
}

.name {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 10rpx;
}

.intro {
  font-size: 28rpx;
  color: #666;
  display: block;
}

/* 技能标签区域 */
.skills-section {
  margin-bottom: 40rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
  display: block;
}

.skills-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 15rpx;
  background: white;
  border-radius: 20rpx;
  padding: 30rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
}

.skill-tag {
  padding: 12rpx 24rpx;
  border-radius: 16rpx;
  color: #333;
  font-size: 24rpx;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
  opacity: 1;
  position: relative; /* 为提示框定位 */
  display: inline-block; /* 确保相对定位正常工作 */
}

.skill-tag:active {
  transform: scale(0.96);
  opacity: 0.8;
}

/* 技能提示框 */
.skill-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8rpx;
  padding: 8rpx 16rpx;
  border-radius: 8rpx;
  color: #333;
  font-size: 22rpx;
  font-weight: 500;
  white-space: nowrap;
  z-index: 100;
  animation: tooltipFadeIn 0.2s ease;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.15);
}

.tooltip-text {
  display: block;
}

.tooltip-arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6rpx solid transparent;
  border-right: 6rpx solid transparent;
  border-top: 6rpx solid currentColor;
  opacity: 0.8;
}

/* 提示框动画 */
@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(8rpx);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* 导航卡片区域 */
.cards-section {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.nav-card {
  background: white;
  border-radius: 16rpx;
  padding: 30rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
}

.nav-card:active {
  transform: scale(0.98);
  opacity: 0.9;
}

.card-icon {
  font-size: 48rpx;
  margin-right: 20rpx;
  width: 60rpx;
  text-align: center;
}

.card-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
  flex: 1;
}

.card-desc {
  font-size: 24rpx;
  color: #666;
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

.modal-content {
  background: white;
  border-radius: 16rpx;
  padding: 30rpx 40rpx;
  margin: 0 60rpx;
  text-align: center;
  box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.2);
  animation: scaleIn 0.2s ease;
  max-width: 80%;
}

.modal-text {
  font-size: 26rpx;
  color: #333;
  font-weight: 500;
  display: block;
  line-height: 1.4;
}

/* 弹窗动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
