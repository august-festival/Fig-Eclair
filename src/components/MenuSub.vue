<template lang="pug">
    #menu_sub(class="btn-group" role="group")
        button(class="btn btn-light" v-for="menu of menus") {{ menu }}
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
        }
    }
</script>

<style lang="scss" scoped>
    #menu_sub {

    }
</style>