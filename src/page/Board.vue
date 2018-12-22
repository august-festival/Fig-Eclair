<template>
    <div>
        <menu-top></menu-top>
        <header-sub></header-sub>
        <item-box></item-box>
    </div>
</template>

<script>
    import MenuTop from '@/components/MenuTop'
    import HeaderSub from '@/components/HeaderSub'
    import ItemBox from '@/components/ItemBox'

    export default {
        name: "Board",
        components: {
            MenuTop,
            HeaderSub,
            ItemBox
        }
    }
</script>

<style lang="scss" scoped>
    #board_workspace {

    }
</style>