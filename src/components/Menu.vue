<script setup>
import { ref } from 'vue';
import Button from './Button.vue';
import MealsMenu from './MealsMenu.vue';

const option = ref('')

</script>

<template>
    <div class="">
        <div class="w-full p-4">
            <div class="w-full flex justify-around gap-4 pl-1 mb-4">
                <Button title="Comida" :active="option === 'meals'" @click="option = 'meals'" />
                <Button title="Bebidas" :active="option === 'drinks'" @click="option = 'drinks'" />
            </div>
            <div class="w-full">
                <MealsMenu />
            </div>
        </div>
    </div>
</template>