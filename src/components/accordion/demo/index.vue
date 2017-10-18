<template>
    <div>
        <accordion :activeKey="keys" @change="change" defaultActiveKey="b">
            <panel header="测试" k="a">
                123
            </panel>
            <panel header="测试" k="b" disabled>
                123
            </panel>
            <panel header="测试" k="c">
                123
            </panel>
        </accordion>
    </div>
</template>

<script>
import Accordion from '../index.vue'
import Panel from '../Panel.vue'

export default {
    components: {Accordion, Panel},
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
    @import "../style/index.less";
</style>
