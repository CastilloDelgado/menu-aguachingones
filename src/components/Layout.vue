<script setup>
import Header from './Header.vue';
import Footer from "./Footer.vue";
</script>
<template>
    <div class="bg-primary-100">
        <Header />

        <div class="min-h-[100vh]">
            <slot />
        </div>

        <Footer />
    </div>
</template>