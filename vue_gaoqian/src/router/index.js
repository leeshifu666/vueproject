import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogHomeView from '../views/blog/BlogHomeView'
import ExamHomeView from '../views/exam/ExamHomeView'
import FilmHomeView from '../views/film/FilmHomeView'
import SchoolHomeView from '../views/school/SchoolHomeView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '主页',
    component: HomeView
  },
  {
    path: '/blog',
    name: '博客主页',
    component: BlogHomeView
  },
  {
    path: '/exam',
    name: '考证主页',
    component: ExamHomeView
  },
  {
    path: '/film',
    name: '影音主页',
    component: FilmHomeView
  },
  {
    path: '/school',
    name: '学堂主页',
    component: SchoolHomeView
  }
]

const router = new VueRouter({
  routes
})

export default router
