<template>
    <div class="am-list" :style="style">
        <div v-if="renderHeader" class="am-list-header">{{renderHeader}}</div>
        <div class="am-list-body">
            <slot></slot>
        </div>
        <div v-if="renderFooter" class="am-list-footer">{{renderFooter}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            style: String,
            renderHeader: String,
            renderFooter: String
        }
    }
</script>

<style lang="scss">

</style>
