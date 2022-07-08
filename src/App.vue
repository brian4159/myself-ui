<template>
  <div id="app">
    <!-- <ww-button type="primary" @click="visible = true">按钮</ww-button> -->
    <!-- <ww-input placeholder="请输入用户名" type="password" name="username" disabled></ww-input>
    <ww-input placeholder="请输入用户名" v-model="username" clearable></ww-input> -->
    <!-- <ww-input placeholder="请输入用户名" v-model="username" clearable ></ww-input>
    <ww-input placeholder="请输入用户名" v-model="username"  showPassword></ww-input> -->
    <!-- <ww-dialog width="60%" top="200px" :visible.sync="visible" >
       <template v-slot:footer>
         <ww-button @click="visible = false">确定</ww-button>
          <ww-button @click="visible = false">取消</ww-button>
      </template>
    </ww-dialog> -->
    <!-- <ww-switch v-model="active" active-color="red" inactive-color="green"
    name="username" 
    ></ww-switch> -->
<!-- 
    <ww-radio-group v-model="gender">
      <ww-radio label="1" >男</ww-radio>
      <ww-radio label="0" >女</ww-radio>
    </ww-radio-group> -->
    <!-- <ww-checkbox v-model="active">是否选中</ww-checkbox>
    <ww-checkbox-group v-model="hobby">
        <ww-checkbox label="抽烟"></ww-checkbox>
        <ww-checkbox label="喝酒"></ww-checkbox>
        <ww-checkbox label="烫头"></ww-checkbox>
    </ww-checkbox-group> -->
    <ww-form  :model="model" label-width="100px">
      <ww-form-item label="用户名">
        <ww-input placeholder="请输入用户名" v-model="model.username"></ww-input>
      </ww-form-item>
      <ww-form-item label="选择">
        <ww-switch v-model="model.active"></ww-switch>
      </ww-form-item>
    </ww-form>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
     
      active: false,
      hobby:[
        '抽烟','喝酒','烫头'
      ],
      model:{
        username:'',
        active: true
      }
    };
  },
};
</script>

<style lang="scss">
.row {
  margin-top: 20px;
  .ww-button {
    margin-right: 20px;
  }
}
::v-deep .ww-input {
  width: 180px;
}
</style>
