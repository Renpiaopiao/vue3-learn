<template>
    <div>computed -- {{myname}} --- {{computedname}}</div>
    <button @click="handleChange">button</button>
</template>

<script>
import { computed, ref } from 'vue';
export default {
    setup() {
        const myname = ref('kerwin')
        const computedname = computed(() => myname.value.substring(0, 3).toUpperCase() + myname.value.substring(3))

        const handleChange = () => {
            myname.value = 'renyuchun'
        }

        return {
            myname,
            computedname,
            handleChange
        }
    }
}
</script>

<style>

</style>