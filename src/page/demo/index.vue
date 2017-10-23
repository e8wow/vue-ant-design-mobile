<template>
    <div>
        <accordion>
            <panel :key="key" v-for="(option,key,index) in options" :header="key" k="a">
                <list>
                    <list-item :key="k" v-for="(o,k,i) in option" arrow="horizontal">{{o.title}}</list-item>
                </list>
            </panel>
        </accordion>
        <!--<router-link to="/demo/accordion">accordion</router-link>-->
        <!--<router-link to="/demo/flex">flex</router-link>-->
        <!--<router-link to="/demo/list">list</router-link>-->
        <!--<router-link to="/demo/swiper">swiper</router-link>-->
        <!--<router-link to="/demo/whiteSpace">white-space</router-link>-->
        <!--<router-link to="/demo/wingBlank">wing-blank</router-link>-->
    </div>
</template>

<script>
import Accordion from '../../components/accordion/index.vue'
import Panel from '../../components/accordion/Panel.vue'
import { Brief, List, ListItem } from '../../components/list/index.js'

export default {
    components: {Accordion, Panel, Brief, List, ListItem},
    data () {
        return {
            options: {
                Layout: {
                    Flex: {
                        title: 'Flex 布局',
                        link: '/demo/flex'
                    },
                    WingBlank: {
                        title: 'WingBlank 两翼留白',
                        link: '/demo/wingBlank'
                    }
                }
            }
        }
    }
}
</script>

<style>

</style>
