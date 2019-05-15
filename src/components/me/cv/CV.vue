<template>
  <v-container>
    <router-view></router-view>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator'

@Component({
  name: 'CV'
})
export default class CV extends Vue {
}

</script>
