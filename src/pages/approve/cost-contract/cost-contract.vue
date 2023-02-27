<script src="./cost-contract.component.js"></script>
<style src="./cost-contract.css" scoped></style>
<template>
  <view>
    <!-- tab切换 -->
    <u-sticky offset-top="4" class="aq-bg-color-light">
      <view class="aq-padding-horizontal-24">
        <u-subsection :list="tabsList" :current="current" @change="sectionChange" mode="subsection" activeColor="#118efd" inactiveColor="#0081ff" fontSize="14px" :bold="false"></u-subsection>
      </view>
    </u-sticky>
    <!-- 内容区域 -->
    <!-- 成本合同信息 -->
    <view class="details" v-show="current == 0">
      <!-- 成本合同审批基本信息 -->
      <view class="aq-bg-color-light aq-margin-top-8">
        <uni-section :type="'square'" title="成本合同审批基本信息">
          <u-tag slot="right" :text="details.status" plain plainFill></u-tag>
        </uni-section>
        <u-cell-group>
          <u-cell title="申请单编码" :value="details.approvalNo"></u-cell>
          <u-cell title="申请人" :value="details.createUserName"></u-cell>
          <u-cell title="申请人所在部门" :titleStyle="titleStyle" :value="details.structNames"></u-cell>
          <u-cell title="成本合同申请标题" :titleStyle="titleStyle" :value="details.applyAbstract"></u-cell>
          <u-cell title="当前审批人" :value="details.nextUserName"></u-cell>
        </u-cell-group>
      </view>
      <!-- 合同信息 -->
      <view v-if="details.contractInfo" class="aq-bg-color-light aq-margin-top-8">
        <view>
          <uni-section :type="'square'" title="合同信息"></uni-section>
        </view>
        <u-cell-group>
          <u-cell title="合同名称" :value="details.contractInfo.contractName"></u-cell>
          <u-cell title="合同类型" :value="details.contractInfo.contractCategory"></u-cell>
          <u-cell title="合同金额" :value="details.contractInfo.contractAmount"></u-cell>
          <u-cell title="合同生效日期" :value="details.contractInfo.contractStartDate"></u-cell>
          <u-cell title="合同结束日期" :value="details.contractInfo.contractEndDate"></u-cell>
        </u-cell-group>
      </view>
      <!-- 审批流 -->
      <approve-steps :steps="details.approvalStep"></approve-steps>
    </view>
    <!-- 其他信息 -->
    <view class="details" v-show="current == 1">
      <!-- 签署信息 -->
      <view v-if="details.contractInfo" class="aq-bg-color-light">
        <uni-section :type="'square'" title="签署信息"></uni-section>
        <u-cell-group>
          <u-cell title="我方地位" :value="details.contractInfo.ourPosition"></u-cell>
          <u-cell title="合作方地位" :value="details.contractInfo.cooperationPosition"></u-cell>
          <u-cell title="合作方名称" :titleStyle="titleStyle" :value="details.contractInfo.supplierName"></u-cell>
          <u-cell title="主要联系人" :value="details.contractInfo.supplierPrimaryContactName"></u-cell>
          <u-cell title="主要联系人电话">
            <u--text class="phone_style" slot="value" mode="phone" type="primary" :text="details.contractInfo.supplierPrimaryContactPhone" :call="true"></u--text>
          </u-cell>
        </u-cell-group>
      </view>
    </view>
    <!-- 审批按钮 -->
    <!-- v-show="approvalInfo.enumStatus == '10'" -->
    <!-- <audit-bar v-if="details.enumStatus==='10' && approvalDetails.approveNextUserIds && approvalDetails.approveNextUserIds.indexOf(userInfo.objectId) !== -1" :approval-id="approvalId" :business-id="approvalInfo.businessId" :module="approvalInfo.businessTable"></audit-bar> -->
  </view>
</template>
