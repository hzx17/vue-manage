<template>
  <div class="common-aside">
    <el-menu 
    default-active="/" 
    class="el-menu-vertical-demo "
    background-color="#545c64"
    text-color='#fff'
    active-text-color="#ffd04b"
    @open="handleOpen" 
    @close="handleClose" 
    :collapse="isCollapse">
      <h3>{{isCollapse? '后台':'通用管理系统'}}</h3>
      <el-menu-item v-for="item in noChildren" 
      :key="item.path" :index="item.path"
      @click="clickMenu(item)"
      >
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :key="item.id" :index="item.id">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="item  in item.children" :key="item.path" >
          <el-menu-item :index="item.path">{{item.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name:'Common-Aside',
    data () {
      return {
        menu :[
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          id:'001',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      /* 点击菜单栏事件 */
      clickMenu (item) {
        this.$router.push({
          path:item.name
        })
      }
    },
    computed : {
      noChildren () {
        return this.menu.filter(item => !item.children)
      },
      hasChildren () {
        return this.menu.filter(item => item.children)
      },
      // vuex中的数据，是否折叠
      isCollapse () {
        return this.$store.state.isCollapse
      }
    }
  }
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
.el-menu {
  height: 100vh;
  border:none;
  h3{
    line-height: #fff;
    color:#fff;
    text-align: center;
    line-height: 68px;
  }
}
</style>