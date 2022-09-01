<template>
    <div>parent
        <child myTitle="aaa"/>
    </div>
</template>

<script>
import child from './components/child.vue'
export default {
    components:{
        child
    },
}
</script>

<style>

</style>