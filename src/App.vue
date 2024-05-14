<script setup>
import Layout from './components/Layout.vue';
import Menu from './components/Menu.vue';
</script>

<template>
  <div class=" bg-repeat bg-center bg-image">
    <Layout>
      <Menu />
    </Layout>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url('./assets/pattern.png');
  background-size: 40px 40px;
}
</style>