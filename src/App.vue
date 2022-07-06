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
    <ww-radio label="1" v-model="gender">男</ww-radio>
    <ww-radio label="0" v-model="gender">女</ww-radio>
  </div>
</template>

<script>



export default {
 
  data(){
    return{
      visible:false,
      username:'zs',
      active:false,
      gender:'1'
    }
  },
  
  }
  


</script>

<style lang="scss">
    .row{
      margin-top:20px;
      .ww-button{
        margin-right: 20px;
      }
    }
    ::v-deep .ww-input{
      width: 180px;
    }
</style>
