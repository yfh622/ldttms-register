<template>
  <div class="back">
      <!-- <div class="one">
          <div class="allearth">
              <img class="earth" src="./assets/earth.png" alt="">
              <img class="earth1" src="./assets/earth1.png" alt="">
              <img class="earth2" src="./assets/earth2.png" alt="">
          </div>
          <div class="onetext">
              <p>给你无限可能与希望 <br>FUTURE NET X </p>
          </div>
          <div class="bownBtn">
              <p @click="downfun">立即下载</p>
              <p @click="registfun">立即注册</p>
          </div>
      </div>
      <div class="one">
          <div>
                <img class="group15" src="./assets/group15.png" alt="">

          </div>
      </div> -->

      <div class="newone">
          <div class="backone">
              <div class="phonetxt">
                  <img class="ldlogo" src="./assets/logotxt.png" alt="">
              </div>
              <img class="phone1" src="./assets/phone1.png" alt="">
              <img class="phone2" src="./assets/phone2.png" alt="">
          </div>
          <div class="allimg">
               <img src="./assets/lhg_Mobile3.png" alt="">
               <img src="./assets/lhg_Mobile4.png" alt="">
               <img src="./assets/lhg_Mobile5.png" alt="">
               <img src="./assets/lhg_Mobile6.png" alt="">
               <img src="./assets/lhg_Mobile7.png" alt="">
               <img class="imgend" src="./assets/2.png" alt="">
               <div class="allbtn">
                    <div class="bownBtn">
                        <p @click="downfun">立即下载</p>
                        <p @click="registfun">立即注册</p>
                    </div>
               </div>
          </div>
      </div>
  </div>
</template>

<script>
import {post,get} from "@/axios/index"

export default {
  data() {
    return {
      flag: false,
     
    };
  },
  components: {},
  computed: {},
  methods: {
  registfun(){
       this.$router.push({ name: "Home", params: {} });
  },
  downfun(){
       this.$router.push({ name: "Download", params: {} });
  }
   
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.allbtn{
    width: 100%;
    position: absolute;
    bottom: 0.8rem;
}
.backone{
    padding: 1rem 0 7rem 0;
}
.ldlogo{
    display: block;
    width: 40%;
    margin: 0 auto;
}
.phonetxt{
    margin: 0.2rem 0 2rem 0;
}
.allimg img{
    display: block;
    width: 100%;
}
.allimg {
    position: relative;
}
.allimg img.imgend{
    /* position: absolute; */
    /* bottom: -50%; */
}
.backone{
    width: 100%;
    /* height: 100%; */
    background: url('./assets/back.png')100% 100%;
    /* background-size: 100% 100%; */
    position: relative;
}
.backone>img{
    width: 40%;
    /* height: 1.5rem; */
    display: block;

    position: absolute;
}
.backone img.phone1{
   position: absolute;
   right: 2.9rem;
   top: 3.5rem;
}
.backone img.phone2{
   position: absolute;
    right: 1.8rem;
   top: 4.7rem;
}






.group15{
    width: 80%;
    display: block;
    margin: 0.8rem auto;
}
.bownBtn{
    width: 80%;
    color: #fff;
    display: flex;
    justify-content: space-around;
    margin: 0rem auto;
    z-index: 100;
    /* position: absolute; */
}
.bownBtn p{
    padding: 0.2rem 0.6rem;
     font-size: 0.3rem;
   background: #5793f1;
   border-radius: 1rem;
}
.onetext{
    width: 75%;
    color: #fff;
    font-size: 0.4rem;
    text-align: center;
    font-weight: bold;
    margin: 1rem auto;
    line-height: 1.9;
}
.one{
    width: 100%;
    height: 100%;
    background: url('./assets/section1.jpg')100% 100%;
    background-size: 100% 100%;
    /* position: absolute;
    top: 0 ;
    bottom: 0;
    left: 0; */
    padding: 1.6rem 0;
    box-sizing: border-box;
}
.allearth{
    width: 70%;
    margin: 0 auto;
    position: relative;
}
.allearth img{
    /* width: 100%; */
}
.earth{
    width: 75%;
     margin: 0 auto;
     text-align: center;
     display: block;
}
.earth1{
    width: 100%;
    position: absolute;
    top: 30%;
    left: 0;
}
.earth2{
    width: 100%;
    position: absolute;
    top: 30%;
    left: 0;

}
.ipt >>> .el-input__inner{
  border: none;
  padding: 0;
  background: #fff;
}

</style>