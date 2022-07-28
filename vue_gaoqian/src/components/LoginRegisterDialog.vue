<template>
        <!-- 对话框 -->
        <v-dialog width="1000" v-model="show"  content-class="rounded-0">
            <div class="d-flex">
                    <!-- 网站信息 -->
                <v-card class="dialog_back pa-16 d-flex flex-column" dark tile width="500" height="573">
                    <!-- 网站标题 -->
                    <v-container class="mb-auto">                     
                        <h1>GAOQIAN</h1>
                        <p class="text-caption grey--text text-lighten-2">全方位的教学、考证、博客、咨询网站</p>
                    </v-container>
                    <!-- 推荐的博主 -->
                    <v-container class="mb-auto">
                        <!-- 头像、昵称 -->
                        <div>
                            <v-avatar size="40">
                                <v-img :src="recAuthor.head_pic"></v-img>
                            </v-avatar>
                            <span class="text-caption ml-2">{{recAuthor.nickname}}</span>
                        </div>
                        <!-- 个性签名 -->
                        <p class="text-caption grey--text text-lighten-2 mt-2" v-html="recAuthor.canvases"></p>
                    </v-container>
                    <!-- 网站咨询标签 -->
                    <v-container>
                        <v-chip 
                        label 
                        small 
                        link
                        color="transparent" 
                        text-color="grey lighten-2"
                        v-for="link in footerLinks"
                        :key="link.id"
                        :to="link.to"
                        >{{link.name}}</v-chip>
                    </v-container>
                </v-card>
                <!-- 窗口（登录， 注册， 注册成功） -->
                <v-window v-model="step">
                    <v-window-item :value="1">
                        <v-card tile width="500" height="573">
                            登录
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="2">
                        <v-card tile width="500" height="573">
                            注册
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="3">
                        <v-card tile width="500" height="573">
                            注册成功
                        </v-card>
                    </v-window-item>
                </v-window>
            </div>
        </v-dialog>
</template>

<script>
    export default {
        name: "LoginRegisterDialog",
        data: () => ({
            show: true,  //显示隐藏对话框
            step: 1,  //窗口显示
            recAuthor: {},  //推荐博主
            footerLinks: [],  //脚部链接
        }),
        methods: {
            // 获取推荐的博主
            getRecommendAuthor() {
                // 请求服务器 -- 获取推荐的博主
                this.recAuthor = {
                    head_pic: 'https://cdn.vuetifyjs.com/images/john.jpg', // 头像
                    nickname: '落叶归根', // 昵称
                    canvases:
                    '编程是爱好，恭喜你发现宝藏男孩一枚~希望你们关注我是因为喜欢我，嘿嘿！<br>' +
                    '私人微信：kuangshenya 备注来意<br>' +
                    '公众号：狂神说' // 个性签名
                }
            },
            // 获取脚部链接
            getFooterLinks() {
                //请求服务器 -- 获取脚步的链接
                this.footerLinks = [
                    {id: 1, name: '搞钱咨询', to: ''},
                    {id: 2, name: '关于我们', to: ''},
                    {id: 3, name: '使用条款', to: ''},
                    {id: 4, name: '帮助文档', to: ''},
                ]
            },
        },
        watch: {
            show: {
                immediate: true,  //初次实例化后
                handler(newData) {
                    if (newData) {
                        //获取推荐博主
                        this.getRecommendAuthor()
                    }
                }
            }
        },
        created() {
          // 获取脚部链接
            this.getFooterLinks()  
        }
    }
</script>

<style scoped>
/* 对话框的背景色 */
    .dialog_back{
        background-image: linear-gradient(to bottom, #3a485a, #607089);
    }
</style>