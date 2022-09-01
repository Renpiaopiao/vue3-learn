<template>
  <div>child1111
    {{myTxt}}
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  props:['myTitle'],
  setup(props) {
    const myTxt = ref(props.myTitle + '1111')
    return {
      myTxt
    }
  }
}
</script>

<style>

</style>