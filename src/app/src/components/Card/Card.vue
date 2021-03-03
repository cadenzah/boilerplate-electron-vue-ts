<template>
  <div class="card">
    <h3>Card.vue</h3>
    <p>&lt;Card&gt; component receives a `message` props which can be used inside. BTW... where is the message?</p>
    <p>Child counter: {{getCounter}}</p>
    <button @click="addCounter(3)">+</button>
    <button @click="subCounter(3)">-</button>

    <!-- Custom directive practice-->
    <p class="message" v-conditional:[getCounter]="10">You can check this counter if it's 10</p>
    <p v-conditional:[getCounter]="20">You can check this counter if it's 20</p>

    <p class="message" v-if="_dialog">{{ message }}</p>
    <button @click="showMessage">Show</button>
    <button @click="hideMessage">Hide</button>
    <p>You can check directive and mixin feature in &lt;Card&gt; component.</p>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Mixins } from 'vue-property-decorator';

import { mapGetters, mapMutations } from 'vuex';
import { dialogMixin } from '@/mixins';

const mixins = Mixins(dialogMixin)

@Component
export default class Card extends mixins {
  @Prop({
    default: {
      message: '',
    },
  })
  public message!: string;

  // computed
  get _dialog(): boolean {
    return this.dialog;
  }
  get getCounter(): number {
    return this.$store.state.mail.counter;
  }

  showMessage(): void {
    this.showDialog();
  }

  hideMessage(): void {
    this.closeDialog();
  }

  addCounter(val: number): void {
    this.$store.commit('mail/addCounter', val);
  }

  subCounter(val: number): void {
    this.$store.commit('mail/subCounter', val);
  }

}

// export default {
//   computed: {
//     ...mapGetters([
//       'getCounter'
//     ])
//   },
//   methods:{
//     ...mapMutations([
//       'addCounter',
//       'subCounter',
//     ]),
//   }
// };
</script>

<style>
.card {
  background-color: thistle;
  border: 2px solid 5a5a5a;
  margin: 1rem;
}

.message {
  background-color: violet
}

</style>
