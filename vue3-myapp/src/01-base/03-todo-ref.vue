<template>
    <div>
      <input type="text" ref="mytext">
      <button @click="handleAdd">add</button>
      <ul>
          <li v-for="item in state.dataList" :key="item">{{item}}
              <button @click="handleDel">del</button>
          </li>
      </ul>
    </div>
  </template>
  
  <script>
  import {reactive,ref} from 'vue'
  export default {
      setup() {
          const state =  reactive({
              dataList:['111','222','333']
          })

          const mytext = ref('')
  
          const handleAdd = () =>{
            console.log(mytext);
            state.dataList.push(mytext.value.value)
            mytext.value.value = ''
          }
  
          const handleDel  = (index) => {

          }
          return {
            mytext,
              state,
              handleAdd,
              handleDel
          }
      }
  }
  </script>
  
  <style>
  
  </style>