<template>
    <div>
        <accordion>
            <list></list>
        </accordion>
        <router-link to="/demo/accordion">accordion</router-link>
        <router-link to="/demo/flex">flex</router-link>
        <router-link to="/demo/list">list</router-link>
        <router-link to="/demo/swiper">swiper</router-link>
        <router-link to="/demo/whiteSpace">white-space</router-link>
        <router-link to="/demo/wingBlank">wing-blank</router-link>
    </div>
</template>

<script>
import Accordion from '../../components/accordion/index.vue'
import { Brief, List, ListItem } from '../../components/list/index.js'

export default {
    components: {Accordion, Brief, List, ListItem},
    data () {
        return {
            options: {

            }
        }
    }
}
</script>

<style>

</style>
