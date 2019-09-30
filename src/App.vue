<template>
  <v-app>
  <app-header/>
    <router-view/>
  </v-app>
</template>

<script>

import AppHeader from './components/shared/AppHeader';
export default {
  name: 'App',
  components: {
    AppHeader,
  },
  data () {
    return {
      //
    }
  }
}
</script>
