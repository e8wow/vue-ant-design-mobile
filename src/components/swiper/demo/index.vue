<template>
    <swiper :speed="300" pagination>
        <slide class="slide">
            <p>11</p>
            <p>11</p>
            <p>11</p>
            <p>11</p>
            <p>11</p>
        </slide>
        <slide class="slide">
            <p>22</p>
            <p>22</p>
            <p>22</p>
            <p>22</p>
            <p>22</p>
        </slide>
        <slide class="slide">
            <p>33</p>
            <p>33</p>
            <p>33</p>
            <p>33</p>
            <p>33</p>
        </slide>
    </swiper>
</template>

<script>
import Swiper from '../index.vue'
import Slide from '../Slide'

export default {
    components: {Swiper, Slide}
}
</script>

<style>
    .slide {
        height: 300px;
    }
</style>
