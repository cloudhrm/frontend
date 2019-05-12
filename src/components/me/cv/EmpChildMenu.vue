<template>
  <v-tabs
    color="primary"
    slider-color="secondary"
  >
    <v-tab>
      <router-link
        tag="span"
        style="cursor: pointer"
        to="/cv/details"
      >details</router-link>
    </v-tab>
    <v-tab>
      <router-link
        tag="span"
        style="cursor: pointer"
        to="/cv/education"
      >education</router-link>
    </v-tab>
    <v-tab>
      <router-link
        tag="span"
        style="cursor: pointer"
        to="/cv/experience"
      >experience</router-link>
    </v-tab>
  </v-tabs>
</template>
