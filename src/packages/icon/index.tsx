import { Component, Prop } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import './index.scss'

@Component({name: 'jt-icon'})
class Icon extends tsx.Component<{}> {
  @Prop() public type!: ButtonType;
  @Prop() public size!: ButtonSize;
  @Prop({ default: 0 }) public num!: number;

  protected render() {
    return (
      <div>
        <p>id:{this.num}</p>
        {this.type && <p>type:{this.type}</p>}
        {this.size && <p>size:{this.size}</p>}
      </div>
    );
  }
}

export default Icon;