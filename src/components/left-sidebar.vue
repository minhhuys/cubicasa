<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { authComputed, layoutMethods } from '@state/helpers'

/**
 * A right sidebar component
 */
export default {
  components: { VuePerfectScrollbar },
  data() {
    return {
      config: {
        handler: this.handleLeftBarClick,
        middleware: this.middleware,
        events: ['click'],
      },
      layout: this.$store ? this.$store.state.layout.layoutType : {} || {},
    }
  },
  computed: {
    ...authComputed,
  },
  methods: {
    ...layoutMethods,
    hide() {
      this.$parent.hideLeftSidebar()
    },
    handleLeftBarClick(e, el) {
      if (e.target && e.target.classList.contains('leftbar-overlay'))
        this.$parent.hideLeftSidebar()
    },
    middleware(event, el) {
      return !event.target.classList.contains('toggle-left')
    },
    changeLayout(layout) {
      this.changeLeftSidebarTheme({ leftSidebarTheme: 'default' })
      this.changeLayoutWidth({ layoutWidth: 'default' })
      this.changeLayoutType({ layoutType: layout })
      this.hide()
    },
    changeTheme(theme) {
      this.changeLayoutType({ layoutType: 'vertical' })
      this.changeLeftSidebarTheme({ leftSidebarTheme: theme })
      this.hide()
    },
    changeType(condensed) {
      this.changeLayoutType({ layoutType: 'vertical' })
      this.changeLeftSidebarType({ leftSidebarType: condensed })
      this.hide()
    },
    changeWidth(boxed) {
      this.changeLayoutType({ layoutType: 'vertical' })
      this.changeLayoutWidth({ layoutWidth: boxed })
      this.hide()
    },
  },
}
</script>

<template>
  <div>
    <!-- Left Sidebar -->
    <div v-click-outside="config" class="left-bar">
      <div class="slimscroll-menu pb-5">
        <VuePerfectScrollbar style="height: 100%">
          <div class="p-3 logo">
            <a href="javascript: void(0);">
              <img
                src="https://brand-assets-cc.s3.amazonaws.com/CUBICASA/cubicasa-logo-white.svg" width="160"
              />
            </a>
          </div>
          <div class="px-3 py-2">
            <a href="javascript;:">
                <span class="mb-0">List & Search</span> 
                <feather type="list" class="icon-xs mr-1 align-middle"></feather>
            </a>
            
          </div>
          <div class="px-3 py-2">
            <a href="javascript;:">
                <span class="mb-0">New Order</span>
                <feather type="plus" class="icon-xs mr-1 align-middle"></feather>
            </a>
          </div>
        </VuePerfectScrollbar>
      </div>
      <!-- end slimscroll-menu-->
    </div>
    <!-- Left-bar -->

    <!-- Left bar overlay-->
    <div class="leftbar-overlay"></div>
  </div>
</template>
