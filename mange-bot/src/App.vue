<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import FooterBot from './components/FooterBot.vue';
  import Menu from './components/Menu.vue';
</script>

<template>
  <main id="card-app">
    <div id="content-app">
      <Menu />
      <RouterView />
    </div>
    <footer class="flex flex-row align-items-end justify-content-end">
      <div class="footer-bots flex flex-row justify-content-evenly">
      <FooterBot img="Ben_Origina.webp" 
        :text="$t('FOOTER.ABOUT')" />
      <FooterBot img="Ben10adolecente.webp" 
        :text="$t('FOOTER.FOUND')" />
      <FooterBot img="KevinPose2.webp" 
        :text="$t('FOOTER.OMG')" />
      </div>
      <img id="circle" src="/icon2.png" alt="circle">
    </footer>
  </main>

</template>



<style scoped lang="scss">

  #card-app{
    height: 90%;
    width: 80%;
    background-color: var(--app-card-background);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 1.5rem;
    // padding: 2%;
  }

  #content-app{
    height: calc(100% - 10rem);
  }

  footer{
    width: 100%;
    height: 20%;
    max-height: 10rem;
    background-color: var(--app-footer-background);
    border-radius: 0 0 1.5rem 1.5rem;

    .footer-bots{
      height: 80%;
      width: 100%;
      margin: auto;
    }

    #circle{
      height: 100.5%;
      margin-right: 1.5rem;
    }
  }

  @media (max-height: 880px){
    #content-app{
      height: 80%;
    }
  }

</style>
