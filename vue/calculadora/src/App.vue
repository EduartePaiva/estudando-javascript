<template>
    <main>
        <h1>Calculador</h1>
        <Calculator/>

    </main>

        
</template>

<script setup>
import Calculator from './main/Calculator.vue'



</script>

<style lang="scss" scoped>
main{
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: white;
    background: linear-gradient(to right, rgb(83,105,118), rgb(41,46,73));
}






</style>