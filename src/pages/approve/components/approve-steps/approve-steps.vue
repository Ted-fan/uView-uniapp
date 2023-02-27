<script src="./approve-steps.component.js"></script>
<style src="./approve-steps.css" scoped></style>
<template>
  <view>
    <!-- 审批流步骤 -->
    <view class="aq-bg-color-light aq-margin-top-8">
      <view>
        <uni-section :type="'square'" title="审批流"></uni-section>
      </view>
      <u-cell-group v-if="steps.length">
        <u-steps direction="column">
          <u-cell>
            <u-steps-item slot="title" v-for="(step, index) in steps" :key="index">
              <u-icon v-if="step.enumApprovalStatus === '10'" name="more-dot-fill" slot="icon" color="#fff" class="slot-icon_warning" size="16px"></u-icon>
              <u-icon v-if="step.enumApprovalStatus === '20'" name="checkmark" slot="icon" color="#fff" class="slot-icon_yes" size="16px"></u-icon>
              <u-icon v-if="step.enumApprovalStatus === '30'" name="close" lot="icon" color="#fff" class="slot-icon_reject" size="16px"></u-icon>
              <u-icon v-if="step.enumApprovalStatus === '40'" name="pause" slot="icon" color="#fff" class="slot-icon_warning" size="16px"></u-icon>
              <view slot="desc">
                <view class="aq-text-size-medium aq-vertical-space-between">
                  <text>{{ step.status }}</text>
                  <text>{{ step.datetime || '--'}}</text>
                </view>
                <view class="aq-text-color-info aq-margin-top-12">审批人：{{step.name}}</view>
                <view class="aq-text-color-info aq-margin-top-4">审批理由：{{step.remark}}</view>
              </view>
            </u-steps-item>
          </u-cell>
        </u-steps>
      </u-cell-group>
      <u-empty v-else mode="data"></u-empty>
    </view>
  </view>
</template>
