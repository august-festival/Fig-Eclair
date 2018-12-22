<template lang="pug">
    #menu_sub(class="btn-group" role="group")
        button(class="btn btn-dark" v-for="menu of menus" @click="newBtn(menu)") {{ menu }}
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
    }
</style>