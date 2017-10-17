<template>
    <div>
        <white-space size="xs"></white-space>
        <div class="demo-block">Block</div>

        <white-space size="sm"></white-space>
        <div class="demo-block">Block</div>

        <white-space></white-space>
        <div class="demo-block">Block</div>

        <white-space size="lg"></white-space>
        <div class="demo-block">Block</div>

        <white-space size="xl"></white-space>
        <div class="demo-block">Block</div>
    </div>
</template>

<script>
import WhiteSpace from '../index.vue'

export default {
    components: {WhiteSpace}
}
</script>

<style scoped="scoped">
    .demo-block {
        background-color: #ebebef;
        color: #bbb;
        text-align: center;
        height: 30px;
        line-height: 30px;
        width: 100%;
    }
</style>
