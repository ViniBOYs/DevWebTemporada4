<script setup lang="ts">
  import { getParts } from '@/services/part.services';
  import PartSelector from '@/components/PartSelector.vue';
  import { type Ref, ref, reactive } from 'vue';
  import { Part, PartsResponse } from '@/models/parts';
  import { ItemCart } from '@/models/cart';
  
  const availableParts: Ref<PartsResponse> = ref(new PartsResponse());
    
  getParts().then((response)=>{      
      availableParts.value = response
    });
  
  // const selectedHead: Ref<Part> = ref(new Part());
  const selectedParts: reactive<ItemCart>({
    head: new Part(),
    leftArm: new Part(),
    rightArm: new Part(),
    torso: new Part(),
    base: new Part(),
  });

  const addCart = () => {
    console.log("SelectedHead: ",selectedParts.head);
  }
    
</script>

<template>
  <main>
    <h1 class="text-center mb-2">{{ $t("BUILD.TITLE") }} 🤖</h1>
      <section class="top-row flex justify-content-around">
        <PartSelector :parts="availableParts.heads" position="top" v-model="selectedParts.head"/>
      </section>
      <section class="middle-row flex justify-content-center">
        <PartSelector :parts="availableParts.arms" position="left" v-model="selectedParts.leftArm"/>
        <PartSelector :parts="availableParts.torsos" position="center" v-model="selectedParts.torso"/>
        <PartSelector :parts="availableParts.arms" position="right" v-model="selectedParts.rightArm"/>
      </section>
      <section class="bottom-row flex justify-content-around">
        <PartSelector :parts="availableParts.bases" position="bottom" v-model="selectedParts.base"/>
      </section>
      <div class="flex flex-row align-items-center justify-content-center">
        <button @click="addCart" id="add-cart" class="mt-4 app-dark-button p-3">
          {{ $t('BUILD.ADD_CART') }}
        </button>
      </div>
  </main>
</template>