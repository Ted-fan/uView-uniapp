<script src="./message.component.js"></script>
<style src="./message.css" scoped></style>
<template>
  <view class="aq-bg-color-light">
    <u-toast ref="uToast"></u-toast>
    <u-cell-group title-bg-color="rgb(243, 244, 246)">
      <u-cell :title="item.groupName" v-for="(item, index) in list" :key="index" isLink :icon="item.iconUrl" @click="moveToMessageListpage(item)">
		<u-badge slot="value" type="error" :max="99" :value="item.unReadCount"></u-badge>
      </u-cell>
    </u-cell-group>
  </view>
</template>