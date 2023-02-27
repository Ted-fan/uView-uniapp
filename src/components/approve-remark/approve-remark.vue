<script src="./approve-remark.component.js"></script>
<style src="./approve-remark.css" scoped></style>
<template>
  <u-popup :show="showDialog" mode="center" safeAreaInsetTop closeable :customStyle="{width:'90vw',padding:'28px 20px 16px'}" @close="closeDialog">
    <view>
      <u--form labelPosition="left" :model="editForm" ref="dataForm" labelWidth="80px">
        <u-form-item label="审批意见" prop="remark">
          <u-textarea placeholder="请填写审批意见" confirmType="done" v-model="editForm.remark"></u-textarea>
        </u-form-item>
      </u--form>
      <view class="aq-margin-top-32 aq-vertical-middle">
        <u-button v-if="type === 'reject'" class="aq-margin-right-8" type="warning" @click="save('30')">确认驳回上一节点</u-button>
        <u-button v-if="type === 'reject'" type="error"  @click="save('40')">结束该条审批</u-button>
        <u-button v-if="type === 'pass'" type="success" @click="save('20')">确认通过</u-button>
      </view>
    </view>
  </u-popup>
</template>