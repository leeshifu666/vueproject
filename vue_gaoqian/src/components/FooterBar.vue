<template>
        <!-- 脚部区域 -->
      <v-container>
        <!-- 链接 -->
        <v-chip small label color="transparent" v-for="link in footerLinks" :to="link.to" :key="link.id">{{link.text}}</v-chip>
      </v-container>
</template>

<script>
    export default {
        name: "FooterBar",
        data: () => ({
           footerLinks: [],  //页脚链接
        }),
        methods: {
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
            //获取页脚链接
            this.getFooterLinks()
        }
    }
</script>

<style scoped>

</style>