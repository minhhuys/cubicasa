<script>
import { layoutComputed } from '@state/helpers'
// import Topbar from '@components/topbar'
// import SideBar from '@components/side-bar'
// import Rightsidebar from '@components/right-sidebar'
import LeftSidebar from '@components/left-sidebar'

import Footer from '@components/footer'
import Header from "@components/header"

export default {
	components: {
		Footer, 
		Header, 
		LeftSidebar,
		// Rightsidebar
	},
	data() {
		return {
			
		}
	},
	computed: {
		...layoutComputed,
	},
	created: () => {
		document.body.classList.remove('authentication-bg')
		document.body.classList.remove('authentication-bg-pattern')
		document.body.removeAttribute('data-layout')
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
				navigator.userAgent
			)
		) {
			if (window.screen.width >= 728 && window.screen.width <= 1028) {
				document.body.classList.add('left-side-menu-condensed')
			}
		}
	},
	methods: {
		toggleMenu() {
			document.body.classList.toggle('left-bar-enabled')
		},
		hideLeftSidebar() {
			document.body.classList.remove('left-bar-enabled')
		},
	},
}
</script>

<template>
	<div id="wrapper">
		<Header />
		<div class="content-page">
			<div class="content">
				<!-- Start Content-->
				<div class="container-fluid">
					<slot />
				</div>
			</div>
			<Footer />
		</div>
		<LeftSidebar />
	</div>
</template>
