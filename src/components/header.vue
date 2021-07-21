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

<style lang="scss">
header {
    background-color: #163241;
    height: 40px;
    justify-content: space-between;

    .header-left,
    .header-right {
        align-items: center;
        color: white;
        font-size: 16px;
        position: relative;

        a {
            color: #fff;
        }

        .header-item {
            height: 40px;

            .dropdown-lg {
                padding: 0;
            }

            &:hover {
                background: rgba(255,255,255,.08);
            }

            &::before {
                position: absolute;
                content: '';
                top: 0;
                height: 100%;
                width: 1px;
                background: rgba(255,255,255,.08);
            }
        }
    }

    .header-left {
        .header-item {
            display: flex;
            align-items: center;
            position: relative;
            padding: 0 18px; 
            color: white;

            &::before {
                right: 0;
            }
        }
    }

    .header-right {

        a:hover {
            color: white;
        }

        .header-item {
            align-items: center;
            cursor: pointer;

            > a {
                display: flex;
                align-items: center;
            }

            &::before {
                left: 0;
            }   
        }

        .menu-item {
            a {
                color: rgba(0,0,0,.87);
            }

            .b-dropdown-text {
                padding: 10px 18px;
            }

            &:hover {
                background: rgba(0,0,0,.05);
                color: rgba(0,0,0,.95);
            }
        }

        
    }

    .mobile-mode  {
        display: none;
    }
    
}

@media screen and (max-width: 768px) {
    header {
        .desktop-mode {
            display: none !important;
        }

        .mobile-mode {
            display: block;

            .button-menu-mobile {
                padding: 0 18px;
                align-items: center;
                height: 40px;

                &::before {
                    position: absolute;
                    content: '';
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 1px;
                    background: rgba(255,255,255,.08);
                }
            }
        }
    }
}
</style>