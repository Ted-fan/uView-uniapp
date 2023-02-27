<script src="./home.component.js"></script>
<style src="./home.css" scoped></style>
<template>
    <view>
        <u-navbar :placeholder="true" :safeAreaInsetTop="true">
            <view class="u-nav-slot" slot="left">您好,{{ userInfo.name }}</view>
            <view class="u-nav-slot" slot="right"><u--text :text="userInfo.struct"></u--text></view>
        </u-navbar>
        <view>
            <!-- banner -->
            <view><image class="aq-width-full" src="/static/images/banner/banner.png" /></view>
            <!-- statics -->
            <view class="aq-bg-color-light aq-padding-bottom-16">
                <uni-section :type="'square'" :title="'审批总览'"></uni-section>
                <u-grid :border="false" :col="2" class="aq-margin-top-16">
                    <u-grid-item>
                        <text class="aq-text-size-xlarge aq-text-weight-bolder aq-text-color-primary">{{ pendingApprovalCount }}</text>
                        <text class="aq-text-size-big aq-text-weight-bolder">待审批</text>
                    </u-grid-item>
                    <u-grid-item>
                        <text class="aq-text-size-xlarge aq-text-weight-bolder aq-text-color-dark">{{ approvalHistoryCount }}</text>
                        <text class="aq-text-size-big aq-text-weight-bolder">审批历史</text>
                    </u-grid-item>
                </u-grid>
            </view>
            <!-- nav tab -->
            <view class="aq-bg-color-light aq-padding-bottom-16">
                <uni-section :type="'square'" :title="'导航栏'"></uni-section>
                <u-grid :border="false" :col="4" @click="moveToPage">
                    <u-grid-item v-for="(item, index) in items" :key="index">
                        <u-icon :customStyle="{ marginTop: 20 + 'rpx' }" :name="item.icon" size="50"></u-icon>
                        <text class="aq-padding-top-8">{{ item.title }}</text>
                    </u-grid-item>
                </u-grid>
            </view>
        </view>
    </view>
</template>
