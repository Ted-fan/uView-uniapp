<script src="./mine.component.js"></script>
<style src="./mine.css" scoped>

</style>
<template>
  <view>
    <u-navbar title="个人中心" :placeholder="true" :safeAreaInsetTop="true" :autoBack="true"></u-navbar>
    <view class="aq-bg-color-light">
      <uni-section :type="'square'" :title="'个人基本信息'"></uni-section>
      <u-cell title="头像">
        <view slot="value" class="u-slot-title">
          <u-avatar :src="src"></u-avatar>
        </view>
      </u-cell>
      <u-cell title="姓名" :value="userInfo.trueName"></u-cell>
      <u-cell title="性别" :value="userInfo.sex"></u-cell>
      <u-cell title="手机号" :value="userInfo.mobileNumber"></u-cell>
      <u-cell title="工号" :value="userInfo.workNo"></u-cell>
      <u-cell title="组织">
        <view slot="value">
          <view class="aq-vertical-middle" @click="openStructPopup">
            <u--text type="primary" :text="userOrganization.structName"></u--text>
            <image src="/static/images/icon/switch.png" class="icon-15"></image>
          </view>
        </view>

      </u-cell>
    </view>
    <u-button type="primary" shape="circle" text="退出登录" class="btn" @click="logOut()"></u-button>
    <u-popup :show="showStructPopup" mode="top" :safeAreaInsetTop="true" @close="closeStructPopup">
      <view>
        <u-list class="aq-height-full">
          <u-list-item v-for="(item, index) in userStructs" :key="index">
            <u-cell :title="item.structName" @click="selectOrganization(item)"></u-cell>
          </u-list-item>
        </u-list>
      </view>
    </u-popup>
  </view>
</template>