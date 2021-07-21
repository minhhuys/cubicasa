<template>
    <header class="d-flex">
        <div class="header-left d-flex desktop-mode">
            <a href="/" class="header-item">
                <img src="https://brand-assets-cc.s3.amazonaws.com/CUBICASA/cubicasa-logo-white.svg" alt="" width="100">
            </a>
            <a href="javascript;:" class="header-item">
                <feather type="list" class="icon-xs mr-1 align-middle"></feather>
                <span class="mb-0">List & Search</span> 
            </a>
            <a href="javascript;:" class="header-item">
                <feather type="plus" class="icon-xs mr-1 align-middle"></feather>
                <span class="mb-0">New Order</span>
            </a>
        </div>
        <div class="header-left mobile-mode">
            <div 
                class="button-menu-mobile open-left d-flex" 
				@click="toggleMenu"
            >
                <feather type="menu" class="icon-xs align-middle"></feather>
            </div>
        </div>
        <div class="header-right">

            <b-nav-item-dropdown
                bottom
                variant="white"
                class="header-item d-flex"
                menu-class="dropdown-lg"
            >
                <template v-slot:button-content>
                    <feather type="user" class="icon-xs mr-1 align-middle"></feather>
                    <span>Nguyễn Minh Huy</span>
                </template>

                <b-dropdown-text
                    href="javascript:void(0);"
                    class="menu-item"
                >
                    <a href="javascript;:">
                        <feather type="user" class="icon-xs mr-2 align-middle"></feather>
                        <span class="mb-0">My profile</span>
                    </a>  
                </b-dropdown-text>

                <!-- item-->
                <b-dropdown-text
                    href="javascript:void(0);"
                    class="menu-item"
                >
                    <a href="javascript;:">
                        <feather type="settings" class="icon-xs mr-2 align-middle"></feather>
                        <span class="mb-0">Settings</span>
                    </a>
                </b-dropdown-text>

                <b-dropdown-text
                    href="javascript:void(0);"
                    class="menu-item"
                >
                    <a href="javascript;:">
                        <feather type="log-out" class="icon-xs mr-2 align-middle"></feather>
                        <span class="mb-0">Log out</span>
                    </a>
                </b-dropdown-text>
            </b-nav-item-dropdown>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        toggleMenu() {
			this.$parent.toggleMenu()
		},
    }
}
</script>