import _Vue from "vue";
import BaseInput from './components/baseElements/inputs/BaseInput.vue'
import BaseCheckbox from './components/baseElements/inputs/BaseCheckbox.vue'
import BaseRadio from './components/baseElements/inputs/BaseRadio.vue'
import BaseDropdown from './components/baseElements/BaseDropdown.vue'
import Card from './components/baseElements/baseCards/BaseCard.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (vue: typeof _Vue) {
    vue.component(BaseInput.name, BaseInput)
    vue.component(BaseCheckbox.name, BaseCheckbox)
    vue.component(BaseRadio.name, BaseRadio)
    vue.component(BaseDropdown.name, BaseDropdown)
    vue.component('card', Card)
  }
}

export default GlobalComponents
