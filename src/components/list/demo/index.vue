<template>
    <div>
        <list renderHeader="Basic Style">
            <list-item extra="extra content">Title</list-item>
        </list>

        <list renderHeader="Subtitle">
            <list-item arrow="horizontal" multipleLine wrap>
                Title
                <brief>subtitle</brief>
            </list-item>
            <list-item arrow="horizontal" multipleLine>
                ListItem （Android）
                <brief>There may have water ripple effect of <br/> material if you set the click event.</brief>
            </list-item>
            <list-item arrow="horizontal" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                       multipleLine>
                Title
                <brief>subtitle</brief>
            </list-item>
        </list>

        <list renderHeader="Customized Right Side（Empty Content / Text / Image）">
            <list-item>Title</list-item>
            <list-item arrow="horizontal">Title</list-item>
            <list-item extra="extra content" arrow="horizontal">Title</list-item>
            <list-item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                       multipleLine>
                Title
                <brief>subtitle</brief>
            </list-item>
        </list>

        <list renderHeader="Align Vertical Center">
            <list-item multipleLine extra="extra content">
                Title
                <brief>subtitle</brief>
            </list-item>
        </list>

        <list renderHeader="Icon in the left">
            <list-item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
            >My wallet
            </list-item>
            <list-item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">
                My Cost Ratio
            </list-item>
        </list>

        <list renderHeader="Text Wrapping">
            <list-item data-seed="logId">Single line，long text will be hidden with ellipsis；</list-item>
            <list-item wrap>
                Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text
            </list-item>
            <list-item extra="extra content" multipleLine align="top" wrap>
                Multiple line and long text will wrap. Long Text Long Text Long Text
            </list-item>
            <list-item extra="no arrow" arrow="empty" className="spe" wrap>
                In rare cases, the text of right side will wrap in the single line with long text. long text long text long text
            </list-item>
        </list>

        <list renderHeader="Other">
            <list-item :disabled="disabled" extra="" @click.native="disabled=true">Click to disable</list-item>
            <list-item>
                <select defaultValue="1">
                    <option value="1">html select element</option>
                    <option value="2" disabled>Unable to select</option>
                    <option value="3">option 3</option>
                </select>
            </list-item>
        </list>
        <!-- // TODO Demo的可输入列表暂未制作 -->
    </div>
</template>

<script>
import Brief from '../brief.vue'
import List from '../index.vue'
import ListItem from '../listItem.vue'
import Ripple from '../../ripple/ripple.vue'

export default {
    components: {Brief, List, ListItem, Ripple},
    data () {
        return {
            disabled: false
        }
    },
    methods: {
        onLongPress () {
            alert('onLongPress')
        },
        onClick () {
            alert('onClick')
        }
    }
}
</script>
