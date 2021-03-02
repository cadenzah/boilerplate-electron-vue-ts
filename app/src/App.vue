<template>
  <div id="app">
    <Navigation></Navigation>
    <hr />
    <h2>Vue.js Boilerplate</h2>
    <p>This is a sample page written based on this boilerplate project. You can try this out. Just clone it and make your own project! </p>
    <router-view class="router-page"></router-view>
    <p class="routing-below-indicator">Routed pages will be shown above. How can you recognize it? Well, you will see... blue...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  Navigation
} from '@/components';

@Component({
  components: {
    Navigation,
  }
})
export default class App extends Vue {
  public message: string = '';

  created() {
    console.log(this);
  }
}
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'Roboto', sanf-serif;
  color: #3a3a3a;
}

.routing-below-indicator {
  color: coral;
  text-decoration: underline;
}
.router-page {
  background-color: cornflowerblue;
  margin: 1rem;
}
</style>
