<template>
    <Layout>
        <div class="card-settings">
            <!-- <div class="card-body"> -->
                <b-tabs v-model="tabIndex" pills justified class="navtab-bg">
                    <b-tab title="General" active>
                        <General v-if="tabIndex === 0" />
                    </b-tab>
                    <b-tab title="Styling">
                        <Styling v-if="tabIndex === 1"/>
                    </b-tab>
                    <b-tab title="Users & offices">
                        <Manage v-if="tabIndex === 2" />
                    </b-tab>
                    <b-tab title="Developers" >
                        <Developers v-if="tabIndex === 3" />
                    </b-tab>
                </b-tabs>
            </div>
        <!-- </div>   -->
    </Layout>
</template>

<script>    

import Layout from '@layouts/main'
import General from './tab-settings/general'
const Styling = () => import('./tab-settings/styling')
const Manage = () => import('./tab-settings/manage')
const Developers = () => import('./tab-settings/developers')

export default {
    name: 'Settings',
    components: {
        Layout,
        General,
        Styling,
        Manage,
        Developers
    },

    data() {
        return {
            tabIndex: 0
        }
    }
}
</script>

<style>

</style>