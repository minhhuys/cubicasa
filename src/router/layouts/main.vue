<script>
import { layoutComputed } from '@state/helpers'
import Vertical from '@router/layouts/vertical'
import Horizontal from '@router/layouts/horizontal'
import SideBar from '@components/side-bar'

export default {
  components: { Vertical, Horizontal, SideBar },
  data() {
    return {
      isMenuCondensed: false,
			isMobileMenuOpened: false,
			user: this.$store ? this.$store.state.auth.currentUser : {} || {},
			layout: this.$store ? this.$store.state.layout.layoutType : null || null,
			theme: this.$store
				? this.$store.state.layout.leftSidebarTheme
				: null || null,
			type: this.$store
				? this.$store.state.layout.leftSidebarType
				: null || null,
			width: this.$store ? this.$store.state.layout.layoutWidth : null || null,
    }
  },
  computed: {
    ...layoutComputed,
  },
  	methods: {
		toggleMenu() {
			document.body.classList.toggle('left-side-menu-condensed')
			this.isMenuCondensed = !this.isMenuCondensed
			if (
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
					navigator.userAgent
				)
			) {
				this.isMobileMenuOpened = !this.isMobileMenuOpened
				document.body.classList.toggle('sidebar-enable')
				console.log('ref', this.$refs.vertical)
			// 	if (window.screen.width <= 425) {
			// 		document.body.classList.remove('left-side-menu-condensed')
			// 	}
			}
		},
		toggleRightSidebar() {
			document.body.classList.toggle('right-bar-enabled')
		},
		hideRightSidebar() {
			document.body.classList.remove('right-bar-enabled')
		},
	},
}
</script>

<template>
  <div>
    <SideBar
		:is-condensed="isMenuCondensed"
		:theme="leftSidebarTheme"
		:type="leftSidebarType"
		:width="layoutWidth"
		:user="user"
	/>
    <Vertical v-if="layoutType === 'vertical'" ref="vertical" :layout="layoutType" >
      <slot />
    </Vertical>

    <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
      <slot />
    </Horizontal>
  </div>
</template>
