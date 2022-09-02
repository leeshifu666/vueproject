<template>
  <v-app>
    <v-app-bar app color="white">
      <!-- 使用 HeadBar 组件 -->
      <head-bar></head-bar>
    </v-app-bar>
    <v-main>
      <!-- flex布局水平居中 -->
      <v-container fluid class="d-flex justify-center">
        <!-- 博客的分类，博客的排序，博客的列表，分页 -->
        <v-card flat width="620">
          <!-- 博客的分类 -->
          <v-container fluid>
            <v-chip-group active-class="info" v-model="optionMenus.value" show-arrows center-active>
              <v-chip 
              small 
              label 
              color="#EEEEEE" 
              v-for="option in optionMenus.options" 
              :key="option.id"
              :value="option.id"
              >{{option.name}}</v-chip>
            </v-chip-group>
          </v-container>
        </v-card>
        <!-- 搜索博客，热门博客，推荐的博主 -->
        <v-card flat width="380" class="ml-8">2</v-card>
      </v-container>
    </v-main>
    <v-footer class="text-center">
      <!-- 使用 FooterBar 组件 -->
      <footer-bar></footer-bar>
    </v-footer>
  </v-app>
</template>

<script>
  import LoginRegisterDialog from '../../components/LoginRegisterDialog.vue'
  export default {
    name: 'BlogHomeView',
    components: {LoginRegisterDialog},
    data: () => ({
      // 选项菜单
      optionMenus: {
        value: null, //一级菜单值
        options: []  //选项
      },
    }),
    methods: {
      //获取博客的选项菜单
      getBlogOptionMenus (){
        //请求服务器 -- 获取博客的选项菜单
        this.optionMenus.options = [

{

id: 1,

name: '推荐',

options: []

},

{

id: 2,

name: '教学',

options: [

{id: 100, name: '数学'},

{id: 101, name: '英语'},

{id: 102, name: '语文'},

{id: 103, name: '历史'},

{id: 104, name: '化学'},

{id: 105, name: '政治'},

{id: 106, name: '生物'},

{id: 107, name: '体育'},

{id: 108, name: '音乐'},

]

},

{

id: 3,

name: 'IT',

options: [

{id: 109, name: 'Java'},

{id: 110, name: 'PHP'},

{id: 111, name: 'C++'},

{id: 112, name: 'Python'},

{id: 113, name: 'Hadoop'},

{id: 114, name: 'Android'},

{id: 115, name: 'HarmonyOS'},

{id: 116, name: 'Vue'},

{id: 117, name: 'HTML'},

{id: 118, name: 'CSS'},

]

},

{

id: 4,

name: '游戏',

options: [

{id: 125, name: 'LOL'},

{id: 126, name: '王者荣耀'},

{id: 127, name: '和平精英'},

{id: 128, name: 'DNF'},

{id: 129, name: '穿越火线'},

{id: 130, name: '元神'},

]

},

{

id: 5,

name: '旅游',

options: [

{id: 131, name: '骑行'},

{id: 132, name: '潜水'},

{id: 133, name: '徒步'},

{id: 134, name: '登山'},

{id: 135, name: '国内游'},

{id: 136, name: '国外游'},

{id: 137, name: '自驾游'},

]

},

{

id: 6,

name: '时尚',

options: [

{id: 138, name: '美妆'},

{id: 139, name: '护肤'},

{id: 140, name: '穿搭'},

]

},

{

id: 7,

name: '汽车',

options: [

{id: 141, name: '赛车'},

{id: 142, name: '改装车'},

{id: 143, name: '新能源车'},

{id: 144, name: '房车'},

{id: 145, name: '机车'},

{id: 146, name: '购车攻略'},

]

},

{

id: 8,

name: '运动',

options: [

{id: 147, name: '篮球'},

{id: 148, name: '足球'},

{id: 149, name: '网球'},

{id: 150, name: '健身'},

{id: 151, name: '滑雪'},

{id: 152, name: '马拉松'},

]

},

{

id: 9,

name: '舞蹈',

options: [

{id: 153, name: '街舞'},

{id: 154, name: '芭蕾舞'},

{id: 155, name: '民族舞'},

]

},

{

id: 10,

name: '动物',

options: [

{id: 156, name: '犬科动物'},

{id: 157, name: '猫科动物'},

{id: 158, name: '爬行动物'},

{id: 159, name: '两栖动物'},

]

},

{

id: 11,

name: '美食',

options: [

{id: 160, name: '热菜'},

{id: 161, name: '凉菜'},

{id: 162, name: '汤羹'},

{id: 163, name: '主食'},

{id: 164, name: '小吃'},

{id: 165, name: '西餐'},

{id: 166, name: '烘焙'},

{id: 167, name: '饮品'},

{id: 168, name: '跑酱腌菜'},

]

},

        ]
      }
    },
    created() {
      //获取博客的选项菜单
      this.getBlogOptionMenus()
    }
  }
</script>

<style scoped>

</style>

/* 文档地址 https://shimo.im/docs/vVAXVLBYODCD6jqm/read */