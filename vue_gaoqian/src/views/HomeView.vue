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
      <!-- 视差背景图 -->
      <v-parallax :src="homeBackPic" height="600">
        <div class="text-center">
          <h1 class="text-h2 font-weight-black mb-3">搞钱</h1>
          <p>怕穷如怕虎，搞钱如中蛊。</p>
        </div>
      </v-parallax>
      <!-- 标题介绍 -->
      <v-container class="text-center">
          <h1 class="text-h4 font-weight-black mb-2">疯狂搞钱</h1>
          <p>7x24小时高强度搞钱，搞的颅内高潮！</p>
      </v-container>
      <!-- 主页卡片 -->
      <v-container fluid class="d-flex justify-center">
        <!-- 四张卡片 -->
        <v-card hover width="280" v-for="(card) in homeCards" :to="card.href" :key="card.id" :class="'ml-3'">
          <!-- 卡片标题 -->
          <v-card-title class="font-weight-bold">{{card.name}}</v-card-title>
          <!-- 卡片副标题 -->
          <v-card-subtitle>{{card.desc}}</v-card-subtitle>
          <v-card-text>
            <!-- 卡片标签 -->
            <v-chip small label color="transparent" v-for="label in card.labels" :key="label">{{label}}</v-chip>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
    <v-footer class="text-center">
      <v-container>
        <v-chip small label color="transparent" v-for="link in footerLinks" :to="link.to" :key="link.id">{{link.text}}</v-chip>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    name: 'Home',
    data: () => ({
      tabMenus: [],  //应用栏菜单
      homeBackPic: '',  //首页背景图
      homeCards: [],  //主页卡片信息
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
      //获取首页的背景图
      getHomeBackPic() {
        //请求服务器 -- 获取首页的背景图地址
        this.homeBackPic = 'https://pic3.zhimg.com/v2-fbb002ec83393f1b87a55cfb69c864db_r.jpg'
      },
      //获取主页卡片信息
      getHomeCards() {
        //请求服务器 -- 获取主页卡片信息
        this.homeCards = [
          {
            id: 1,
            name: "博客",
            desc: "百万博主分享经验",
            href: "/blog",
            labels: [
              "Java",
              "Python",
              "Hadoop",
              "Linux",
              "C++",
              "Unity",
              "UI 设计",
              "Android",
              "IOS",
              "HarmonyOs",
            ]
          },
          {
            id: 2,
            name: "学堂",
            desc: "百万教学视频畅游知识海洋",
            href: "/school",
            labels: [
              "VueJs",
              "前端",
              "后台",
              "大数据",
              "影视后期",
              "游戏开发",
              "人工智能",
              "物联网",
              "游戏建模",
              "应用开发",
            ]
          },
          {
            id: 3,
            name: "视频",
            desc: "百万影视畅享盛会",
            href: "/film",
            labels: [
              "电视剧",
              "电影",
              "纪录片",
              "少儿",
              "动漫",
              "短视频",
              "综艺",
              "英剧",
              "美剧",
              "爆米花",
            ]
          },
          {
            id: 4,
            name: "考证",
            desc: "千款认证考试线上测试",
            href: "/exam",
            labels: [
              "模拟考",
              "刷题",
              "期末考",
              "随堂测",
              "甲骨文认证",
              "花场认证",
              "鹅厂认证",
              "三星认证",
              "TCL认证",
              "微软认证",
            ]
          }, 
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
        //获取首页背景图
        this.getHomeBackPic()
        //获取主页卡片信息
        this.getHomeCards()
        //获取页脚链接
        this.getFooterLinks()
      }
  }
</script>

<style scoped>

</style>