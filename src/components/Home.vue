<template>
  <v-container>
    <h1>This is an Home page</h1>
    <v-btn color="primary">text</v-btn>
  </v-container>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { gql } from 'apollo-boost'

@Component({
  components: {
  },
  // apollo: {
  //   query: gql`
  //     query {
  //       me {
  //         name
  //         email
  //         groups {
  //           name
  //         }
  //       }
  //     }
  //   `
  // }
})
export default class Home extends Vue { }
</script>
