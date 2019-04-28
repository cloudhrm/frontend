<template>
  <v-container>
    <v-card>
      <v-toolbar
        color="primary"
        dark
      >
        <v-toolbar-title>Profile</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <emp-employee-details></emp-employee-details>
      </v-card-text>
    </v-card>
    <br>
    <v-card>
      <v-toolbar
        color="primary"
        dark
      >
        <v-toolbar-title>Experience</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          dark
          icon
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <emp-experience></emp-experience>
      </v-card-text>
    </v-card>
    <br>
    <v-card>
      <v-toolbar
        color="primary"
        dark
      >
        <v-toolbar-title>Education</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          dark
          icon
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <emp-education></emp-education>
      </v-card-text>
    </v-card>
    <br>
    <v-card>
      <v-toolbar
        color="primary"
        dark
      >
        <v-toolbar-title>Skills</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn
          dark
          icon
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
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
