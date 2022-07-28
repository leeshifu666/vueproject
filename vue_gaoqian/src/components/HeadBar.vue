<template>
    <!-- 应用栏容器 -->
        <v-container fluid>          
        <!-- 应用栏菜单选项 -->
          <v-tabs centered slider-size="5">
            <v-tab v-for="tab in tabMenus" :key="tab.id" :to="tab.href">{{tab.name}}</v-tab>
          </v-tabs>
          <!-- 登录按钮 -->
          <v-btn absolute right top text class="mr-16" @click="showLoginRegisterDialog">登录</v-btn>
          <!-- 登录注册的对话框 -->
          <login-register-dialog></login-register-dialog>
        </v-container>
</template>

<script>
    import LoginRegisterDialog from "./LoginRegisterDialog.vue"
    import eventBus from "../untils/eventBus"

    export default {
        name: "HeadBar",
        components: {LoginRegisterDialog},
        data: () => ({
            tabMenus: [],  //应用栏菜单
        }),
        methods: {
            //显示登录注册对话框
            showLoginRegisterDialog() {
                eventBus.$emit('showLoginRegisterDialog', true)
            },
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
        },
        created() {          
        //获取应用栏菜单
        this.getAppBarMenus()
        }
    }
</script>

<style scoped>

</style>