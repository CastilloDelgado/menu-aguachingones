<script setup>
import logo from "../assets/shrimp-logo.png"
</script>

<template>
    <div class="text-center bg-primary-600 text-white py-4 grid place-content-center">
        <a href="#header" class="text-sm md:text-medium capitalize underline font-ligh mb-2">Volver arriba</a>
        <p class="  uppercase font-title"> Los Aguachingones</p>
        <div class="flex justify-center mb-2">
            <img :src="logo" alt="" class="w-8 h-8 shake">
        </div>
    </div>
</template>