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
                  class="font-weight-black display-4 white--text pointer"
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

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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

</style>
