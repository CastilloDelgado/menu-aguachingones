<script setup>
import MenuContainer from './MenuContainer.vue';

defineProps({
    meals: Array
})
</script>

<template>
    <MenuContainer>
        <div v-for="meal in meals">
            <p class="uppercase text-center text-2xl font-bold text-primary-600 mb-4">{{ meal.title }}</p>

            <div v-for="element in meal.elements" class="flex w-full justify-around mb-2">
                <div class="w-4/6">
                    <p class="text-medium font-bold text-primary-700 uppercase">{{ element.title }}</p>
                    <p class="text-xs text-justify text-primary-950">{{ element.description }}</p>
                </div>
                <div class="flex text-sm justify-end gap-2 text-primary-600 font-bold">
                    <p>
                        ${{ element.price.toFixed(2) }}
                    </p>
                </div>
            </div>
        </div>
    </MenuContainer>
</template>