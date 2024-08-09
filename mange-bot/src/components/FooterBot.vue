<script setup lang="ts">
    const props = defineProps({
        img: {type: String, required: true},
        text: {type: String, required: true}
    })

</script>

<template>
    <div class="flex flex-row align-items-center">
        <img class="mr-2" :src="props.img" alt="">
        <p>{{ props.text }}</p>
    </div>
</template>

<style scoped lang="scss">
    img{
        height: 8rem;
    }    
    p{
        width: 9rem;
        color: white;
    }
</style>