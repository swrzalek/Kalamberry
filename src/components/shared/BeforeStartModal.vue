<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">      
         <div class="modal-body">
            <slot name="body">
                <v-text-field 
                  color="success"
                  v-if="isLoading"
                  loading
                  disabled
                >
                </v-text-field>
                <p 
                  class="font-weight-black display-4 white--text pointer anim"
                  v-if="!isLoading"
                  @click="$emit('close'); started()"
                >
                START
                </p>            
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>   
</template>

<script>
import {  mapState,
          mapActions } from 'vuex';
export default {
  name: "BeforeStartModal",
  computed: {
    ...mapState(['isLoading'])
  },  
  methods: {            
    ...mapActions(['startGame','prepareGame']),
    started(){
        this.startGame();
    },
  },
  watch: {
    isLoading(){
        this.prepareGame();
      }
  },
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  border-radius: 2px;
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

 .anim {

/* Clip Background Image */

	  background: url(http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png) repeat-y;
	  -webkit-background-clip: text;
	  background-clip: text;

/* Animate Background Image */

	  -webkit-text-fill-color: transparent;
	  -webkit-animation: aitf 80s linear infinite;

/* Activate hardware acceleration for smoother animations */

	  -webkit-transform: translate3d(0,0,0);
	  -webkit-backface-visibility: hidden;

  
}

/* Animate Background Image */

@-webkit-keyframes aitf {
	0% { background-position: 0% 50%; }
	100% { background-position: 100% 50%; }
}


</style>
