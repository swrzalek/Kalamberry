<script>
import WordLoader from '../shared/WordLoader'
import BeforeStartModal from '../shared/BeforeStartModal'
import ActionButtons from '../shared/ActionButtons'
import EndDialog from '../shared/EndDialog'
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  components: {
    WordLoader,
    ActionButtons,
    BeforeStartModal,
    EndDialog
  },
  data: () => ({
    showModal: true,
  }),    
  methods: {
    ...mapActions(['loadNextCard','nextRound','pauseGame']),
    handleCorrectAnswer() {
        this.showNextCard()
    },
    showNextCard() {
        this.nextRound();
        this.loadNextCard();
    },        
  },
  computed: {
    ...mapState(['visibleCards','isLoading','currentRound']),
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
      <v-toolbar dense
     color="transparent"
     class="elevation-0">
        <v-app-bar-nav-icon><v-icon @click="$router.push('setup');">mdi-settings</v-icon></v-app-bar-nav-icon>
      </v-toolbar>
       <end-dialog ></end-dialog>       
      <v-container
        fluid
        fill-height
        class="mt-n8"
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
.transparent {
  background-color: transparent!important;
  border-color: transparent!important;
 }
</style>