<template lang="pug">
    #team_workspace
        menu-top(:active="1")
        #content_workspace
            menu-sub(:menus="subMenus" :active="0" @new="getModal")
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
                list: []
            }
        },
        methods: {
            // modal 호출
            getModal() {
                $('#modal_create_workspace').modal()
            },
            // 생성
            create(name) {
                this.$http.post('/api/v1/teams', {
                    name: name
                }).then(res => {
                    this.getList()
                })
            },
            getList() {
                // 팀리스트 조회
                this.$http.get('/api/v1/teams').then(res => {
                    JSLog('to', res.data)
                    const list = [];
                    res.data.forEach(v => {
                        list.push({
                            title: v.name,
                            visibility: v.visibilityType
                        })
                    })
                    this.list = list
                })
            }
        },
        created() {
            this.getList()
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