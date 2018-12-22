<template lang="pug">
    #board_workspace
        menu-top(:isMargin="false")
        header-sub
        #content_workspace
</template>

<script>
    import MenuTop from '@/components/MenuTop'
    import HeaderSub from '@/components/HeaderSub'

    export default {
        name: "Board",
        components: {
            MenuTop,
            HeaderSub
        }
    }
</script>

<style lang="scss" scoped>
    #board_workspace {

    }
</style>