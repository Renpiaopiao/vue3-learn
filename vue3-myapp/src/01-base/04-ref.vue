<template>
  <div>
    {{myname}} --- {{myage}}
  </div>
  <button @click="handleChange">xiugai</button>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        const myname = ref('yuchun')
        const myage = ref(100)
        const handleChange = () => {
          myname.value = "小明"
        }
        return {
            handleChange,    
            myname,
            myage
        }
    }
}
</script>

<style>

</style>