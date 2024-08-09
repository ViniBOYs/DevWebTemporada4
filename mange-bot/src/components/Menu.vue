<script setup lang="ts">

</script>

<template>
    <header class="flex flex-row align-items-center justify-content-start">
        <img src="/OmnitrixLogo.png" alt="Omnitrix logo">
        <nav class="ml-5">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/cart">Cart</RouterLink>
            <RouterLink to="/build">Build</RouterLink>
        </nav>
    </header>
</template>

<style scoped lang="scss">
    
    header{
        height: 5rem;
        width: 40rem;
        img{
            height: 4rem;
            padding-left: 2rem;
        }
        a{
            margin: 2rem;
            text-decoration: none;
            font-size: 1.5rem;
            color: var(--app-dark-text-color);
        }
        .router-link-exact-active{
            font-weight: bold;
        }
    }


</style>