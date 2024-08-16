<script setup lang="ts">
    import { changeLanguage,type AvailableLangueges, i18nApplication } from '@/i18n/i18n';
    import { computed, type Ref, ref } from 'vue';

    
    const currentLanguage: Ref<AvailableLangueges> = 
        ref(i18nApplication.global.locale.value);

    const change = () => {
        if(currentLanguage.value == 'br'){
            changeLanguage('en');
        } 
        else {
            changeLanguage('br');
        }
        currentLanguage.value = i18nApplication.global.locale.value;
    }
    const flag = computed(()=>currentLanguage.value == 'br'? 'BrFlag.png' : 'UsFlag.png');

</script>

<template>
    <header class="flex flex-row align-items-center justify-content-between">
        <div class="leftMenu flex flex-row align-items-center">
            <img src="/OmnitrixLogo.png" alt="Omnitrix logo">
            <nav class="ml-5">
                <RouterLink to="/">{{ $t('MENU.HOME') }}</RouterLink>
                <RouterLink to="/cart">{{ $t('MENU.CART') }}</RouterLink>
                <RouterLink to="/build">{{ $t('MENU.BUILD') }}</RouterLink>
            </nav>
        </div>
        <img class="mr-5" id="flag" :src="flag" alt="flag" @click="change">
        
    </header>
</template>

<style scoped lang="scss">
    
    header{
        // background-color: red;
        height: 5rem;
        width: 100%;
        img{
            // background-color: blue;
            height: 4rem;
            padding-left: 2rem;
        }
        a{
            // background-color: aqua;
            margin: 2rem;
            text-decoration: none;
            font-size: 1.5rem;
            color: var(--app-dark-text-color);
        }
        .router-link-exact-active{
            font-weight: bold;
        }
        #flag{
            height: 1.5rem;
            width: 4.5rem;
            cursor: pointer;
        }
    }


</style>