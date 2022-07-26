<template>
  <v-app>
    <!-- 应用栏区域 -->
    <v-app-bar app>
      <!-- 应用栏容器 -->
        <v-container fluid>          
        <!-- 应用栏菜单选项 -->
          <v-tabs centered slider-size="5">
            <v-tab v-for="tab in tabMenus" :key="tab.id" :to="tab.href">{{tab.name}}</v-tab>
          </v-tabs>
        </v-container>
    </v-app-bar>
    <v-main>
      首页界面
    </v-main>
  </v-app>
</template>

<script>

  export default {
    name: 'Home',
    data: () => ({
      tabMenus: [],//应用栏菜单
    }),
    methods: {
      //获取应用栏菜单
      getAppBarMenus (){
        //请求服务器 -- 获取 --应用栏菜单
        this.tabMenus = [
          {id: 1, name: '首页', href: '/'},
          {id: 2, name: '博客', href: '/blog'},
          {id: 3, name: '考证', href: '/exam'},
          {id: 4, name: '影音', href: '/film'},
          {id: 5, name: '学堂', href: '/school'},
        ]
      }
    },
      created() {
        //获取应用栏菜单
        this.getAppBarMenus()
      }
  }
</script>

<style scoped>

</style>