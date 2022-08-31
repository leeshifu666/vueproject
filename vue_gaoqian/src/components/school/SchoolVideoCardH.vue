<template>
    <div>
        <!-- 视频卡片 -->
          <v-list-item>
            <!-- 视频封面 -->
            <v-list-item-avatar width="200" height="120" tile>
              <v-img class="rounded-lg" :src="cover"></v-img>
            </v-list-item-avatar>
            <!-- 视频介绍 -->
            <v-list-item-content class="align-self-start">
              <!-- 标题 -->
              <v-list-item-title class="font-weight-black">
                {{title}}
              </v-list-item-title>
              <!-- 副标题（新，热门标签，发布时间） -->
              <v-list-item-subtitle>
                <!-- NEW -->
                <v-chip v-if="is_new" small color="success" class="font-weight-black font-italic rounded-0 mr-2" >NEW</v-chip>
                <!-- HOT -->
                <v-chip v-if="is_hot" small color="warning" class="font-weight-black font-italic rounded-0 mr-2" >HOT</v-chip>
                <!-- 发布时间 -->
                <span>更新于：{{time}}</span>
              </v-list-item-subtitle>
              <!-- 介绍 -->
              <div class="text-caption grey--text text--lighten-1 line__3" v-html="desc"></div>
            </v-list-item-content>
            <!-- 学习 -->
            <v-list-item-action>
              <div>
                <span class="text-caption grey--text text--lighten-1">{{studyCount | numFormat}}人已学</span>
                <br>
                <v-btn block color="info" small class="rounded-pill">开始学习</v-btn>
              </div>
            </v-list-item-action>
          </v-list-item>
    </div>
</template>

<script>
    export default {
        name: "SchoolVideoCardH",
        props: {
            id: {type: Number, required: true},//编号
            cover: {type: String, required: true},//封面
            title: {type: String, required: true},//标题
            is_new: {type: Boolean, default: false},//New 标签
            is_hot: {type: Boolean, default: false},//Hot 标签
            time: {type: String, required: true},//发布时间
            desc: {type: String, required: true},//视频描述
            studyCount: {type: Number, required: true},//学习人数
        },
        //组件循环引用解决办法
        // beforeCreate: function (){
        //   this.$options.components.TreeFolderContents = require("路径").default
        // }
        // components: {
        //   TreeFolderContents: () => import("路径")
        // }
    }
</script>

<style scoped>
.line__3 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>