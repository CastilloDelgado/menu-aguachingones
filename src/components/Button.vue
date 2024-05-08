<script setup>
defineProps({
    title: String,
    active: Boolean
})
</script>

<template>
    <div
        class="px-6 py-2 border-primary-600 border-2 text-primary-700 transition bg-primary-100 hover:scale-105 shadow hover:shadow-lg">
        {{ title }}
    </div>
</template>