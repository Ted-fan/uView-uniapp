<script src="./payment-plan.component.js"></script>
<style src="./payment-plan.css" scoped></style>
<template>
  <view>
    <view class="details">
      <!-- 内容区域 -->
      <!-- 付款含税/未税金额 -->
      <view>
        <u-gap height="20" bgColor="#fafafa"></u-gap>
        <u--text align="center" :text="totalAmount"> </u--text>
        <u-gap height="20" bgColor="#fafafa"></u-gap>
      </view>
      <!-- 期次-n -->
      <view class="aq-bg-color-light aq-margin-bottom-8" v-for="(item, index) in contractPaymentCollectionPlanList" :key="index">
        <uni-section :type="'square'" :title="`期次-${index + 1}`"></uni-section>
        <u-cell-group>
          <u-cell title="付款比例（%）" :value="item.paymentProportion"></u-cell>
          <u-cell title="付款含税金额（元）" :value="item.incomeTaxIncludingAmount ? item.incomeTaxIncludingAmount : '--'"></u-cell>
          <u-cell title="税率（%）" :value="(item.taxRateValue*100)+'%'"></u-cell>
          <u-cell title="付款未税金额（元）" :value="item.incomeTaxExcludingAmount"></u-cell>
          <u-cell title="预付款日期" :value="item.advancePaymentDate"></u-cell>
          <u-cell title="预付款说明" :value="item.remark"></u-cell>
        </u-cell-group>
      </view>
    </view>
  </view>
</template>
