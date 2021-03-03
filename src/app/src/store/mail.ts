import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { ipcRenderer } from 'electron';

@Module({ namespaced: true, name: 'mail' })
export default class Mail extends VuexModule {
  counter: number = 0;

  get getCounter(): number {
    return this.counter;
  }

  @Mutation
  addCounter(val: number): number {
    ipcRenderer.send('test', { value: this.counter + val });
    return this.counter = this.counter + val;
  }

  @Mutation
  subCounter(val: number): number {
    ipcRenderer.send('test', { value: this.counter - val });
    return this.counter = this.counter - val;
  }
};
