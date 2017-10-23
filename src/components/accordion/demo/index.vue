<template>
    <div>
        <div>
            <accordion defaultActiveKey="a">
                <panel header="Title 1" k="a">
                    <list>
                        <list-item>content 1</list-item>
                        <list-item>content 2</list-item>
                        <list-item>content 3</list-item>
                    </list>
                </panel>
                <panel header="Title 2" k="b" disabled>
                    this is panel content2 or other
                </panel>
                <panel header="Title 3" k="c">
                    text text text text text text text text text text text text text text text
                </panel>
            </accordion>
        </div>
        <div style="margin-top: 50px;">
            <accordion accordion openAnimation>
                <panel header="Title 1" k="a">
                    <list>
                        <list-item>content 1</list-item>
                        <list-item>content 2</list-item>
                        <list-item>content 3</list-item>
                    </list>
                </panel>
                <panel header="Title 2" k="b" disabled>
                    this is panel content2 or other
                </panel>
                <panel header="Title 3" k="c">
                    text text text text text text text text text text text text text text text
                </panel>
            </accordion>
        </div>
    </div>
</template>

<script>
import Accordion from '../index.vue'
import List from '../../list/index.vue'
import ListItem from '../../list/ListItem.vue'
import Panel from '../Panel.vue'

export default {
    components: {Accordion, List, ListItem, Panel}
}
</script>
