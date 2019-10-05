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
        ...mapActions(['loadNextCard']),
    },
    computed: {
        ...mapState(['visibleCards'])
    },
    components: {
        WordLoader,
        ActionButtons,
        BeforeStartModal
    }
}
</script>
<template>
  <div id="charades">
      <before-start-modal v-if="showModal" @close="showModal = false"></before-start-modal>
      <v-container container grid-list-xl>
          <v-layout wrap>
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

</style>