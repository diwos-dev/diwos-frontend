<template>
  <router-view v-slot="{ Component }" class="routerView">  
    <transition name="slide" mode="out-in">
      <component :is="Component" />
    </transition>
    <div class="container_ping">
      <div class="showing_ping">
        ping: {{ping}}
      </div>
    </div>
  </router-view>
</template>

<script>

import './game'
import './assets/css/App.scss'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  methods: {
    
  },
  computed:{
        ...mapGetters({
            ping: 'user/userPing'
        }),
    },

  data: () => {
    return {
      connection: null
    }
  },

  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    },
  },
}
</script>

<style scoped>
.container_ping{
  display: flex;
  justify-content: flex-end;
}

.showing_ping{
  text-align: start;
  width: 100px;
  padding: 3px;
  font-size: 13px;
  border: 1px solid black;
  border-radius: 7px;
}
</style>