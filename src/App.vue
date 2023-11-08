<template>
  <AsideComponent></AsideComponent>
  <main>
    <router-view/>
  </main>
</template>

<script>
  import AsideComponent from './components/AsideComponent.vue';
  export default{
    components: {
      AsideComponent
    }
  }
</script>

<style>
</style>
