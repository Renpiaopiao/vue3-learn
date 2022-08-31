<template>
  <div>111
    <div>{{state.myname}} -- {{state.age}}</div>
    <button @click="changeItem">修改</button>
  </div>
  <div>22222</div>
</template>

<script>
import {reactive} from 'vue'
export default {
    setup() {
        const state = reactive({
            myname:'yuchun',
            age:100
        })

        const changeItem = () => {
            state.age = 18
        }

        return {    
            state,
            changeItem
        }
    }
    
};
</script>

<style></style>
