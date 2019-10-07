<script>
import WordLoader from '../shared/WordLoader'
import BeforeStartModal from '../shared/BeforeStartModal'
import ActionButtons from '../shared/ActionButtons'
import {
  mapActions,
  mapGetters,
  mapMutations,
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
        ...mapActions(['loadNextCard','fetchAllWords']),
    },
    computed: {
        ...mapState(['visibleCards'])
    },
    components: {
        WordLoader,
        ActionButtons,
        BeforeStartModal
    },
    created() {
            this.fetchAllWords();            
        }
}
</script>
<template>
  <div id="charades" class="bg">
      <before-start-modal v-if="showModal" @close="showModal = false; "></before-start-modal>
      <v-container fill-height grid-list-md text-xs-center>
          <v-layout row wrap align-center>
              <v-flex xs12>
                  <word-loader
                  @correctAnswer="handleCorrectAnswer"
                  :cards="visibleCards"></word-loader>
              </v-flex>
              <v-flex xs12>
                  <action-buttons></action-buttons>
              </v-flex>               
          </v-layout>
      </v-container>
  </div>
</template>

<style lang="scss">
.bg {
    background:linear-gradient(to right,#55bdb7, #6bced4);
    flex: 1 1 auto;
}
</style>