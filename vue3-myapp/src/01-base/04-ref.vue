<template>
  <div>
    ref
  </div>
</template>

<script>
export default {
    setup() {
        const myname = ref('yuchun')
        const myage = ref(100)
        return {
            myname,
            myage
        }
    }
}
</script>

<style>

</style>