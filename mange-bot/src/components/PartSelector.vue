<script setup lang="ts">
import { Part } from '@/models/parts';
import { BASE_URL } from '@/services/soucers.config';
import { type Ref, ref } from 'vue';

    type PropType = {
        parts: Array<Part>;
        position: "left"|"right"|"center"|"top"|"bottom";
    };
    
    const props = defineProps<PropType>();

    const selectedIndex = ref(0);

    // const changePart = (isNext: boolean)=>{
    //     if(isNext){
    //         if (selectedIndex.value == (props.parts.length - 1)){
    //             selectedIndex.value = 0
    //         } else {
    //             selectedIndex.value ++;
    //         }
    //     } else {
    //         if (selectedIndex.value == 0){
    //             selectedIndex.value = (props.parts.length - 1)
    //         } else {
    //             selectedIndex.value --;
    //         }
    //     }
    // }

    const changePart = (isNext: boolean)=>{
        
        const newIdex = isNext? selectedIndex.value + 1 :
                                selectedIndex.value - 1;
        // ? Se já estiver na primeira peça, volta para a ultima
        if(newIdex <0){ 
            selectedIndex.value = (props.parts.length - 1);
        }
        // ? Se já estiver na ultima peça, volta para a primeira
        else if(newIdex > (props.parts.length - 1)){
            selectedIndex.value = 0;
        }
        else{
            selectedIndex.value = newIdex;
        }
    }

</script>

<template>
    <div :class="`part ${props.parts}`">
        <img :src="BASE_URL + props.parts[selectedIndex].src" alt="">
        <button @click="changePart(false)" class="prev-selector"></button>
        <button @click="changePart(true)" class="next-selector"></button>
    </div>
</template>

<style scoped lang="scss">
    $part-width: 165px;
    $part-height: 165px;

    .part{
        position: relative;
        width: $part-width;
        height: $part-height;
        border: 3px solid #aaa;
        // img{
        //     width: calc($part-width -5px);
        //     height: calc($part-height -5px);
        // }
    }
</style>