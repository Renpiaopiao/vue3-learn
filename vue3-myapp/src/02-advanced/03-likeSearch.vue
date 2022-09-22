<template>
  <div>03-likeSearch
    <input type="text" v-model="mytext">
    <ul>
        <li v-for="item in computedList" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
export default {
    setup(){
        const mytext = ref('')
        const list  = ref([])

        const computedList = computed(() => {
            const newList = list.value.filter(item => item.includes(mytext.value))
            return newList
        })
        onMounted(() => {
            fetch("/test.json").then((res) => res.json()).then(res => {
                console.log(res);
                list.value = res.list
            }) 
        })

        return {
            mytext,
            list,
            computedList
        }
    }
}
</script>

<style>

</style>