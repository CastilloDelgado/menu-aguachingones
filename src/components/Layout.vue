<script setup>
import Header from './Header.vue';
import Footer from "./Footer.vue";
</script>
<template>
    <div>
        <Header />
        <div class="max-w-xl mx-auto border-neutral-200 bg-transparent">

            <div class="min-h-[100vh] ">
                <slot />
            </div>

        </div>
        <Footer />
    </div>
</template>

<style scoped>
.bg-image {
    background-image: url('../assets/pattern.png');
    background-size: 10px 10px;
}
</style>