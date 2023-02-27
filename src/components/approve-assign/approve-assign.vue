<script src="./approve-assign.component.js"></script>
<style src="./approve-assign.css" scoped></style>
<template>
  <u-popup :show="showDialog" mode="center" safeAreaInsetTop closeable :customStyle="{width:'90vw',padding:'28px 20px 16px'}" @close="closeDialog">
    <view>
      <u--form labelPosition="left" :model="editForm" ref="dataForm" labelWidth="80px">
        <u-form-item label="指派人">
          <!-- <u--input v-model="editForm.userObj" disabled disabledColor="#ffffff" placeholder="请选择指派人" border="none"></u--input>
          <u-icon slot="right" name="arrow-right"></u-icon> -->
          <uni-data-select v-model="editForm.userObj" :localdata="users" :options="options"></uni-data-select>
        </u-form-item>
        <u-form-item label="联系方式">
          <text>{{ editForm.userObj.phone }}</text>
        </u-form-item>
        <u-form-item label="所在部门">
          <text>{{ editForm.userObj.structName }}</text>
        </u-form-item>
      </u--form>
      <view class="aq-padding-horizontal-64 aq-margin-top-32">
        <u-button type="primary" text="确认指派" @click="save"></u-button>
      </view>
      <u-picker :show="showUserPicker" :columns="users" keyName="name" @confirm="confirmAssignUser"></u-picker>
    </view>
  </u-popup>
</template>