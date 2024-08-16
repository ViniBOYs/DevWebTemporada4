<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();


</script>

<template>
  <div class="flex flex-row align-itens-center justify-content-evenly">
    <section class="flex flex-column align-itens-center">
      <h1>{{ $t('HOME.TITLE') }}</h1>
      <button class="mt-4 app-dark-button" @click="router.push('/build')">{{ $t('HOME.ORDER') }}</button>
    </section>
    <section>
      <img src="/KevinMonster.png" alt="KevinMonster">
    </section>
  </div>
</template>

<style scoped lang="scss">
section{
  align-items: center;
  justify-content: center;
}
  h1{
    font-size: 5rem;
    width: 25rem;
    text-align: center;
  }
  img{
    width: 25rem;
  }
</style>
