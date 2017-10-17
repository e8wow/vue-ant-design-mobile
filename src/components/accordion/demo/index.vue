<template>
    <div>
        <collapse :input="['a','b']">
            <panel header="测试" k="a">
                123
            </panel>
            <panel header="测试" k="b" isActive>
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
    components: {Accordion, Collapse, Panel, PanelContent}
}
</script>

<style lang="less">
    @import "../../collapse/style/index.less";
</style>
