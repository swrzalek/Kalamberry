<script>
import WordLoader from '../shared/WordLoader'
import BeforeStartModal from '../shared/BeforeStartModal'
import ActionButtons from '../shared/ActionButtons'
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
    data: () => ({
        showModal: true,
    }),    
    methods: {
        handleCorrectAnswer() {
            this.showNextCard()
        },
        showNextCard() {
            this.loadNextCard();
        },
        ...mapActions(['loadNextCard']),
    },
    computed: {
        ...mapState(['visibleCards','isLoading'])
    },
    components: {
        WordLoader,
        ActionButtons,
        BeforeStartModal
    },
    beforeCreate(){
        document.getElementById("charades").className = 'main';
    },
    watch:{
        isLoading(){
            this.prepareGame();
        }
        },
}
</script>
<template>
  <div id="charades" >
    <before-start-modal v-if="showModal" @close="showModal = false; "></before-start-modal>
    <v-content>
        
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <div class="wz-stack" data-stack-status="">
            <div class="wz-stack-card" data-card="1">
            </div>
            <div class="wz-stack-card" data-card="2">
            </div>
            <div class="wz-stack-card" data-card="3">
            </div>
            </div>
            <v-card class="elevation-2">
              
              <v-card-text  class="text-center">
               <word-loader
                  @correctAnswer="handleCorrectAnswer"
                  :cards="visibleCards"></word-loader>
              </v-card-text>
            </v-card>           
               <v-flex 
               class="mt-4"
          ><div class="text-xs-center">
               <action-buttons></action-buttons>
            </div>
            
          </v-flex>
          </v-flex>
          
            
          
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<style lang="scss">
.wz-stack {
  display:flex;
  width: 300px;
  z-index: 0;
  margin : 0 auto;
  padding: 25px 0 0 0;
  transition: all 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940);

  &.switch-on {
    .wz-stack-card {
      &:nth-child(1){
        background-color: lighten(grey, 0%);
        transform: scale(1) translate(0, 0);
      }
      &:nth-child(2){
        background-color: lighten(blue, 0%);
        transform: scale(1) translate(0, 100%);
      }
      &:nth-child(3){
        background-color: lighten(blue, 0%);
        transform: scale(1) translate(0, 200%);
      }
    }
  }
  .wz-stack-card {
    transition: all 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: grey;
    min-width: 300px;
    min-height: 200px;
    border-radius: 15px;
    top: 10px;

    &:nth-child(1){
      z-index: 5;
      background-color: lighten(grey, 0%);
      transform: scale(1) translate(0, 0);
    }

    &:nth-child(2){
      top: 26px;
      z-index: 2;
      background-color: lighten(grey, 10%);
      transform: scale(0.9) translate(0, 10px);
    }

    &:nth-child(3){
      top: 46px;
      transform: scale(0.8) translate(0, 10px);
      z-index: 1;
      background-color: lighten(grey, 20%);
    }

  }
}

.content {
  display: flex;
}

</style>