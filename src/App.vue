<template>
  <v-app>
    <!-- Horizontal navbar -->
    <v-navigation-drawer
      v-if="logged"
      app
      clipped
      v-model="drawer"
    >
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.icon"
        >
          <v-list-tile
            to="/"
            slot="activator"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="subItem.action"
            sub-group
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
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
      <v-toolbar-side-icon
        v-if="logged"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
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
        v-if="logged"
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
            <v-gravatar :email="me.user.email" />
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
        <transition name="fade">
          <router-view />
        </transition>
      </v-content>
    </main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import users from './store/users.module'


@Component({})
export default class App extends Vue {
  private drawer = false
  private items = [
    {
      action: '/',
      icon: 'account_circle',
      title: 'Me',
      items: [
        {
          action: '/cv',
          icon: 'assignment_ind',
          title: 'Ciriculum Vitae'
        }
      ]
    }
  ]

  get logged() {
    return users.logged
  }

  get me() {
    return users.me
  }

  private logOut() {
    users.logOut()
    this.$router.push('/login')
  }

}

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
