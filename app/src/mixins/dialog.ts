// mixin's option will be directly merged into the component which uses the mixin
// if the option props' name is overlapped, the priority goes to the component; mixin will be ignored
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DialogMixin extends Vue {
  public dialog: boolean = true;
  public test: string = '';

  showDialog(): void {
    this.dialog = true;
  }
  closeDialog(): void {
    this.dialog = false;
  }
};
