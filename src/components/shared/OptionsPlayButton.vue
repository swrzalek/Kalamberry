<template>
    <div class="text-center my-3">
         <v-btn outlined 
         @click="$router.push('kalamberry'); fetch()"
         :disabled="!valid"
         >GRAJ</v-btn>
     </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions(['fetchCategorizedWords']),
        fetch() {
            this.fetchCategorizedWords();
        },
    },
    props: {
        valid: Boolean,
    }    
}
</script>