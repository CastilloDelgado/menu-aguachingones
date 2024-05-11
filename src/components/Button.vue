<script setup>
defineProps({
    title: String,
    active: Boolean
})
</script>

<template>
    <div class="w-full uppercase text-center py-2 font-bold border-primary-600 border-2 transition hover:shadow-[-6px_6px_0px_-2px_#FFFFFF_,_-6px_6px_0px_0px_#e72138]"
        :class="{
            'bg-primary-600 text-white shadow-[-6px_6px_0px_-2px_#FFFFFF_,_-6px_6px_0px_0px_#e72138]': active,
            'bg-white text-primary-600': !active
        }">
        {{ title }}
    </div>
</template>