<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>
        <h1>You do not have any personal information</h1>
      </v-card-title>
      <v-card-text>
        Your CV is empty.<br>
        Please start with filling in your employee details
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="success"
          to="/cv/details"
        >Go to CV</v-btn>
      </v-card-actions>
    </v-card>

  </v-container>
</template>
