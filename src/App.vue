<template>
  <v-app>
    <!-- Horizontal navbar -->
    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
    >
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          prepend-icon="account_circle"
          value="true"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Me</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-group
            no-action
            sub-group
            value="true"
          >
            <template v-slot:activator>
              <v-list-tile to="/cv">
                <v-list-tile-title>CV</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile to="/cv">
              <v-list-tile-title>Education</v-list-tile-title>
              <v-list-tile-action>
                <v-icon>school</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      fixed
      app
      color="primary"
      clipped-left
      dark
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          Cloud HRM
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        name="search"
        id="search"
        flex
        append-icon="search"
        placeholder="Search"
        color="white"
        single-line
        hide-details
        class="hidden-xs-only"
      ></v-text-field>
      <v-btn
        v-if="(this.$route.path !== '/login') && (!logged)"
        to="/login"
        flat
      >
        <v-icon
          left
          class="hidden-sm-only"
        >lock_open</v-icon>
        {{ $t("auth.sigin") }}
      </v-btn>
      <v-menu
        v-if="logged"
        offset-y
      >
        <v-btn
          flat
          slot="activator"
        >
          <v-avatar size="30px">
            <v-gravatar :email="email" />
          </v-avatar>
        </v-btn>
        <v-list>
          <v-list-tile @click="logOut()">
            <v-list-tile-title class="text-xs-center">Iziet</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <!-- App content -->
    <main>
      <v-content>
        <router-view />
      </v-content>
    </main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  private drawer = false
}

</script>
