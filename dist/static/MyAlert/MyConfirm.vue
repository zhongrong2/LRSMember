<template>
  <div id="MyConfirm" name="MyConfirm" v-if="ShowMyConfirm">
    <div class="MyConfirmBg"></div>
    <div class="MyConfirm">
      <img class="MyConfirm-logo" :src="logo" alt="">
      <div class="MyConfirm-title">{{title}}</div>
      <div class="MyConfirm-btns">
        <div class="MyConfirm-sure btn" @click="BtnLeft">{{btnleft}}</div>
        <div class="MyConfirm-cancel btn" @click="BtnRight">{{btnright}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "MyConfirm",
      data(){
        return{
          ShowMyConfirm:false,
          type:'',
          logo:'',
          title:'',
          btnleft:'',
          btnright:'',
        }
      },
      watch:{
        type(val){
          if(val=='success'){
            this.logo = require('../../src/img/alert-success.png');
          }
          else if(val=='prompt'){
            this.logo = require('../../src/img/alert-prompt.png');
          }
          else if(val=='fail'){
            this.logo = require('../../src/img/alert-fail.png');
          }
          else if(val=='flower'){
            this.logo = require('../../src/img/alert-flower.png');
          }
        }
      },
      methods:{
        BtnLeft(){
          this.ShowMyConfirm = false;
        },
        BtnRight(){
          this.ShowMyConfirm = false;
        },
      }
    }
</script>

<style scoped>
  #MyConfirm{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 9999;
  }
  .MyConfirmBg{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,1);
    opacity: 0.5;
  }
  .MyConfirm{
    position: fixed;
    top: 40%;
    left: 50%;
    margin-left: -32%;
    margin-top: -2.80rem;
    width: 64%;
    height: 5.60rem;
    background-image: url("../../src/img/alerbg.png");
    -webkit-background-image: url("../../src/img/alerbg.png");
    -moz-background-image: url("../../src/img/alerbg.png");
    -o-background-image: url("../../src/img/alerbg.png");
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    -o-background-size: 100% 100%;
  }
  .MyConfirm-logo{
    width: 1rem;
    height: 1rem;
    display: block;
    margin: 0.5rem auto 0;
  }
  .MyConfirm-title{
    width: 74.58%;
    font-size: 0.30rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color: #666666;
    text-align: left;
    line-height: 0.5rem;
    display: block;
    margin: 1.06rem auto 0;
  }
  .MyConfirm-btns{
    width: 79.16%;
    position: absolute;
    bottom: 5.36%;
    margin: 0 10.42%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .btn{
    width: 42.1%;
    height: 0.7rem;
    border-radius: 0.35rem;
    font-size:0.3rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    text-align: center;
    line-height: 0.66rem;
  }
  .MyConfirm-sure{
    border:2px solid #399EFA;
    color: #399EFA;
  }
  .MyConfirm-cancel{
    background:#399EFA;
    color: #FFFFFF;
  }
</style>
