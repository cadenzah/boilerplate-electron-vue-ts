<template>
  <div>
    <h2>Root Page</h2>
    <p>Check the &lt;Card /&gt; component, you will see how Vuex work gorgeously.</p>
    <p>Type in any string!: <input v-model="message" /></p>
    <card :message="message"></card>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Mixins } from 'vue-property-decorator';
import { Card } from '@/components';

@Component({
  components: {
    Card,
  },
})
export default class Root extends Vue {
  public message: string = `${process.env.__NOT_USED__}`;

  navigateTest():void {
    this.$router.push('/test');
  }
}
</script>

<style>

</style>
