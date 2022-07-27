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
        </v-container>
    </v-app-bar>
    <v-main>
      <v-container fluid class="d-flex justify-center">
        <!-- 课程菜单 -->
        <v-card height="min-content">
          <!-- 标题 -->
          <v-toolbar color="blue" dense dark>
            <v-spacer></v-spacer>
            热门课程
            <v-spacer></v-spacer>
          </v-toolbar>
          <!-- 选项 -->
          <v-card-text class="pa-2">
            <v-list dense>
              <v-list-item-group color="blue" v-model="subValue">
                <v-list-item v-for="subject in subMenus" :key="subject.id" :value="subject.id">
                  {{subject.name}}
                </v-list-item>
              </v-list-item-group>
            </v-list>
                  </v-card-text>
        </v-card>
        <!-- 课程阶段 -->
        <v-card width="850" class="ml-8">

        </v-card>
      </v-container>
    </v-main>    
    <!-- 页脚区域 -->
    <v-footer class="text-center">
      <v-container>
        <v-chip small label color="transparent" v-for="link in footerLinks" :to="link.to" :key="link.id">{{link.text}}</v-chip>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    name: 'SchoolHomeView',
    data: () => ({     
      tabMenus: [],  //应用栏菜单
      footerLinks: [],  //页脚链接
      subMenus: [],  //课程菜单
      subValue: null,  //课程菜单值
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
      },
      //获取课程菜单
      getSubjectMenus(){
        //请求服务器 -- 获取课程菜单
        this.subMenus = [
          {id: 1, name: 'JavaEE'},
          {id: 2, name: 'HTML&JS+前端'},
          {id: 3, name: 'Python+大数据开发'},
          {id: 4, name: '人工智能开发'},
          {id: 5, name: 'UI/UE设计'},
          {id: 6, name: '软件测试'},
        ]
        this.subValue = this.subMenus[0].id
      }
    },
    created() {     
        //获取应用栏菜单
        this.getAppBarMenus()
        //获取页脚链接
        this.getFooterLinks()
        //获取课程菜单
        this.getSubjectMenus()
    }
  }
</script>

<style scoped>

</style>