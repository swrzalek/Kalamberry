<template>
    <div id="wordcomponent">                    
         
                    <p class="font-weight-black display-2 align-center blur pt-4">{{card}}</p>
                    
     </div>
    
</template>

<script>
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
.blur {
    text-align: center;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
   color: transparent;
   text-shadow: 5px 5px 35px rgba(0,0,0,0.5);
    transition: 1s;
}
.blur:hover {
    color:black;
    text-shadow: 0 0 0 rgba(0,0,0,0.5);
}
</style>
