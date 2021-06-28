import _Vue from "vue";
import clickOutside from './directives/click-ouside';


/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
  install (vue: typeof _Vue) {
    vue.directive('click-outside', clickOutside);
  }
}

export default GlobalDirectives
