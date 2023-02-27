<script src="./approve.component.js"></script>
<style src="./approve.css" scoped></style>
<template>
  <view class="aq-bg-color-bg-grey aq-padding-horizontal-24">
    <!-- tab切换 -->
    <u-sticky offset-top="4" class="aq-bg-color-light">
      <u-subsection :list="tabsList" :current="current" @change="sectionChange" mode="subsection" activeColor="#118efd" inactiveColor="#0081ff" fontSize="14px" :bold="false"></u-subsection>
    </u-sticky>
    <!-- 列表区域 -->
    <view v-if="data.length > 0">
      <u-gap height="20"></u-gap>
      <view class="aq-margin-top-4 aq-margin-bottom-12 section-card" v-for="(item, index) in data" :key="index">
        <view @click="goToDetailsPage(item.objectId,item.businessTable)">
          <u-cell>
            <text slot="title">{{ item.title }}</text>
            <u-tag slot="value" :text="item.status" plain plainFill></u-tag>
          </u-cell>
          <view class="aq-margin-left-16 aq-padding-top-8">
            <view class="aq-margin-top-12 aq-vertical-space-between">
              <text class="title-text">申请标题</text>
              <text class="title-content">{{ item.applyTitle }}</text>
            </view>
            <view class="aq-margin-top-12 aq-margin-bottom-16 aq-vertical-space-between">
              <text class="title-text">创建时间</text>
              <text class="title-content">{{ item.createTime }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <u-empty v-else mode="data"></u-empty>
  </view>
</template>