<template>
    <div>
      <div>{{myname}} -- {{age}}</div>
      <button @click="changeItem">修改</button>
    </div>
    <div>22222</div>
  </template>
  
  <script>
  import {reactive, toRefs} from 'vue'
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
              ...toRefs(state),
              changeItem
          }
      }
      
  };
  </script>
  
  <style></style>
  