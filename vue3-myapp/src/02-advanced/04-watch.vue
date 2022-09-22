<template>
  <div>04-watch
    <input type="text" v-model="mytext">
    <ul>
        <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted, reactive, watch } from '@vue/runtime-core'
import { ref } from 'vue'
export default {
    setup(){
        const mytext = ref('')
        const list  = ref([])
        var cache = []

        const state = reactive({
            myname:'yuchun'
        })

        watch(()=>state.myname,()=>{
            
        })

        watch(mytext,()=>{
            list.value = cache.filter(item => item.includes(mytext.value))
        })


       
        onMounted(() => {
            fetch("/test.json").then((res) => res.json()).then(res => {
                console.log(res);
                list.value = res.list
                cache = res.list
            }) 
        })

        return {
            mytext,
            list,
            state
        }
    }
}
</script>

<style>

</style>