<template>
  <div class="hello">
    <salaryHeader></salaryHeader>
    <div class="content">
      <form @submit.prevent>
        <div>
            <input @focus='contChange()' @input='textChange1($event)' value='0' type="text" placeholder=" 基本工资/月薪">
        </div>
        <div>
            <input  @focus='contChange()' @input='textChange2($event)'  value='0' type="text" placeholder=" 绩效工资/奖金">
        </div>
        <div>
            <input  @focus='contChange()' @input='textChange3($event)' value='0'  type="text"  placeholder=" 抽成">
        </div>
        <button @click="count()">开始计算</button>
      </form>
    </div>
    <div class="calc"  v-if="visible">
        <p style="text-align:left;margin-left:1.5rem;">工资总额 <span style="float:right;margin-right:1.5rem;">{{money}}</span></p>
        <hr style="width:90%;">
        <ul>
          <li v-for="(item,index) in arr">{{item.name}}<span style="float:right;">-{{item.wealth}}</span></li>
        </ul>
    </div>
  </div>
</template>

<script>
import salaryHeader from './SalaryHeader'
export default {
  name: 'hello',
  data () {

    return {
      visible:false,
      money:"0",
      money1:"0",
      money2:"0",
      money3:"0",
      arr:[],
    }
  },
  methods:{
    count(){
      this.arr=[];
      this.visible=true;
      this.money =this.money1*1+this.money2*1+this.money3*1;
      this.arr.push({name:'养老 8%',wealth:this.money1*0.08},
      {name:'医疗 2%',wealth:this.money1*0.02},
      {name:'失业 0.5%',wealth:this.money1*0.005},
      {name:'工伤 0%',wealth:this.money1*0.00},
      {name:'生育 0%',wealth:this.money1*0.00},
      {name:'公积金 8%',wealth:this.money1*0.08});
    },
    contChange(){
      this.visible=false;
    },
    textChange1(ev1){
      console.log(ev1.target.value);
      if(ev1.target.value.length >0){
        this.money1=ev1.target.value;
      }else{
        this.money1='0';
        this.visible=false;
      }
    },
    textChange2(ev2){
      if(ev2.target.value.length >0){
        this.money2=ev2.target.value;
      }else{
        this.money2='0';
        this.visible=false;
      }
    },
    textChange3(ev3){
      if(ev3.target.value.length >0){
        this.money3=ev3.target.value;
      }else{
        this.money3='0';
        this.visible=false;
      }
    },
  },
  components:{
    salaryHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width:25rem;
    margin:0 auto;
    border:1px solid #3498FD;
    height:50rem;
  }
  .content form input{
    width:22rem;
    height:2rem;
    padding:0 5px;
    margin-bottom:12px;
    border-radius:5px;
    border:1px solid #3498FD;
  }
  .calc{
    margin-top:30px;
  }
   button{
    width:22rem;
    height:3rem;
    margin-top:15px;
    background:#3498FD;
    border:none;
    color:#fff;
  }
  ul{
    list-style:none;
    text-align:left;
    padding: 0 25px;
  }
  ul li{
    margin-bottom:20px;
    font-weight:bold;
    color:#f23030;
  }
</style>
