<template>
  <div class="home">
    <!-- <el-button @click="btn">Download</el-button> -->
      <div class="title">注册账号</div>
    <div class="form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
          <!-- <el-form-item label=" " prop='subaccountId' label-width="60px"> -->
            <el-form-item label="" prop="phoneNumber">
            <div class="phone formitem">
              <span>+86 <i style="margin:0 4px 0 4px" class="el-icon-arrow-down"></i></span>
              <el-input class="ipt" placeholder="请输入手机号" style="width:70%" type="text" v-model="ruleForm.phoneNumber" autocomplete="off"></el-input>
            </div>
        </el-form-item>
        <!-- </el-form-item> -->
         <el-form-item label="" prop="verifyCode">
        <div>
          <div class="formitem yzm">
            <el-input class="ipt" placeholder="验证码" style="width:78%" type="text" v-model="ruleForm.verifyCode" autocomplete="off"></el-input>
          </div>
            <div :class="disablecode==true? 'yzmbtn':'discss'"  @click="sendcode">{{sendtxt}}</div>
        </div>
         </el-form-item>
          <el-form-item label="" prop="password">
         <div  class="formitem">
            <el-input class="ipt" placeholder="设置密码"  :type="flag?'text':'password'" v-model="ruleForm.password" autocomplete="off">
              <i slot="suffix" :class="[flag?'el-icon-minus':'el-icon-view']" style="margin-top:8px;font-size:18px;" autocomplete="auto" @click="flag=!flag" />
            </el-input>
          </div>
          <!-- <div class="passText">密码必须同时包含字母和数字，长度为6-20位。</div> -->
          </el-form-item>
           <el-form-item label="" prop="passwordAgain">
         <div  class="formitem">
            <el-input class="ipt" placeholder="再次输入密码" :type="flagAgain?'text':'password'" v-model="ruleForm.passwordAgain" autocomplete="off">
              <i slot="suffix" :class="[flagAgain?'el-icon-minus':'el-icon-view']" style="margin-top:8px;font-size:18px;" autocomplete="auto" @click="flagAgain=!flagAgain" />
            </el-input>
          </div>
          </el-form-item>
           <el-form-item label="" prop="invitationCode">
         <div  class="formitem">
            <el-input class="ipt" placeholder="请输入邀请码" :disabled="iptdis" type="'text'" v-model="ruleForm.invitationCode" autocomplete="off">
            </el-input>
          </div>
          </el-form-item>
           <el-form-item label="" prop="txt">
              <div  class="checkboxitem">
                <el-checkbox-group v-model="ruleForm.txt">
                  <el-checkbox label="" name="type">
                    <span style="font-size: 11px; color:#a4a6a9;">注册即代表你同意<span style="color:#ffb629">《隐私条款》</span>和<span style="color:#ffb629">《免责说明》</span></span>
                  </el-checkbox>
                </el-checkbox-group>
              </div>
          </el-form-item>
          <el-form-item>
              <el-button :loading="btnloading" type="primary" @click="submitForm('ruleForm')" class="button"> 立即注册 </el-button>
          </el-form-item>
          <!-- <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          <el-input v-model.number="ruleForm.age"></el-input>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button> -->
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form>
    </div>
          <div class="footer">已注册Crypto EX账号，<span @click="loadfun">请直接下载</span></div>
  </div>
</template>

<script>
import {post,get} from "@/axios/index"

export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (value=="") {
        return callback(new Error("手机号不能为空"));
      }else{
        let reg = /^1\d{10}$/
         if (reg.test(value)) {
          callback();
        }else{
          callback(new Error("请输入正确的手机号"));
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        let reg = new RegExp(/(?![\d]+$)(?![a-zA-Z]+$).{6,20}$/);
        if (reg.test(this.ruleForm.password)) {
           callback();
        }else{
          callback(new Error("密码必须同时包含字母和数字，长度为6-20位"));
        }
        callback();
      }
    };
    return {
      iptdis:true,
      btnloading:false,
      flag: false,
      sendtxt: '发送验证码',
      disablecode: true,
      flagAgain: false,
      ruleForm: {
        phoneNumber: "",
        verifyCode: "",
        password: "",
        passwordAgain:'',
        invitationCode:'',
        txt:[],
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        // checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phoneNumber: [{ validator: checkAge, trigger: "blur" }],
        verifyCode: [
            { required: true, message: '请填写验证码', trigger: 'blur' }
          ],
        passwordAgain: [
            { required: true, message: '请填写密码', trigger: 'blur' }
          ],
        invitationCode: [
            { required: true, message: '请填写邀请码', trigger: 'blur' }
          ],
          txt: [
            { type: 'array', required: true, message: '请勾选条约', trigger: 'change' }
          ],
      }
    };
  },
  components: {},
  computed: {},
  methods: {
    sendcode(){
      let num = 60
      if(this.disablecode==true){
         this.disablecode=false
        post('v1/login/sendRegisterCode?phoneNumber='+this.ruleForm.phoneNumber,{phoneNumber:this.ruleForm.phoneNumber}).then(res=>{
          if(res.code == '200'){
              console.log('000')
                this.disablecode=false
                this.timer = setInterval(() => { 
                  num--
                  if(num <= 0){
                   this.sendtxt = '重新发送'
                   this.disablecode=true
                   console.log('重新发送')
                   clearInterval(this.timer);
                   return
                  }else{
                    this.sendtxt = num + '后重新发送'
                    this.disablecode=false
                    // clearInterval(this.timer);
                  }

                  }, 1000);
              }else{
                this.disablecode=true
                this.$message.error(res.msg);
              }
          })
      }else{
        this.disablecode = false
      }
    },
    loadfun(){
      this.$router.push({ name: "Download", params: {} });

    },
    submitForm(formName) {
          console.log(formName);

      this.$refs[formName].validate(valid => {
          console.log(valid);
        if (valid) {
          this.btnloading=true
          // alert("submit!");
            post('v1/login/register?phoneNumber='+this.ruleForm.phoneNumber
            +'&verifyCode='+this.ruleForm.verifyCode
            +'&password='+this.ruleForm.password
            +'&invitationCode='+this.ruleForm.invitationCode
            +'&passwordAgain='+this.ruleForm.passwordAgain
            ,{phoneNumber:this.ruleForm.phoneNumber}).then(res=>{
            if(res.code == '200'){
              this.btnloading=false
              this.$router.push({ name: "Download", params: {} });
            }else{
              this.btnloading=false
              this.$message.error(res.msg);
            }
        })
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    btn() {
      this.$router.push({ name: "Download", params: {} });
    }
  },
  mounted() {
    if(window.location.href.split('invite_code')[1]){
    let str = window.location.href.split('invite_code')[1].split('#')[0]
        this.ruleForm.invitationCode = str.substring(1)
        console.log(this.ruleForm.invitationCode)
        console.log(str)
        console.log(str.substring(1))
        if(this.ruleForm.invitationCode.length>1){
          this.iptdis = true
        }else{
          this.iptdis = false

        }
    }else{
          this.iptdis = false

    }
   
  }
};
</script>

<style scoped>
.checkboxitem >>>.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
background-color:#ffb629;
border-color: #ffb629;
}
.checkboxitem >>>.el-checkbox__input.is-checked + .el-checkbox__label {
color: #ffb629;
}
.checkboxitem >>>.el-checkbox.is-bordered.is-checked{
border-color: #ffb629;
}
.checkboxitem >>>.el-checkbox__input.is-focus .el-checkbox__inner{
border-color: #ffb629;
}
.footer {
    position: absolute;
    text-align: center;
    color: #666;
    font-size: .9em;
    width: 100%;
    bottom: 4vh;
}
.footer span{
    color: #ffb629;
}
.button{
  width: 100%;
    line-height: 1.5em;
    font-size: 1em;
    color: #fff;
    background-color: #ffb629;
    text-align: center;
    padding: 9px 0;
    margin-top: 45px;
    border: none;
}
.passText {
    color: #999;
    font-size: 10px;
}
.yzmbtn{
    display: inline-block;
    width: 25%;
    color: #ffb629;
    /* font-size: .85em; */
    border: 2px solid #ffb629;
    padding: 2.5px 10px;
    margin-left: 2.48vw;
    text-align: center;
    border-radius: 1px;
}
.discss{
  display: inline-block;
    width: 25%;
    /* font-size: .85em; */
    border: 2px solid #fadca2;
    padding: 2.5px 10px;
    margin-left: 2.48vw;
    text-align: center;
    border-radius: 1px;
  color: #fadca2;
}
.yzm{
  width: 60%;
  display: inline-block;
}
.ipt >>> .el-input__inner{
  border: none;
  padding: 0;
  background: #fff;
}
.formitem{
  padding-bottom: 4px;
  border-bottom: 1px solid #f2f2f2;
    /* margin-top: 4vh; */
}
.phone {
    font-size: 1.2em;
    color: #666;
}
.form{
  padding: 0 5.7vw;

}
.form >>> .el-form-item__content{
  padding: 0 ;
  margin: 0!important;

}
.title {
  padding: 0 5.7vw;
    color: #666;
    font-size: 2em;
    margin-bottom: 8.15vh;
    margin-top: 4.5vh;
}
</style>