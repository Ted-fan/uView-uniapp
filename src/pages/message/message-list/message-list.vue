<script src="./message-list.component.js"></script>
<style src="./message-list.css" scoped>

</style>
<template>
  <view>
    <u-navbar leftText="返回" :title="messageData.groupName" :placeholder="true" :safeAreaInsetTop="true" @leftClick="back()">
      <view class="u-nav-slot" slot="left">
        <u-icon name="arrow-left" size="19"></u-icon>
      </view>
    </u-navbar>
    <view class="aq-bg-color-light aq-padding-8 aq-margin-top-8" v-for="(item,index) in data" :key="index" @click="moveToDetailPage(item)">
      <view class="aq-vertical-middle aq-text-size-medium">
        <view class="aq-margin-left-16 aq-relative">
          <u-icon name="chat-fill" color="#118efd" size="30"></u-icon>
          <u-badge v-if="!item.isRead" class="icon-badge" :isDot="true"></u-badge>
        </view>
        <text class="aq-text-size-medium">{{messageData.groupName}}</text>
      </view>
      <view class="aq-padding-left-40 aq-padding-top-8 aq-text-size-medium">{{item.content}}</view>
      <view class="aq-padding-left-40 aq-padding-top-8 aq-text-size-normal">{{item.createTime}}</view>
    </view>
  </view>
</template>