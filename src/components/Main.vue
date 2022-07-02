<template>
  <el-container style="height:100vh">
    <el-aside width="auto">
      <CommonAside/>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components//CommonHeader.vue'
  export default {
    name: 'Main-Page',
    components:{
      CommonAside,
      CommonHeader
    }
  }
</script>

<style lang='less' scoped>
.el-container{
  height: 100%;
}
.el-header{
  background-color: #333;
}
.el-main{
  padding-top: 0;
}
</style>