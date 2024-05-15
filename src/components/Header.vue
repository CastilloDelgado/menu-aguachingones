<script setup>
import logo from "../assets/shrimp-logo.png"
</script>

<template>
    <div id="header" class="p-2 flex justify-center bg-primary-600 gap-2">
        <img :src="logo" alt="" class="w-10 h-10">
        <div class="h-10 grid place-content-center">
            <p class="text-white text-xl uppercase header-title font-title">
                los aguachingones
            </p>
        </div>
    </div>
</template>

<style>
.header-title {
    font-weight: bold;
}
</style>