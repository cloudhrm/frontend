<template>
  <v-app>
    <!-- Horizontal navbar -->
    <v-navigation-drawer
      app
      permanent
      mini-variant
    >
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.icon"
        >
          <v-list-tile
            :to="item.action"
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
import HrmLogo from './components/HrmLogo.vue'


@Component({
  components: {
    HrmLogo
  }
})
export default class App extends Vue {
  private drawer = false
  private items = [
    {
      action: '/',
      icon: 'account_circle',
      title: 'Me',
      items: [
        {
          action: '/cv/details',
          icon: 'assignment_ind',
          title: 'Ciriculum Vitae',
        }
      ]
    }, {
      action: '/admin',
      icon: 'vpn_key',
      title: 'Admin',
      items: [
        {
          action: '/admin/users',
          icon: 'supervised_user_circle',
          title: 'Manage Users',
        }
      ]
    }
  ]
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
