<template lang="pug">
    #menu_sub(class="btn-group" role="group")
        button(class="btn btn-dark" v-for="(menu, index) of menus" :class="active === index ? 'on' : ''" @click="newBtn(menu)") {{ menu }}
</template>

<script>
    export default {
        name: "MenuSub",
        props: {
            menus: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            active: {
                type: Number,
                default: 0
            }
        },
        methods: {
            newBtn(type) {
                if(type === 'NEW') {
                    this.$emit('new')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #menu_sub {
        margin-bottom: 20px;

        .on {
            color: #fff;
            background-color: #23272b;
            border-color: #1d2124;
        }
    }
</style>