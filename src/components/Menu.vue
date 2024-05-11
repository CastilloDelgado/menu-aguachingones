<script setup>
import { ref } from 'vue';
import Button from './Button.vue';
import MealsMenu from './MealsMenu.vue';
import DrinksMenu from './DrinksMenu.vue';

const option = ref('meals')

</script>

<template>
    <div class="w-full p-4">
        <div class="w-full flex justify-around gap-4 pl-1 mb-4">
            <Button title="Comida" :active="option === 'meals'" @click="option = 'meals'" />
            <Button title="Bebidas" :active="option === 'drinks'" @click="option = 'drinks'" />
        </div>
        <div class="w-full">
            <MealsMenu v-if="option === 'meals'" />
            <DrinksMenu v-if="option === 'drinks'" />
        </div>
    </div>
</template>