<template>
  <v-list>
    <v-list-tile avatar>
      <v-list-tile-content>
        <v-list-tile-title>School</v-list-tile-title>
        <v-list-tile-sub-title>Degree</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator'

@Component({
  name: 'EmpEducation'
})
export default class EmpEducation extends Vue { }
</script>
