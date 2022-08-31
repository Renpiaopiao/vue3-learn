<template>
  <div>
    <!-- <input type="text" v-model="state.mytext"> -->
    <input type="text" ref="aaa">
    <button @click="handleClick">add</button>
    <ul>
        <li v-for="item in state.dataList" :key="item">{{item}}
            <button @click="handleDel">del</button>
        </li>
    </ul>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    setup() {
        const state =  reactive({
            mytext:'',
            dataList:['111','222','333']
        })

        const handleClick = () =>{
            state.dataList.push(state.mytext)
        }

        const handleDel  = (index) => {
            state.dataList.splice(index,1)
        }
        return {
            state,
            handleClick,
            handleDel
        }
    }
}
</script>

<style>

</style>