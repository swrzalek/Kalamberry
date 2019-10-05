<template>
    <div id="wordcomponent">
        <p class="font-weight-black display-4">{{card}}</p>
     </div>
    
</template>

<script>
import {mapState, mapActions} from 'vuex';
    export default {
        name: "WordComponent",
        props: {
            card: {
                type: String,
                required: true
            },
            isCurrent: {
                type:Boolean,
                required: true
            },
        }
    }
</script>

<style scoped>

</style>
