<script setup>
defineProps({
    title: String,
    active: Boolean
})
</script>

<template>
    <div class="text-lg md:text-xl font-extrabold w-full uppercase text-center select-none py-2 border-primary-600 border-2 transition active:shadow-none active:translate-y-1 active:-translate-x-1  hover:shadow-[-6px_6px_0px_-2px_#FFFFFF_,_-6px_6px_0px_0px_#e72138]"
        :class="{
            'bg-primary-600 text-white shadow-[-6px_6px_0px_-2px_#FFFFFF_,_-6px_6px_0px_0px_#e72138]': active,
            'bg-white text-primary-600': !active
        }">
        {{ title }}
    </div>
</template>