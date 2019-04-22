<template>
  <v-container>
    <h1>This is an Home page</h1>
    <v-btn color="primary">text</v-btn>
  </v-container>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue { }
</script>
