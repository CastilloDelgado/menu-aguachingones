<script setup>
import Button from './Button.vue';
import MealsMenu from './MealsMenu.vue';
</script>

<template>
    <div class="">
        <div class="w-full p-4">
            <div class="w-full flex justify-around gap-4 pl-1 mb-4">
                <Button title="Comida" active />
                <Button title="Bebidas" />
            </div>
            <div class="w-full">
                <MealsMenu />
            </div>
        </div>
    </div>
</template>