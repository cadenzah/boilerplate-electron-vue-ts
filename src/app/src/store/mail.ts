import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'mail' })
export default class Mail extends VuexModule {
  counter: number = 0;

  get getCounter(): number {
    return this.counter;
  }

  @Mutation
  addCounter(val: number): number {
    return this.counter = this.counter + val;
  }

  @Mutation
  subCounter(val: number): number {
    return this.counter = this.counter - val;
  }
};
