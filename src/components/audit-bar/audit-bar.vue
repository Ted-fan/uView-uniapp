<script src="./audit-bar.component.js"></script>
<style src="./audit-bar.css" scoped></style>
<template>
  <view>
    <u-gap height="120" bgColor=""></u-gap>
    <view class="aq-footer">
      <u-row class="aq-height-full">
        <u-col span="4" class="aq-bg-color-primary aq-height-full" @click="openAssignPopup">
          <u--text align="center" size="20" color="#fff" text="指派"></u--text>
        </u-col>
        <u-col span="4" class="aq-bg-color-danger aq-height-full" @click="openAuditPopup('reject')">
          <u--text align="center" size="20" color="#fff" text="驳回"></u--text>
        </u-col>
        <u-col span="4" class="aq-bg-color-success aq-height-full" @click="openAuditPopup('pass')">
          <u--text align="center" size="20" color="#fff" text="通过"></u--text>
        </u-col>
      </u-row>
      <approve-assign v-if="showAssignPopup" :approval-id="approvalId" @close="closeAssignPopup"></approve-assign>
      <approve-remark v-if="showRemarkPopup" :approval-id="approvalId" :type="auditType" :business-id="businessId" :detail-ids="[]"  @close="closeAuditPopup"></approve-remark>
    </view>
  </view>

</template>