<template lang="pug">
    #team_workspace
        menu-top(:active="1")
        #content_workspace
            menu-sub(:menus="subMenus" @new="getModal")
            box-card(:list="list")

        modal-create(title="팀 생성" @add="create")
</template>

<script>
    import MenuTop from '@/components/MenuTop'
    import MenuSub from '@/components/MenuSub'
    import BoxCard from '@/components/BoxCard'
    import ModalCreate from '@/components/ModalCreate'

    export default {
        name: "Team",
        components: {
            MenuTop,
            MenuSub,
            BoxCard,
            ModalCreate
        },
        data() {
            return {
                subMenus: [
                    'TEAM',
                    'NEW'
                ],
                list: [
                    {
                        title: '테스트팀1',
                        content: '내용1'
                    },
                    {
                        title: '테스트팀2',
                        content: '내용2'
                    },
                    {
                        title: '테스트팀3',
                        content: '내용4'
                    },
                    {
                        title: '테스트팀5',
                        content: '내용5'
                    },
                    {
                        title: '테스트팀6',
                        content: '내용7'
                    },
                    {
                        title: '테스트팀8',
                        content: '내용9'
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
    #team_workspace {
        #content_workspace {
            margin: 0 auto;
            width: 1080px;
            text-align: center;
        }
    }
</style>