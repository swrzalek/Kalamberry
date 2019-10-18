<template>
    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="420"
      persistent
    >
      <v-card>
        <v-card-title class="headline">Niestety skończyły nam się słowa :(</v-card-title>

        <v-card-text>
          Możesz zmienić kategorię lub wybrać inny poziom!.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red lighten-2"
            text
            @click="$router.push('/')"
          >
            Nie tym razem
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="$router.push('setup')"
          >
            Bardzo chętnie
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
 import EventBus from '../../event-bus'
 import * as types from '../../store/constants';
 import { mapState } from 'vuex';
  export default {
    computed: {
        ...mapState(['gameState']),
        dialog() {
            return this.gameState === "finished"
        }
    }
  }
</script>