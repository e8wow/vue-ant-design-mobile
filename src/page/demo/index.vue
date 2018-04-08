<template>
    <div :class="`${this.prefixCls}`">
        <div :class="`${this.prefixCls}-page`">
            <div :class="`${this.prefixCls}-hd`">
                <h1 :class="`${this.prefixCls}-title`"><span>Vue Ant Design Mobile</span></h1>
                <h2 :class="`${this.prefixCls}-subtitle`"><span>Vue支付宝移动端组件库</span></h2>
            </div>
            <div :class="`${this.prefixCls}-bd`">
                <category :key="index" v-for="(option,index) in options" :title="option.title"
                          :list="option.list"></category>
            </div>
        </div>
    </div>
</template>

<script>
import Category from '../components/Category.vue'
import { Brief, List, ListItem, Panel } from '../../../main'

export default {
    components: {
        Category,
        Brief,
        List,
        ListItem,
        Panel
    },
    props: {
        prefixCls: {
            type: String,
            default: 'am-demo'
        },
        title: String,
        subtitle: String
    },
    data () {
        return {
            options: [{
                title: '布局 Layout',
                list: [{
                    title: 'Flex 布局',
                    link: '/demo/flex'
                }, {
                    title: 'WingBlank 两翼留白',
                    link: '/demo/wingBlank'
                }]
            }, {
                title: '导航 Navigation',
                list: [{
                    title: 'Drawer 抽屉-基本',
                    link: ''
                }, {
                    title: 'Drawer 抽屉-嵌入文档模式',
                    link: ''
                }, {
                    title: 'Menu 菜单',
                    link: ''
                }, {
                    title: 'NavBar 导航栏',
                    link: ''
                }, {
                    title: 'Pagination 分页器',
                    link: ''
                }, {
                    title: 'Popover 气泡',
                    link: ''
                }, {
                    title: 'SegmentedControl 分段器',
                    link: ''
                }, {
                    title: 'TabBar 标签栏',
                    link: ''
                }, {
                    title: 'Tabs 标签页',
                    link: ''
                }]
            }, {
                title: '数据录入 Data Entry',
                list: [{
                    title: 'Button 按钮',
                    link: '/demo/button'
                }, {
                    title: 'Calendar 日历',
                    link: ''
                }, {
                    title: 'Checkbox 复选框',
                    link: ''
                }, {
                    title: 'DatePicker 日期选择',
                    link: ''
                }, {
                    title: 'DatePickerView 选择器',
                    link: ''
                }, {
                    title: 'ImagePicker 图片选择器',
                    link: ''
                }, {
                    title: 'InputItem 文本输入',
                    link: ''
                }, {
                    title: 'Picker 选择器',
                    link: ''
                }, {
                    title: 'PickerView 选择器',
                    link: ''
                }, {
                    title: 'Radio 单选框',
                    link: ''
                }, {
                    title: 'Range 区域选择',
                    link: ''
                }, {
                    title: 'SearchBar 搜索栏',
                    link: ''
                }, {
                    title: 'Slider 滑动输入条',
                    link: ''
                }, {
                    title: 'Stepper 步进器',
                    link: ''
                }, {
                    title: 'TextareaItem 多行输入',
                    link: ''
                }]
            }, {
                title: '数据展示 Data Display',
                list: [{
                    title: 'Accordion 手风琴',
                    link: '/demo/accordion'
                }, {
                    title: 'Badge 徽标数',
                    link: ''
                }, {
                    title: 'Card 卡片',
                    link: ''
                }, {
                    title: 'Carousel 走马灯',
                    link: ''
                }, {
                    title: 'Grid 宫格',
                    link: ''
                }, {
                    title: 'Icon 图标',
                    link: ''
                }, {
                    title: 'List 列表',
                    link: '/demo/list'
                }, {
                    title: 'NoticeBar 通告栏',
                    link: ''
                }, {
                    title: 'Steps 步骤条',
                    link: ''
                }, {
                    title: 'Tag 标签',
                    link: ''
                }]
            }, {
                title: '操作反馈 Feedback',
                list: [{
                    title: 'ActionSheet 动作面板',
                    link: ''
                }, {
                    title: 'ActivityIndicator 活动指示器',
                    link: ''
                }, {
                    title: 'Modal 对话框',
                    link: ''
                }, {
                    title: 'Progress 进度条',
                    link: ''
                }, {
                    title: 'Toast 轻提示',
                    link: ''
                }]
            }, {
                title: '手势 Gesture',
                list: [{
                    title: 'PullToRefresh 拉动刷新',
                    link: ''
                }, {
                    title: 'SwipeAction 滑动操作',
                    link: ''
                }]
            }, {
                title: '组合组件 Combination',
                list: [{
                    title: 'ListView 长列表',
                    link: ''
                }, {
                    title: 'Result 结果页',
                    link: ''
                }]
            }, {
                title: '其他 Other',
                list: [{
                    title: 'LocaleProvider 国际化',
                    link: ''
                }]
            }]
        }
    }
}
</script>

<style lang="less">
    @import "../../components/style/mixins";

    @prefixCls: am-demo;
    @listPrefixCls: am-list;

    .@{prefixCls} {
        &-page {
            background-color: #f5f5f9;
            padding-bottom: 16px;
        }
        & &-hd {
            position: relative;
            overflow: hidden;
            .@{prefixCls}-title {
                color: rgba(0, 0, 0, .75);
                font-size: 21px;
                font-weight: 400;
                margin: 27px 0 15px;
            }
            .@{prefixCls}-subtitle {
                font-size: 13px;
                color: rgba(0, 0, 0, .75);
                font-weight: 400;
                margin: 0 0 27px;
            }
            .@{prefixCls}-title, .@{prefixCls}-subtitle {
                text-align: left;
                padding-left: 16px;
            }
        }
        & &-bd {
            .@{prefixCls}-category {
                display: flex;
                height: 100%;
                &-name {
                    flex: 1;
                }
                &-arrow {
                    width: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    i {
                        display: block;
                        width: @icon-size-xxs;
                        height: @icon-size-xxs;
                        .encoded-svg-background('right');
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: 50% 50%;
                        transform: rotate(90deg);
                        transition: transform .2s ease;
                    }
                }
            }

            .@{listPrefixCls} {
                margin: 0 16px 12px;
                background-color: #fff;
                border-radius: 2px;
                &.category-closed .@{listPrefixCls}-header {
                    position: relative;
                }
                .@{listPrefixCls}-header {
                    padding: 0;
                    padding-left: 24px;
                    height: 70px;
                    line-height: 70px;
                    color: #404040;
                    font-size: 16px;
                }
                &.category-open {
                    .@{prefixCls}-category {
                        &-arrow i {
                            transform: rotate(270deg);
                        }
                    }
                }
                & .@{listPrefixCls}-item {
                    padding-left: 24px;
                    .@{listPrefixCls}-content {
                        color: #666;
                        font-size: 14px;
                    }
                }
            }
        }
    }

</style>
