<template>
  <v-tabs
    color="primary"
    slider-color="secondary"
  >
    <v-tab to="/cv/details">
      details
    </v-tab>
    <v-tab to="/cv/education">
      education
    </v-tab>
    <v-tab to="/cv/experience">
      experience
    </v-tab>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator'

@Component({
  name: 'EmpChildMenu'
})
export default class EmpChildMenu extends Vue {
}
</script>
