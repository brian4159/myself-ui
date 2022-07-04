<template>
  <div id="app">
    <!-- <div class="row">
    <ww-button @click="fn" type="primary" >按钮</ww-button>
    <ww-button type="success" >按钮</ww-button>
    <ww-button type="info" >按钮</ww-button>
    <ww-button type="warning" >按钮</ww-button>
    <ww-button type="danger" >按钮</ww-button>
    </div>
    <div class="row">
    <ww-button plain type="primary" >按钮</ww-button>
    <ww-button plain type="success" >按钮</ww-button>
    <ww-button plain type="info" >按钮</ww-button>
    <ww-button plain type="warning" >按钮</ww-button>
    <ww-button plain type="danger" >按钮</ww-button>
    </div>
    <div class="row">
    <ww-button round plain type="primary" >按钮</ww-button>
    <ww-button round plain type="success" >按钮</ww-button>
    <ww-button round plain type="info" >按钮</ww-button>
    <ww-button round plain type="warning" >按钮</ww-button>
    <ww-button round plain type="danger" >按钮</ww-button>
    </div>
    <div class="row">
    <ww-button disabled  circle round plain type="primary" >按</ww-button>
    <ww-button disabled  circle round plain type="success" >按</ww-button>
    <ww-button  disabled circle round plain type="info" >按</ww-button>
    <ww-button disabled  circle round plain type="warning" >按</ww-button>
    <ww-button  disabled circle round plain type="danger" >按</ww-button>
    </div>
    <div class="row">
    <ww-button circle round plain icon="ww-icon-delete" type="primary" ></ww-button>
    <ww-button circle round plain icon="ww-icon-delete" type="success" ></ww-button>
    <ww-button circle round plain icon="ww-icon-delete" type="info" ></ww-button>
    <ww-button circle round plain icon="ww-icon-delete" type="warning" ></ww-button>
    <ww-button circle round plain icon="ww-icon -delete" type="danger" ></ww-button>
    </div> -->
    <ww-button type="primary" @click="visible = true">按钮</ww-button>
    <ww-dialog width="60%" top="200px" :visible="visible" @close="close">
      
      <template v-slot:footer>
         <ww-button @click="visible = false">确定</ww-button>
          <ww-button @click="visible = false">取消</ww-button>
      </template>
    </ww-dialog>

  </div>
</template>

<script>


export default {
  data(){
    return{
      visible:false
    }
  },
  methods:{
    close(value){
   this.visible=value
  },
  
  }
}
</script>

<style lang="scss" scoped>
    .row{
      margin-top:20px;
      .ww-button{
        margin-right: 20px;
      }
    }
</style>
