<template>
  <div id="app">
    <!-- <ww-button type="primary" @click="visible = true">按钮</ww-button> -->
    <ww-input placeholder="请输入用户名" type="password" name="username" disabled></ww-input>
    <ww-input placeholder="请输入用户名" v-model="dd"></ww-input>
    <ww-dialog width="60%" top="200px" :visible.sync="visible" >
       <template v-slot:footer>
         <ww-button @click="visible = false">确定</ww-button>
          <ww-button @click="visible = false">取消</ww-button>
      </template>
    </ww-dialog>

  </div>
</template>

<script>

import Demo from "./demo/Demo.vue"
export default {
  components:{
    Demo
  },
  data(){
    return{
      visible:false,
      dd:123
    }
  }
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
