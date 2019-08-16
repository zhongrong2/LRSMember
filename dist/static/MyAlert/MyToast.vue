<template>
  <div id="MyToast" name="MyToast" v-if="ShowMyToast">
    <div class="MyToast">
      <img class="MyToast-logo" :src="logo" alt="">
      <div class="MyToast-title">{{title}}</div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "MyToast",
      data(){
        return{
          ShowMyToast:false,
          type:'',
          logo:'',
          title:'',
        }
      },
      watch:{
        type(val){
          if(val=='success'){
            this.logo = require('../../src/img/toast-success.png');
          }
          else if(val=='prompt'){
            this.logo = require('../../src/img/toast-prompt.png');
          }
          else if(val=='fail'){
            this.logo = require('../../src/img/toast-fail.png');
          }
          else if(val=='time'){
            this.logo = require('../../src/img/toast-time.png');
          }
        }
      },
    }
</script>

<style scoped>
  #MyToast{
    position: fixed;
    top: 40%;
    left: 50%;
    margin-left: -26.665%;
    margin-top: -1.20rem;
    width: 53.33%;
    height: 2.40rem;
    background-color: rgba(0,0,0,1);
    opacity: 0.5;
    border-radius: 8px;
    z-index: 9999;
  }
  .MyToast-logo{
    width: 1rem;
    height: 1rem;
    display: block;
    margin: 8% auto 0;
  }
  .MyToast-title{
    font-size: 0.32rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.32rem;
    margin-top: 12%;
  }
</style>
