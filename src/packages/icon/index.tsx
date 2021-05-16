import { Component } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import './index.scss'

@Component({name: 'jt-icon'})
class Icon extends tsx.Component<{}> {
  

  protected render() {
    return (
      <div>
        1
      </div>
    );
  }
}

export default Icon;