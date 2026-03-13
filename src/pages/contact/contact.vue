<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="page-header">
      <text class="page-title">联系我</text>
      <text class="page-subtitle">期待与您的交流</text>
    </view>

    <!-- 微信二维码 -->
    <view class="qrcode-section">
      <view class="qrcode-card">
        <text class="section-title">微信二维码</text>
        <image
          class="qrcode-image"
          :src="contact.wechatQrCode || defaultQrCode"
          mode="aspectFit"
          @longpress="onLongPressQR"
          @tap="showQRCodeActions"
        />
        <text class="qrcode-desc">长按或点击保存二维码</text>
      </view>
    </view>

    <!-- 联系方式列表 -->
    <view class="contact-list">
      <!-- 邮箱 -->
      <view class="contact-item" @tap="copyToClipboard(contact.email, '邮箱')">
        <view class="contact-icon">📧</view>
        <view class="contact-info">
          <text class="contact-label">邮箱地址</text>
          <text class="contact-value">{{ contact.email }}</text>
        </view>
        <view class="copy-icon">📋</view>
      </view>

      <!-- 电话 -->
      <view class="contact-item" @tap="copyToClipboard(contact.phone, '电话')">
        <view class="contact-icon">📞</view>
        <view class="contact-info">
          <text class="contact-label">联系电话</text>
          <text class="contact-value">{{ contact.phone }}</text>
        </view>
        <view class="copy-icon">📋</view>
      </view>

      <!-- GitHub -->
      <view class="contact-item" @tap="copyToClipboard(contact.github, 'GitHub')">
        <view class="contact-icon">🐙</view>
        <view class="contact-info">
          <text class="contact-label">GitHub</text>
          <text class="contact-value">{{ contact.github }}</text>
        </view>
        <view class="copy-icon">📋</view>
      </view>
    </view>

    <!-- 提示弹窗 -->
    <view v-if="showToast" class="toast-overlay">
      <view class="toast-content">
        <text class="toast-text">{{ toastMessage }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { contact } from '@/data/resume'

  // 微信二维码
  const defaultQrCode = 'https://via.placeholder.com/200x200/e0f2e9/2d5a3d?text=微信二维码'

  // 提示信息
  const showToast = ref(false)
  const toastMessage = ref('')

  // 复制到剪贴板并显示提示
  const copyToClipboard = (text: string, type: string) => {
    // 复制到剪贴板
    uni.setClipboardData({
      data: text,
      success: () => {
        // 振动提示
        uni.vibrateShort({
          type: 'light'
        })

        // 显示提示
        toastMessage.value = `${type}地址已复制到剪贴板`
        showToast.value = true

        // 2秒后隐藏提示
        setTimeout(() => {
          showToast.value = false
        }, 2000)
      },
      fail: () => {
        toastMessage.value = '复制失败，请手动复制'
        showToast.value = true

        setTimeout(() => {
          showToast.value = false
        }, 2000)
      }
    })
  }

  // 长按二维码
  const onLongPressQR = () => {
    uni.vibrateShort({
      type: 'medium'
    })
    showQRCodeActions()
  }

  // 显示二维码操作菜单
  const showQRCodeActions = () => {
    saveQRCodeToAlbum()
  }

  // 保存二维码到相册
  const saveQRCodeToAlbum = () => {
    const qrCodeUrl = contact.wechatQrCode || defaultQrCode

    // 如果是网络图片
    if (qrCodeUrl.startsWith('http')) {
      uni.downloadFile({
        url: qrCodeUrl,
        success: (res) => {
          if (res.statusCode === 200) {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => {
                toastMessage.value = '二维码已保存到相册'
                showToast.value = true
                uni.vibrateShort({
                  type: 'success'
                })
                setTimeout(() => {
                  showToast.value = false
                }, 2000)
              },
              fail: () => {
                toastMessage.value = '保存失败，请检查相册权限'
                showToast.value = true
                setTimeout(() => {
                  showToast.value = false
                }, 2000)
              }
            })
          } else {
            toastMessage.value = '下载图片失败'
            showToast.value = true
            setTimeout(() => {
              showToast.value = false
            }, 2000)
          }
        },
        fail: () => {
          toastMessage.value = '下载图片失败'
          showToast.value = true
          setTimeout(() => {
            showToast.value = false
          }, 2000)
        }
      })
    } else {
      // 如果是本地图片
      uni.saveImageToPhotosAlbum({
        filePath: qrCodeUrl,
        success: () => {
          toastMessage.value = '二维码已保存到相册'
          showToast.value = true
          uni.vibrateShort({
            type: 'success'
          })
          setTimeout(() => {
            showToast.value = false
          }, 2000)
        },
        fail: () => {
          toastMessage.value = '保存失败，请检查相册权限'
          showToast.value = true
          setTimeout(() => {
            showToast.value = false
          }, 2000)
        }
      })
    }
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

  /* 微信二维码区域 */
  .qrcode-section {
    margin-bottom: 40rpx;
  }

  .qrcode-card {
    background: white;
    border-radius: 20rpx;
    padding: 40rpx 30rpx;
    box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .section-title {
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
    display: block;
    margin-bottom: 20rpx;
  }

  .qrcode-image {
    width: 200rpx;
    height: 200rpx;
    margin: 0 auto 20rpx;
    border-radius: 10rpx;
    border: 2rpx solid #e0f2e9;
  }

  .qrcode-desc {
    font-size: 24rpx;
    color: #666;
    display: block;
  }

  /* 联系方式列表 */
  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
  }

  /* 联系方式项 */
  .contact-item {
    background: white;
    border-radius: 16rpx;
    padding: 30rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .contact-item:active {
    transform: scale(0.99);
    opacity: 0.9;
  }

  .contact-icon {
    font-size: 40rpx;
    margin-right: 20rpx;
    width: 60rpx;
    text-align: center;
  }

  .contact-info {
    flex: 1;
  }

  .contact-label {
    font-size: 24rpx;
    color: #999;
    display: block;
    margin-bottom: 5rpx;
  }

  .contact-value {
    font-size: 26rpx;
    color: #333;
    font-weight: 500;
    word-break: break-all;
  }

  .copy-icon {
    font-size: 28rpx;
    color: #d9d0f0;
    margin-left: 15rpx;
  }

  /* 提示弹窗 */
  .toast-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .toast-content {
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 15rpx;
    padding: 20rpx 30rpx;
    margin: 0 60rpx;
    text-align: center;
  }

  .toast-text {
    font-size: 26rpx;
    line-height: 1.4;
  }
</style>