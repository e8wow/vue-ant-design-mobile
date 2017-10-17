<template>
    <div class="flex-container">
        <div class="sub-title">Basic</div>
        <flex>
            <flex-item>
                <div class="demo-block">item</div>
            </flex-item>
            <flex-item>
                <div class="demo-block">item</div>
            </flex-item>
        </flex>
        <white-space size="lg"/>

        <flex>
            <flex-item>
                <div class="demo-block">item</div>
            </flex-item>
            <flex-item>
                <div class="demo-block">item</div>
            </flex-item>
            <flex-item>
                <div class="demo-block">item</div>
            </flex-item>
        </flex>
        <white-space size="lg"/>

        <flex>
            <flex-item>
                <div class="demo-block">item</div>
            </flex-item>
            <flex-item>
                <div class="demo-block">item</div>
            </flex-item>
            <flex-item>
                <div class="demo-block">item</div>
            </flex-item>
            <flex-item>
                <div class="demo-block">item</div>
            </flex-item>
        </flex>
        <white-space size="lg"/>

        <div class="sub-title">wrap</div>

        <flex wrap="wrap">
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
        </flex>
        <white-space size="lg"/>

        <div class="sub-title">Align</div>

        <div class="prop">align="start"</div>
        <flex align="start">
            <div class="demo-block inline">item</div>
            <div class="demo-block inline small">item</div>
            <div class="demo-block inline">item</div>
        </flex>
        <white-space/>

        <div class="prop">align="center"</div>
        <flex align="center">
            <div class="demo-block inline">item</div>
            <div class="demo-block inline small">item</div>
            <div class="demo-block inline">item</div>
        </flex>
        <white-space/>

        <div class="prop">align="end"</div>
        <flex align="end">
            <div class="demo-block inline">item</div>
            <div class="demo-block inline small">item</div>
            <div class="demo-block inline">item</div>
        </flex>
        <white-space/>

        <div class="prop">align="baseline"</div>
        <flex align="baseline">
            <div class="demo-block inline">item</div>
            <div class="demo-block inline small">item</div>
            <div class="demo-block inline">item</div>
        </flex>
        <white-space size="lg"/>

        <div class="sub-title">justify</div>

        <div class="prop">justify="start"</div>
        <flex justify="start">
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
        </flex>
        <white-space/>

        <div class="prop">justify="center"</div>
        <flex justify="center">
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
        </flex>
        <white-space/>

        <div class="prop">justify="end"</div>
        <flex justify="end">
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
        </flex>
        <white-space/>

        <div class="prop">justify="between"</div>
        <flex justify="between">
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
        </flex>
        <white-space/>

        <div class="prop">justify="around"</div>
        <flex justify="around">
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
            <div class="demo-block inline">item</div>
        </flex>
        <white-space/>

    </div>
</template>

<script>
import Flex from '../Flex.vue'
import FlexItem from '../FlexItem.vue'
import WhiteSpace from '../../white-space/index.vue'

export default {
    components: {Flex, FlexItem, WhiteSpace}
}
</script>

<style lang="less" scoped="scoped">
    .demo-block {
        background-color: #ebebef;
        color: #bbb;
        text-align: center;
        height: 30px;
        line-height: 30px;
        width: 100%;
    }

    .flex-container {
        background-color: #f5f5f9;
        padding: 0 15px;
        .inline {
            width: 80px !important;
            margin: 9px 9px 9px 0;
        }
        .small {
            height: 20px !important;
            line-height: 20px !important;
        }
    }

    .sub-title {
        color: #888;
        font-size: 16px;
        padding: 30px 0 18px 0;
    }
    .prop {
        color: #888;
        font-size: 12px;
    }
</style>
