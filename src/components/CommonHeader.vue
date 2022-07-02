<template>
  <header class="header-container">
    <div class="left-content">
      <el-button plain icon="el-icon-menu" @click="handlerChangeCollapse" size="mini"></el-button>
      <h3 style="color:#fff">首页</h3>
    </div>
    <div class="right-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="user-img" :src="userImg" alt="头像">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
  export default {
    name:'Common-Header',
    data() {
      return {
        userImg: require('@/assets/images/user.png')
      }
    },
    methods: {
      handlerChangeCollapse () {
        this.$store.commit('changeCollapse')
      }
    },
  }
</script>

<style lang="less" scoped>
.header-container{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.left-content{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
}
.right-content{
      margin-right: 20px;
  .user-img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>