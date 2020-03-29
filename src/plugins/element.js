import Vue from 'vue';

import {
  Button,
  Input
} from 'element-ui';

Vue.use(Button);
Vue.use(Input);


Vue.prototype.$ELEMENT = {
  // size: 'small',
  zIndex: 3000
};
