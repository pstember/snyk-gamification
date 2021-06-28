import _Vue from "vue";
import Sidebar from './BaseSideBar.vue'
import SidebarLink from './BaseSidebarLink.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/admin/overview'
    }
  ],
  displaySidebar (value: boolean) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (vue: typeof _Vue) {
    vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    vue.component('side-bar', Sidebar)
    vue.component('sidebar-link', SidebarLink)
  }
}

export default SidebarPlugin
