<script setup>
import Header from './Header.vue';
import Footer from "./Footer.vue";
</script>
<template>
    <div class="max-w-3xl mx-auto border-x-2 border-neutral-200">
        <Header />

        <div class="min-h-[100vh] bg-repeat bg-center bg-image">
            <slot />
        </div>

        <Footer />
    </div>
</template>

<style scoped>
.bg-image {
    background-image: url('../assets/pattern.png');
    background-size: 40px 40px;
}
</style>