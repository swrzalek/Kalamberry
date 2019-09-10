<template>
    <v-card-text class="px-0 display-2">{{word}}</v-card-text>
</template>

<script>
    export default {
        name: "SimpleWordComponent",
        props: {
            word: String
        }
    }
</script>

<style scoped>

</style>
