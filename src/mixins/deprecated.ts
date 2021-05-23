import { tip } from '@utils/helpers/debug';
import { kebab } from '@utils/lang/string';

export default {
  methods: {
    _checkDeprecated() {
      const props = this.$options.props;
      const componentName = this.$options.name;

      Object.entries(props).forEach(([key, prop]) => {
        //@ts-ignore
        const deprecated = prop.deprecated;

        if (deprecated && this[key] !== undefined) {
          tip(`The property "${kebab(key)}" is deprecated, please use the recommended property "${deprecated.replacedBy}" to replace it. Details could be found in http://172.16.0.229/jetair-ui/#/en-US/docs/${componentName.substr(5)}`, componentName);
        }
      });
    }
  },
  mounted() {
    this._checkDeprecated();
  }
};
