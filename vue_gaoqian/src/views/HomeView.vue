<template>
  <v-app>
    <!-- 应用栏区域 -->
    <v-app-bar app color="#ffffff">
      <!-- 使用 HeadBar 组件 -->
      <head-bar></head-bar>
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
      <!-- 使用 FooterBar 组件 -->
      <footer-bar></footer-bar>
    </v-footer>
  </v-app>
</template>

<script>
  import LoginRegisterDialog from '../components/LoginRegisterDialog.vue'

  export default {
    name: 'Home',
    components: {LoginRegisterDialog},
    data: () => ({
      
      homeBackPic: '',  //首页背景图
      homeCards: [],  //主页卡片信息
    }),
    methods: {
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
      }
    },
      created() {
        //获取首页背景图
        this.getHomeBackPic()
        //获取主页卡片信息
        this.getHomeCards()
      }
  }
</script>

<style scoped>

</style>