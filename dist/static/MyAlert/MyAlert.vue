<template>
  <div id="MyAlert" name="MyAlert" v-if="ShowMyAlert">
    <div class="MyAlertBg"></div>
    <div class="MyAlert">
      <img class="MyAlert-logo" :src="logo" alt="">
      <div class="MyAlert-title">{{title}}</div>
      <div class="MyAlert-btns">
        <div class="MyAlert-btn" @click="Btn">{{btntitle}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "MyAlert",
      data(){
        return{
          ShowMyAlert:false,
          type:'',
          logo:'',
          title:'',
          btntitle:'',
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
        Btn(){
          this.ShowMyAlert = false;
        },
      }
    }
</script>

<style scoped>
  #MyAlert{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 9999;
  }
  .MyAlertBg{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,1);
    opacity: 0.5;
  }
  .MyAlert{
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
  .MyAlert-logo{
    width: 1rem;
    height: 1rem;
    display: block;
    margin: 0.5rem auto 0;
  }
  .MyAlert-title{
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
  .MyAlert-btns{
    width: 100%;
    position: absolute;
    bottom: 5.36%;
  }
  .MyAlert-btn{
    width: 45.83%;
    height: 0.7rem;
    background:#399EFA;
    border-radius: 0.35rem;
    font-size:0.3rem;
    color: #FFFFFF;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    text-align: center;
    line-height: 0.66rem;
    display: block;
    margin: 0 auto;
  }
</style>
