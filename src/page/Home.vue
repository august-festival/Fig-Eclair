<template lang="pug">
    #home_workspace
        menu-top(:active="0")
        #content_workspace
            menu-sub(:menus="subMenus")
            box-card(:list="list")
</template>

<script>
    import MenuTop from '@/components/MenuTop'
    import MenuSub from '@/components/MenuSub'
    import BoxCard from '@/components/BoxCard'

    export default {
        name: 'Home',
        components: {
            MenuTop,
            MenuSub,
            BoxCard
        },
        data() {
            return {
                subMenus: [
                    'All',
                    'MY',
                    'TEAM',
                    'NEW'
                ],
                list: [
                    {
                        title: '테스트1',
                        content: '내용1'
                    },
                    {
                        title: '테스트2',
                        content: '내용2'
                    },
                    {
                        title: '테스트3',
                        content: '내용4'
                    },
                    {
                        title: '테스트5',
                        content: '내용5'
                    },
                    {
                        title: '테스트6',
                        content: '내용7'
                    },
                    {
                        title: '테스트8',
                        content: '내용9'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    #home_workspace {
        #content_workspace {
            margin: 0 auto;
            width: 1080px;
            text-align: center;
        }
    }
</style>

