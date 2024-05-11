<script setup>
import MenuContainer from './MenuContainer.vue';
</script>

<template>
    <MenuContainer>
        <p class="uppercase text-center text-2xl font-bold text-primary-600 mb-4">Bebidas</p>

        <div v-for="element in [0, 1, 2, 3, 4, 5]" class="flex w-full justify-around mb-2">
            <div class="w-4/6">
                <p class="text-medium font-bold text-primary-700 capitalize">Lorem ipsum dolor sit</p>
                <p class="text-xs text-justify text-primary-950">Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Eius
                    recusandae quidem
                    dolorum deserunt.
                    Repellendus quo beatae.</p>
            </div>
            <div class="text-sm justify-end text-primary-900">
                $250.45
            </div>
        </div>
    </MenuContainer>
</template>