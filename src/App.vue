<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from "./components/layout/footer.vue";
export default {
  name: 'app',
  components:{
    // 视图模板名称:对应的是一个组件
    "v-footer":footer,
  }
}
</script>

<style>

</style>
