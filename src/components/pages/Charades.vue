<script>
import WordLoader from '../shared/WordLoader'
import BeforeStartModal from '../shared/BeforeStartModal'
import ActionButtons from '../shared/ActionButtons'
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  components: {
    WordLoader,
    ActionButtons,
    BeforeStartModal
  },
  data: () => ({
    showModal: true,
  }),    
  methods: {
    ...mapActions(['loadNextCard']),
    handleCorrectAnswer() {
        this.showNextCard()
    },
    showNextCard() {
        this.loadNextCard();
    },        
  },
  computed: {
    ...mapState(['visibleCards','isLoading']),
    mask: function() {
      return this.showModal ? 'mask-blur' : '';
    },        
  },   
}
</script>
<template>
  <div id="charades" >
    <before-start-modal v-if="showModal" @close="showModal = false; "></before-start-modal>
    <v-content v-bind:class="mask">        
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
            <v-card 
               class="elevation-2"
            >              
              <v-card-text
                class="text-center"
                >
                <word-loader
                  @correctAnswer="handleCorrectAnswer"
                  :cards="visibleCards"
                ></word-loader>
              </v-card-text>
            </v-card>            
            <v-flex 
              class="mt-4"
            >
            <div 
              class="text-center"
            >
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
.content {
  display: flex;
}
.mask-blur {
      -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
}
</style>