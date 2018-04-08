<template>
    <am-wingblank>
        <div class="test">点我</div>
        <am-whitespace/>
        <am-button>default</am-button>

        <am-whitespace/>
        <am-button type="primary">primary</am-button>

        <am-whitespace/>
        <am-button type="primary" disabled>primary disabled</am-button>

        <am-whitespace/>
        <am-button type="warning">warning</am-button>

        <am-whitespace/>
        <am-button type="warning" disabled>warning disabled</am-button>

        <am-whitespace/>
        <am-button type="ghost">ghost</am-button>

        <am-whitespace/>
        <am-button type="ghost" disabled>ghost disabled</am-button>

        <am-whitespace/>
        <am-button type="warning">5</am-button>

        <am-whitespace/>
        <am-button loading>loading button</am-button>

        <am-whitespace/>
        <am-button icon="ios-checkmark-outline">with icon</am-button>

        <am-whitespace/>
        <am-button icon="ios-checkmark-outline">
            <am-icon slot="icon" icon="ios-close-outline"></am-icon>
            custom icon
        </am-button>

        <am-whitespace/>
        <am-button inline type="primary">inline primary</am-button>
        <am-button inline type="ghost">inline ghost</am-button>

        <am-whitespace/>
        <am-button inline type="primary" size="small">inline primary</am-button>
        <am-button inline type="primary" size="small" disabled>inline ghost</am-button>

        <am-whitespace/>
        <am-button inline type="ghost" size="small">inline primary</am-button>
        <am-button inline type="ghost" size="small" disabled>inline ghost</am-button>
    </am-wingblank>
</template>

<script>
    import { Button, Icon, WhiteSpace, WingBlank } from '../../../../main'

    export default {
        components: {
            [Icon.name]: Icon,
            [Button.name]: Button,
            [WhiteSpace.name]: WhiteSpace,
            [WingBlank.name]: WingBlank
        }
    }
</script>

<style>
    .test {
        background: linear-gradient(50deg, rgba(255, 108, 108, 1), rgba(255, 188, 118, 1));
        width: 100%;
        height: 50px;
        border-radius: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 18px;
    }

    .test:active {
        background: linear-gradient(50deg, rgba(255, 108, 108, 0.9), rgba(255, 188, 118, 0.9));
    }
</style>
