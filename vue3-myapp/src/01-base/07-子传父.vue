<template>
  <div>
    <navbar @navbarInput="yuchun"></navbar>
    <sidebar></sidebar>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import sidebar from './components/sidebar.vue'
export default {
    components:{
        navbar,
        sidebar
    },
    setup() {
      const yuchun = () => {
        console.log('hahahahah');
      }

      return {
        yuchun
      }
    }
}
</script>

<style>

</style>