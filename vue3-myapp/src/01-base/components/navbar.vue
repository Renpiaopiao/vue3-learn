<template>
  <div>
    navbar-- <button @click="navClick">nav-click</button>
  </div>
</template>

<script>
export default {
    setup(props,{emit}) {
        const navClick  = () => {
            emit('navbarInput')
        }

        return {
            navClick
        }
    }
}
</script>

<style>

</style>