<template>
  <div>
    <h2>Test Page</h2>
    <p>You can go back to previous page /w Vue Router.</p>
    <button @click="navigatePrev">Back</button>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Mixins } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
  
  navigatePrev(): void {
    this.$router.go(-1);
  }
}
</script>

<style>

</style>
