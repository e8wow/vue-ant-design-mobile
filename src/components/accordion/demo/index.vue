<template>
    <div>
        <collapse :activeKey="keys" @change="change" defaultActiveKey="b" accordion>
            <panel header="测试" k="a">
                123
            </panel>
            <panel header="测试" k="b">
                123
            </panel>
            <panel header="测试" k="c" disabled>
                123
            </panel>
        </collapse>
    </div>
</template>

<script>
import Accordion from '../index.vue'
import Collapse from '../../collapse/Collapse.vue'
import Panel from '../../collapse/Panel.vue'
import PanelContent from '../../collapse/PanelContent.vue'

export default {
    components: {Accordion, Collapse, Panel, PanelContent},
    data () {
        return {
            keys: []
        }
    },
    methods: {
        change (keys) {
            console.log(keys)
        }
    }
}
</script>

<style lang="less">
    @import "../../collapse/style/index.less";
</style>
