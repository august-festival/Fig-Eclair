<template lang="pug">
    #setting_workspace
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
        #content_workspace {
            margin: 0 auto;
            width: 1080px;
            text-align: center;
            color: white;
        }
    }
</style>