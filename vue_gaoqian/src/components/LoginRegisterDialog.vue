<template>
    <!-- 对话框 -->
    <v-dialog width="1000" v-model="show" content-class="rounded-0">
        <div class="d-flex">
            <!-- 网站信息 -->
            <v-card class="dialog_back pa-16 d-flex flex-column" dark tile width="500" height="573">
                <v-btn light absolute fab small style="top:10px; right:-20px" @click="show = false">
                    <v-icon color="grey" size="30">mdi-close-circle-outline</v-icon>
                </v-btn>
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
                        <span class="text-caption ml-2">{{ recAuthor.nickname }}</span>
                    </div>
                    <!-- 个性签名 -->
                    <p class="text-caption grey--text text-lighten-2 mt-2" v-html="recAuthor.canvases"></p>
                </v-container>
                <!-- 网站咨询标签 -->
                <v-container>
                    <v-chip label small link color="transparent" text-color="grey lighten-2" v-for="link in footerLinks"
                        :key="link.id" :to="link.to">{{ link.name }}</v-chip>
                </v-container>
            </v-card>
            <!-- 窗口（登录， 注册， 注册成功） -->
            <v-window v-model="step">
                <!-- 登录页面 -->
                <v-window-item :value="1">
                    <v-card tile class="pa-16 d-flex flex-column" width="500" height="573">
                        <!-- 标题 -->
                        <v-container class="d-flex align-center">
                            <h2>登录</h2>
                            <span class="text-caption ml-auto">
                                没有账号？
                                <a href="#" class="text-decoration-none" @click="step = 2">点击注册</a>
                            </span>
                        </v-container>
                        <!-- 登录区域 -->
                        <v-container>
                            <!-- 登录表单 -->
                            <v-form ref="login_form" v-model="login.value" lazy-validation>
                                <!-- 账号文本框 -->
                                <v-text-field outlined dense :rules="login.account.rule" v-model="login.account.value"
                                    label="账号/邮箱/手机号" placeholder="账号/邮箱/手机号"/>
                                <!-- 密码文本框 -->
                                <v-text-field outlined dense :rules="login.password.rule" v-model="login.password.value"
                                    :append-icon="login.password.icon" @click:append="eyePassword"
                                    :type="login.password.type" label="密码" placeholder="请输入密码"/>
                                <!-- 条款与协议 -->
                                <v-checkbox dense class="mt-0 mb-2" :rules="login.term.rule" label="同意本公司的条款与协议"
                                    v-model="login.term.value"/>
                                    <!-- 使用便签插槽 -->
                                    <template #label>
                                        同意本公司的<a class="text-decoration-none" href="#" @click.stop>条款与协议</a>
                                    </template>
                                <!-- 登录按钮 -->
                                <v-btn block :disabled="!login.value" color="success" @click="toLogin">登录</v-btn>
                            </v-form>
                            <!-- 忘记密码 -->
                            <v-container class="text-center">
                                <a class="text-caption grey--text text-decoration-none" href="#">忘记密码</a>
                            </v-container>
                        </v-container> 
                        <!-- 其他登录方式 -->
                        <v-container class="mt-auto">
                            <!-- 分隔符 -->
                            <v-container class="d-flex align-center py-0">
                                <v-divider></v-divider>
                                <v-subheader class="text-caption">其他的登录方式</v-subheader>
                                <v-divider></v-divider>
                            </v-container>
                            <!-- 图标 -->
                            <v-container class="text-center py-0">
                                <v-btn small fab v-for="(item, index) in login.otherMethods" :key="item.id"
                                    :color="item.color" :to="item.to" :class="{ 'ml-9': (index !== 0) }">
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-btn>
                            </v-container>
                        </v-container>
                    </v-card>
                </v-window-item>
                <!-- 注册页面 -->
                <v-window-item :value="2">
                    <v-card tile width="500" height="573" class="px-16 d-flex align-center">
                        <v-container>
                            <!-- 标题 -->
                            <v-container class="d-flex align-center">
                                <h2>注册</h2>
                                <span class="text-caption ml-auto">
                                    已有账号?
                                    <a class="text-decoration-none" @click="step = 1">点击登录</a>
                                </span>
                            </v-container>
                            <!-- 注册区域 -->
                            <v-container>
                                <!-- 注册表单 -->
                                <v-form ref="register_form" v-model="register.value" lazy-validation>
                                    <v-text-field outlined dense v-model="register.email.value"
                                        :rules="register.email.rule" label="邮箱号码" placeholder="请输入邮箱号码" />
                                    <v-row>
                                        <!-- 验证码 -->
                                        <v-col>
                                            <v-text-field outlined dense v-model="register.evc.value"
                                                :rules="register.evc.rule" label="验证码" placeholder="输入验证码" />
                                        </v-col>
                                        <v-col>
                                            <!-- 获取验证码按钮 -->
                                            <v-btn color="info" block :disabled="register.btnCountDown.disabled" @click="bottonCountDown">{{register.btnCountDown.text}}</v-btn>
                                        </v-col>
                                    </v-row>
                                    <!-- 条款与协议 -->
                                    <v-checkbox dense class="mt-0 mb-2" :rules="register.term.rule" label="同意本公司的条款与协议"
                                        v-model="register.term.value">
                                        <!-- 使用便签插槽 -->
                                        <template #label>
                                            同意本公司的<a class="text-decoration-none" href="#" @click.stop>条款与协议</a>
                                        </template>
                                    </v-checkbox>
                                    <!-- 注册按钮 -->
                                    <v-btn block :disabled="!register.value" color="info" @click="toRegister">注册</v-btn>
                                </v-form>
                            </v-container>
                        </v-container>
                    </v-card>
                </v-window-item>
                <!-- 注册成功页面 -->
                <v-window-item :value="3">
                    <v-card tile width="500" height="573" class="d-flex align-center">
                        <v-container class="text-center">
                            <v-icon color="success" size="150">mdi-check-circle</v-icon>
                            <h3>欢迎加入搞钱大家庭</h3>
                            <p class="text-decoration-none">请前往注册的邮箱，查看账号信息，点击此处前往<a class="text-decoration-none" @click="step = 1">登录</a></p>
                        </v-container>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>
    </v-dialog>
</template>

<script>
import eventBus from "../untils/eventBus"
export default {
    name: "LoginRegisterDialog",
    data: () => ({
        show: false,  //显示隐藏对话框
        step: 1,  //窗口显示
        recAuthor: {},  //推荐博主
        footerLinks: [],  //脚部链接
        login: {
            value: null,  //表单状态
            //  账号
            account: {
                value: '', // 账号
                rule: [
                    v => !!v || '请填写你的账号！',  //账号为空时提示
                ]
            },
            //  密码
            password: {
                icon: 'mdi-eye',  //  查看密码图标
                value: '',  //  密码值
                type: 'password',  //  输入框的类型
                rule: [
                    v => !!v || '请填写你的密码！',  //密码为空时提示
                ]
            },
            //  条款
            term: {
                value: false, //  是否勾选
                rule: [
                    v => !!v || '请认真阅读条款与协议！',
                ]
            },
            otherMethods: [], // 其他登录方式
        },
        register: {
            value: null,  //表单状态
            email: {
                vlaue: '', //值
                rule: [
                    v => !!v || '请填写你的邮箱！',
                    v => /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(v) || '请输入正确的邮箱!',
                ]
            },
            evc: {
                value: '', //验证码
                rule: [v => !!v || '请填写你的邮箱！'], //验证规则
            },
            //  条款
            term: {
                value: false, //  是否勾选
                rule: [
                    v => !!v || '请认真阅读条款与协议！',
                ]
            },
            btnCountDown: {
                text: '获取验证码',  //验证码文本
                time: 60,  //倒计时时间
                disabled: false,  //是否禁用
                clock: null,  //清除Interval
            },
        }
    }),
    methods: {
        //重置按钮倒计时状态
        restBtnCountDownStatus() {
            //清除Interval
            clearInterval(this.register.btnCountDown.clock),
            //停止计时并恢复数据
            this.register.btnCountDown.disabled = false,
            this.register.btnCountDown.time = 60,
            this.register.btnCountDown.text = '获取验证码'
        },
        //验证码计时器
        bottonCountDown() {
            this.register.btnCountDown.clock = setInterval (() =>{
                if (this.register.btnCountDown.time - 1 === 0){
                //停止计时并恢复数据
                this.restBtnCountDownStatus()
                } else {
                    //计时条件
                    this.register.btnCountDown.disabled = true, //禁用按钮
                    this.register.btnCountDown.time--,  //倒计时（时间递减）
                    this.register.btnCountDown.text = this.register.btnCountDown.time + '秒后重新获取'  //显示倒计时
                }
            }, 1000)
            //每隔一秒执行代码片段
        },
        //获取其他登录方式
        getOtherLoginMethods() {
            //请求服务器 -- 获取其他登录方式
            this.login.otherMethods = [
                { id: 1, name: 'QQ', icon: 'mdi-qqchat', color: 'info', to: '' },
                { id: 2, name: '微信', icon: 'mdi-wechat', color: 'success', to: '' },
                { id: 3, name: '微博', icon: 'mdi-sina-weibo', color: 'error', to: '' }
            ]
        },
        //去注册
        toRegister() {
            // 手动验证表达的状态
            let isSuccess = this.$refs.register_form.validate()
            if (isSuccess) {
                // 请求服务器 --注册
                alert("验证成功，请求服务进行注册")
            }
        },
        //去登陆
        toLogin() {
            // 手动验证表达的状态
            let isSuccess = this.$refs.login_form.validate()
            if (!isSuccess) {
                return  
            } else {
                // 请求服务器 --登录
                alert("验证成功，请求服务进行登录")
            }
        },
        //查看密码
        eyePassword() {
            //需要查看密码
            if (this.login.password.type === 'password') {
                this.login.password.type = 'text'
                this.login.password.icon = 'mdi-eye-off'
            } else {
                this.login.password.type = 'password'
                this.login.password.icon = 'mdi-eye'
            }
        },
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
                { id: 1, name: '搞钱咨询', to: '' },
                { id: 2, name: '关于我们', to: '' },
                { id: 3, name: '使用条款', to: '' },
                { id: 4, name: '帮助文档', to: '' },
            ]
        },
    },
    watch: {
        step(newData, oldData) {
            // 窗口跳转到其他窗口清除内容和状态
            if (oldData === 1){
                //清除登录表单的内容和状态
                this.$refs.login_form.reset()
            } else if (oldData === 2) {
                //清除注册表单的内容和状态
                this.$refs.register_form.reset()
                //清除注册表单的计时状态
                this.restBtnCountDownStatus()
            }
        },
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
        //监听一个关闭登录注册对话框的事件
        eventBus.$on('showLoginRegisterDialog', isShow => {
            this.show = isShow
        })

        // 获取脚部链接
        this.getFooterLinks()

        //  获取其他登录方式
        this.getOtherLoginMethods()
    }
}
</script>

<style scoped>
/* 对话框的背景色 */
.dialog_back {
    background-image: linear-gradient(to bottom, #3a485a, #607089);
}
</style>