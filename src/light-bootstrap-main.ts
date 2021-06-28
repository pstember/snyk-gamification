import _Vue from "vue";
// import VTooltip from 'v-tooltip'
// Notifications plugin
import Notifications from './components/baseElements/notificationPlugin'
// A plugin file where you could register global components used across the app
import GlobalComponents from './globalComponents'
// A plugin file where you could register global directives
import GlobalDirectives from './globalDirectives'
// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from './components/baseElements/sidebarPlugin'

// asset imports
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/light-bootstrap-dashboard.scss'
import './assets/css/demo.css'

/**
 * This is the main Light Bootstrap Dashboard Vue plugin where dashboard related plugins are registerd.
 */
export default {
  install (vue: typeof _Vue) {
    vue.use(GlobalComponents)
    vue.use(GlobalDirectives)
    vue.use(SideBar)
    vue.use(Notifications)
//    Vue.use(VTooltip)
  }
}
