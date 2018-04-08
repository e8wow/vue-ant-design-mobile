<template>
    <div style=" padding: 15px 0">
        <wing-blank>
            <div class="demo-block">Block</div>
        </wing-blank>

        <white-space size="lg"/>
        <wing-blank size="md">
            <div class="demo-block">Block</div>
        </wing-blank>

        <white-space size="lg"/>
        <wing-blank size="sm">
            <div class="demo-block">Block</div>
        </wing-blank>
    </div>
</template>

<script>
import { WhiteSpace, WingBlank } from '../../../../main'

export default {
    components: {WhiteSpace, WingBlank}
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
