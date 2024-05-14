<script setup>
import MenuContainer from './MenuContainer.vue';

defineProps({
    meals: Array
})
</script>

<template>
    <MenuContainer v-for="meal in meals" class="mb-4">
        <p class="uppercase text-center text-2xl font-bold text-primary-600 mb-4">{{ meal.title }}</p>

        <!-- Elements -->
        <div v-for="element in meal.elements" class="flex flex-col w-full justify-around px-4" :class="{
        'mb-2': element.description
    }">
            <div class="flex">
                <div class="w-4/6">
                    <p class="text-medium font-bold text-primary-700 uppercase">{{ element.title }}</p>
                    <p class="text-xs text-justify text-primary-950" v-if="element.description">{{ element.description
                        }}</p>
                </div>
                <div class="w-2/6 flex text-sm justify-end gap-2 text-primary-600 font-bold" v-if="element.price">

                    ${{ element.price.toFixed(2) }}
                </div>
            </div>
            <div class="mt-2">
                <!-- Variants -->
                <div v-for="variant in element.variants" class="w-full flex">
                    <div class="w-4/6">
                        <p class="text-xs font-bold text-primary-700 uppercase">{{ variant.title }}</p>
                    </div>
                    <div class="w-2/6 flex text-sm justify-end gap-2 text-primary-600 font-bold">
                        <span v-if="variant.price">
                            ${{ variant.price.toFixed(2) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </MenuContainer>
</template>