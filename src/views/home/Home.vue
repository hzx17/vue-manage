<template>
  <el-row class="home">
   <el-col :span="8" style="margin-top:20px">
     <el-card shadow="hover">
       <div class="user">
         <img :src="userImg" alt="用户头像">
         <div class="userinfo">
           <p class="name">admin</p>
           <p class="'access">超级管理员</p>
         </div>
       </div>
       <div class="login-info">
         <p >上次登录事件:<span>2022-4-4</span></p>
         <p>上次登录地点:<span>成都</span></p>
       </div>
     </el-card>
     <el-card style="margin-top:20px;">
       <el-table :data="tableData">
        <el-table-column 
          v-for ="(item ,index) of tableLabel"
          :key="index"
          :prop="index"
          :label="item"
          >
        </el-table-column>
       </el-table>
     </el-card>
   </el-col>
   <el-col :span="16">
    <div class="num">
      <el-card v-for="(item,index) in countData" :key="index">
        <div class="icon" :style="`background-color:${item.color}`">
          <i :class="`el-icon-${item.icon}`" ></i>
        </div>
        <div class="detail">
          <p class="num">￥{{item.name}}</p>
          <p class="txt">{{item.value}}</p>
        </div>
      </el-card>
    </div>
   </el-col>
  </el-row>
</template>

<script>
  export default {
    name:'Home-Page',
    data () {
      return {
        userImg: require('@/assets/images/user.png'),
        tableData: [
          {
            name: 'oppo',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: 'vivo',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 700
          },
          {
            name: '苹果',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '魅族',
           todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          }
        ],
        tableLabel:{
          name:'商品',
          todayBuy:'今日购买',
          monthBuy:'本月购买',
          totalBuy:'总购买'
        },
        countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ]
      }
    }
  }
</script>

<style lang='less' scoped>
.user {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  &info {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
  }
}
.login-info {
  width: 300px;
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #666666;
      margin-left: 120px;
    }
  }
}

.num{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .el-card{
    width: 32%;
    margin-bottom: 20px ;
    display: flex;
    .icon{
       width: 80px;
       height: 80px;
       font-size: 30px;
       float: left;
       line-height: 80px;
       text-align: center;
    }
    .detail{
       float: right;
    }
  }
}
// .num {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   .el-card {
//     width: 32%;
//     margin-bottom: 20px;
//   }
//   .icon {
//     font-size: 30px;
//     width: 80px;
//     height: 80px;
//     text-align: center;
//     line-height: 80px;
//     color: #fff;
//   }
//   .detail {
//     margin-left: 15px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     .num {
//       font-size: 30px;
//       margin-bottom: 10px;
//     }
//     .txt {
//       font-size: 14px;
//       text-align: center;
//       color: #999999;
//     }
//   }
// }
// .graph {
//   margin-top: 20px;
//   display: flex;
//   justify-content: space-between;
//   .el-card {
//     width: 48%;
//   }
// }
</style>