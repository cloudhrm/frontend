<template>
  <v-container>
    <router-view></router-view>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator'
import EmpEmployeeDetails from './EmpEmployeeDetails.vue'
import EmpEducation from './EmpEducation.vue'
import EmpExperience from './EmpExperience.vue'

@Component({
  name: 'CV',
  components: {
    EmpEmployeeDetails,
    EmpEducation,
    EmpExperience
  }
})
export default class CV extends Vue { }

</script>
