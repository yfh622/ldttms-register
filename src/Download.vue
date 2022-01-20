<template>
  <div>
    <div class="loadbox">
      <img src="./assets/ldlogo.png" class="el-image__inner">
      <h3>Crypto EX</h3>
      <!-- <h2>无惧涨跌，穿越牛熊</h2> -->
      <a href="#" @click="download" class="downbtn" >点击下载</a>
    </div>
  </div>
</template>

<script>
import {down,get} from "@/axios/index"

export default {
 data() {
    return {
     };
  },
// wss://stream.binance.com:9443
  components: {  },
  computed: {},
  methods: {
   download(){
    // down('http://47.57.102.137:5138/v1/upgrade/latestVersion',{}).then(res=>{
    down('http://www.cryptoglobal.cc:8088/v1/upgrade/latestVersion',{}).then(res=>{
          if(res.code == 200){
            console.log(res)
            window.location.href=res.data.apkUrl
          }else{

            this.$message.error(res.msg);
          }
      })
   }
  },
  mounted() {
   
  },
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.loadbox{
  padding-top: 14vh;
  margin: 0px auto;
  text-align: center;
}
.loadbox img{
  width: 25%;
  height: 25%;
}
.loadbox h3{
  margin-top: 2.28vh;
    color: #ffc34a;
    font-size: 18px;
}
.loadbox h2{
  margin-top: 3.47vh;
    color: #ffc34a;
    font-size: 24px;
}
.downbtn{
  display: inline-block;
  width: 90%;
  margin-top: 15vh;
    color: #fff;
    background-color: #ffc34a;
    padding: 10px 0;
    cursor: none;
    border-radius: 0;
    border: none;
    font-size: 16px;
}
</style>
