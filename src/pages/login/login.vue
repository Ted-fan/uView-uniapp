<script src="./login.component.js"></script>
<template>
  <view class="aq-height-full-screen aq-bg-color-light">
    <view>
      <u-image src="/static/images/banner/splash.png" width="100%" height="300px"></u-image>
    </view>
    <view class="aq-padding-horizontal-32">
      <u--form labelPosition="left" :model="editForm" ref="form">
        <u-form-item label="用户名" prop="username" borderBottom labelWidth="80">
          <u--input v-model="editForm.username" border="none"></u--input>
        </u-form-item>
        <u-form-item class="aq-margin-top-60" label="密码" prop="password" borderBottom labelWidth="80">
          <u--input v-model="editForm.password" border="none" type="password"></u--input>
        </u-form-item>
      </u--form>
      <view class="aq-padding-horizontal-32">
        <u-button class="aq-margin-top-64" type="primary" shape="circle" text="登录" @click="userLogin"></u-button>
      </view>
    </view>
  </view>
</template>