<template>
  <div class="pkey-keyboard">
    <section class="pkey-keyscontain">
      <ul v-if="txtboardshow">
        <li v-for="(item,index) in cartxt">
          <span v-show="index==cartxt.length-1" @click="shownum" class="showNum">ABC</span>
          <label v-for="(items,indexi) in item" @click="txtclick(items,indexi,item.length)">{{items}}</label>
          <span v-show="index==cartxt.length-1" @click="clear" class="clear">
            清空
          </span>
        </li>
      </ul>
      <ul v-if="numboardshow" class="numboardshow">
        <li v-for="(item,index) in numtxt">
          <span v-show="index==cartxt.length-1" @click="plateVal=plateVal.substr(0, plateVal.length-1);if(plateVal.length == 0){txtboardshow=true,numboardshow=false}" class="del">删除</span>
          <label v-for="(items,indexi) in item" @click="numclick(items,indexi,item.length)">{{items}}</label>
          <span v-show="index==cartxt.length-1" @click="Sure" class="sure">确定</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
    export default {
      name: "CarNumKeyboar",
      props:['plate','ShowCarKey'],
      data(){
          return{
            plateVal:this.plate,
            ShowKey:this.ShowCarKey,
            txtboardshow:true,
            numboardshow:false,
            cartxt:[
              ['京','津','渝','沪','冀','晋','辽','吉','黑','苏'],
              ['浙','皖','闽','赣','鲁','豫','鄂','湘','粤','琼'],
              ['川','贵','云','陕','甘','青','蒙','桂','宁','新'],
              ['藏','使','领','警','学','港','澳']
            ],
            numtxt:[
              ['1','2','3','4','5','6','7','8','9','0'],
              ['Q','W','E','R','T','Y','U','I','O','P'],
              ['A','S','D','F','G','H','J','K','L'],
              ['Z','X','C','V','B','N','M']
            ],
          }
      },
      watch:{
        //监听车牌号值
        plateVal(){
          this.$emit('update',this.plateVal);
        },
        //监听展示键盘
        ShowKey(){
          this.$emit('Show',this.ShowKey);
        },
      },
      methods:{
        // 选择省会
        txtclick : function(txt,indexi,size){
          this.plateVal = txt;
          console.log(txt);
          this.txtboardshow=false;
          this.numboardshow=true;
        },
        //选择数字/字母
        numclick : function(num,indexi,size){
          console.log(this.plateVal.length);
          if(this.plateVal.length>7){
            return
          }
          if (this.plateVal.length == 1){
            if(!isNaN(num)){
              this.$MyToast({
                type:'prompt',
                title:'车牌号第二位为字母',
              });
              return
            }
          }
          this.plateVal+=num;
        },
        // 数字键盘
        shownum:function(){
          // console.log(this.plateVal);
          if (this.plateVal.length == 0){
            this.$MyToast({
              type:'prompt',
              title:'请选择车牌号所属地区',
            });
            this.txtboardshow=true;
            this.numboardshow=false;
          } else{
            this.txtboardshow=false;
            this.numboardshow=true;
          }
        },
        //清空
        clear(){
          // console.log(this.plateVal);
          this.plateVal = '';
          this.$emit('update',this.plateVal);
        },
        //确定
        Sure : function(){
          if(this.plateVal==''){
            this.$MyToast({
              type:'prompt',
              title:'请输入车牌号',
            });
            return;
          }
          //判断车牌号格式是否正确
          var creg=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;//普通车牌号
          var xreg=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;//新能源车牌号
          if(this.plateVal.length == 7){
            if(!creg.test(this.plateVal)){
              this.$MyToast({
                type:'prompt',
                title:'车牌号格式错误',
              });
              this.plateVal = '';
              this.txtboardshow = true;
              this.numboardshow = false;
              return false;
            };
          }
          if (this.plateVal.length == 8){
            if(!xreg.test(this.plateVal)){
              this.$MyToast({
                type:'prompt',
                title:'车牌号格式错误',
              });
              this.plateVal = '';
              this.txtboardshow = true;
              this.numboardshow = false;
              return false;
            };
          }
          this.ShowKey = false;
          this.txtboardshow = true;
          this.numboardshow = false;
          return
        },
      },
    }
</script>

<style scoped>
  /*车牌号*/
  .pkey-win{
    width: 80%;
    height: 3rem;
    background-color: white;
    z-index: 50;
    position: fixed;
    left: 10%;
    top: 2rem;
    float: left;
    border-radius: 0.1rem;
    display: none;
  }
  .pkey-header{
    width: 100%;
    height: 0.7rem;
    float: left;
    font-size: 0.36rem;
    text-align: center;
    line-height: 0.7rem;
    background-color: #F9F9F9;
    border-radius: 0.1rem;
    position: relative;
  }
  .pkey-header img{
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    right: 0.2rem;
    top: 0.1rem;
    float: right;
  }
  .pkey-win-body{
    width: 70%;
    font-size: 0.38rem;
    color: #0a0a0a;
    text-align: center;
    line-height: 1rem;
  }
  .pkey-keyboard{
    width: 100%;
    /*height: 4rem;*/
    background-color: #E6E6E6;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    padding-bottom: 0.4rem;
  }
  .pkey-header2{
    width: 100%;
    padding: 0.3rem 0.3rem;
    font-size: 0.32rem;
    color: #999999;
    float: left;
    background-color: #f9f9f9;
  }
  .pkey-chacelbtn{
    float: left;
  }
  .pkey-okbtn{
    float: right;
    color: #666666;
  }
  .pkey-keyscontain{
    width: 100%;
    float: left;
  }
  .pkey-keyscontain ul{
    width: 100%;
    float: left;
  }
  .pkey-keyscontain ul li{
    width: 100%;
    float: left;
  }
  .pkey-keyscontain span{
    width: 13.5%;
    height: 0.94rem;
    float: left;
    font-size: 0.34rem;
    margin: 1.5% 0.665%;
    background-color: #FFFFFF;
    border-radius: 0.1rem;
    text-align: center;
    line-height: 0.94rem;
  }
  .pkey-keyscontain label{
    width: 8.67%;
    height: 0.94rem;
    float: left;
    font-size: 0.34rem;
    font-weight: 500;
    margin: 1.5% 0.665%;
    background-color: #FFFFFF;
    border-radius: 0.1rem;
    text-align: center;
    line-height: 0.94rem;
  }
  .pkey-keyscontain span img{
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    float: left;
    margin: 0.1rem 0.24rem;
  }
  .numboardshow li:nth-child(3){
    padding: 0 0.38rem;
  }
  .numboardshow li:nth-child(3) label{
    width: 9.76%;
  }
  .showNum,.del{
    color: #F25643;
  }
  .clear,.sure{
    color: #3296FA;
  }
</style>
