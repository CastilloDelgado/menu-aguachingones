<script setup>
import Layout from './components/Layout.vue';
import Menu from './components/Menu.vue';
import logo from "./assets/shrimp-logo.png"
import { onMounted, ref } from 'vue';

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<template>
  <div class="absolute grid place-content-center z-50 h-full w-full bg-primary-600" :class="{
    'hidden': !loading
  }">
    <div class="px-12">
      <p class="mb-8 text-white font-title text-3xl uppercase text-center">Los aguachingones</p>
      <div class="flex w-full justify-center animate-bounce">
        <img :src="logo" alt="" class="w-24 h-24">
      </div>
    </div>
  </div>
  <div class="bg-repeat bg-center bg-image" :class="{
    'hidden': loading
  }">
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