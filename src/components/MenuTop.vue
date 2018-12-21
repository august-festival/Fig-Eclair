<template lang="pug">
    #menu_top(class="btn-group" role="group")
        button(class="btn btn-light" v-for="menu of menus") {{ menu }}
</template>

<script>
export default {
    name: 'MenuTop',
    data() {
        return {
            menus: [
                'home',
                'team',
                'setting'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    #menu_top {
        float: left;
    }
</style>
