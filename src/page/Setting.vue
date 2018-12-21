<template lang="pug">
    #setting_workspace
        #menu
            menu-top
        #content_workspace
            span 셋팅페이지
</template>

<script>
    import MenuTop from '@/components/MenuTop'

    export default {
        name: "Setting",
        components: {
            MenuTop
        }
    }
</script>

<style lang="scss" scoped>
    #setting_workspace {
        #menu {
            width: 100%;
            background-color: darkturquoise;
            overflow: hidden;
            margin-bottom: 50px;
        }

        #content_workspace {
            margin: 0 auto;
            width: 1080px;
            text-align: center;
        }
    }
</style>