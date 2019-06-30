<template>
  <v-app>
    <!-- Horizontal navbar -->
    <v-navigation-drawer
      app
      permanent
      mini-variant
    >
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.action"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
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


@Component({
  components: {
  }
})
export default class App extends Vue {
  private drawer = false
  private items = [
    {
      action: '/',
      icon: 'list',
      title: 'List',
    }, {
      action: '/delivery',
      icon: 'assignment_ind',
      title: 'Delivery',
    }, {
      action: '/about',
      icon: 'question_answer',
      title: 'about',
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
