<template>
  <v-app>
    <v-app-bar app color="white">
      <!-- 使用 HeadBar 组件 -->
      <head-bar></head-bar>
    </v-app-bar>
    <v-main>
      影音首页界面
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
    name: 'FilmHomeView',
    components: {LoginRegisterDialog},
    data: () => ({

    }),
    methods: {
      
    },
  }
</script>

<style scoped>

</style>