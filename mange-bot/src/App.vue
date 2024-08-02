<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main id="card-app">
    <div id="content-app">
      <header>
        <div class="wrapper">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/cart">Cart</RouterLink>
            <RouterLink to="/build">Build</RouterLink>
          </nav>
        </div>
      </header>
      <RouterView />
    </div>
    <footer>

    </footer>
  </main>

</template>



<style scoped>

</style>
