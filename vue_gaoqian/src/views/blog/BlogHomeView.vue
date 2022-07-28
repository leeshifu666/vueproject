<template>
  <v-app>
    <!-- 应用栏区域 -->
    <v-app-bar app color="#ffffff">
      <!-- 应用栏容器 -->
        <v-container fluid>          
        <!-- 应用栏菜单选项 -->
          <v-tabs centered slider-size="5">
            <v-tab v-for="tab in tabMenus" :key="tab.id" :to="tab.href">{{tab.name}}</v-tab>
          </v-tabs>
          <!-- 登录按钮 -->
          <v-btn absolute right top text class="mr-16" >登录</v-btn>
          <login-register-dialog></login-register-dialog>
        </v-container>
    </v-app-bar>
    <v-main>
      博客首页界面
    </v-main>    
    <v-footer class="text-center">
      <v-container>
        <v-chip small label color="transparent" v-for="link in footerLinks" :to="link.to" :key="link.id">{{link.text}}</v-chip>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
  import LoginRegisterDialog from '../../components/LoginRegisterDialog.vue'
  export default {
    name: 'BlogHomeView',
    components: {LoginRegisterDialog},
    data: () => ({     
      tabMenus: [],  //应用栏菜单
      footerLinks: [],  //页脚链接
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
      },
      //获取页脚信息
      getFooterLinks() {
        //请求服务器 -- 获取页脚链接
        this.footerLinks = [
          {id: 1, text: '增值电信业务经营许可证： 合字B2-2009007', to: ''},
          {id: 2, text: '京ICP备10036305号-7', to: ''},
          {id: 3, text: '京公安网备11010802022657', to: ''},
          {id: 4, text: '隐私声明和 Cookie', to: ''},
          {id: 5, text: '法律声明', to: ''},
          {id: 6, text: '广告', to: ''},
          {id: 7, text: '帮助', to: ''},
          {id: 8, text: '反馈', to: ''},
          {id: 9, text: '© 2022 Microsoft', to: ''},
        ]
      }
    },
    created() {     
        //获取应用栏菜单
        this.getAppBarMenus()
        //获取页脚链接
        this.getFooterLinks()
    }
  }
</script>

<style scoped>

</style>
