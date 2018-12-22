<template lang="pug">
    #home_workspace
        menu-top(:active="0")
        #content_workspace
            menu-sub(:menus="subMenus" @new="getModal")
            box-card(:list="list")

        modal-create(title="보드 생성" @add="create")
</template>

<script>
    import MenuTop from '@/components/MenuTop'
    import MenuSub from '@/components/MenuSub'
    import BoxCard from '@/components/BoxCard'
    import ModalCreate from '@/components/ModalCreate'

    export default {
        name: 'Home',
        components: {
            MenuTop,
            MenuSub,
            BoxCard,
            ModalCreate
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
                        content: '내용1',
                        href: '/board/1'
                    },
                    {
                        title: '테스트2',
                        content: '내용2',
                        href: '/board/2'
                    },
                    {
                        title: '테스트3',
                        content: '내용4',
                        href: '/board/3'
                    },
                    {
                        title: '테스트5',
                        content: '내용5',
                        href: '/board/4'
                    },
                    {
                        title: '테스트6',
                        content: '내용7',
                        href: '/board/5'
                    },
                    {
                        title: '테스트8',
                        content: '내용9',
                        href: '/board/6'
                    }
                ]
            }
        },
        methods: {
            // modal 호출
            getModal() {
                $('#modal_create_workspace').modal()
            },
            // 생성
            create(name) {
                alert(name)
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

