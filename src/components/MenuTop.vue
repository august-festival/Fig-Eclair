<template lang="pug">
    #menu_top
        #menu(class="btn-group" role="group")
            router-link(v-for="menu of menus" :key="menu.id" :to="menu.href")
                button(class="btn btn-dark") {{ menu.name }}
</template>

<script>
    export default {
        name: 'MenuTop',
        data() {
            return {
                menus: [
                    {
                        name: 'home',
                        href: '/'
                    },
                    {
                        name: 'team',
                        href: '/team'
                    },
                    {
                        name: 'setting',
                        href: '/setting'
                    },
                    // 라이프 사이클을 통해 로그인 체크해서 데이터 재처리해야됨
                    {
                        name: 'login',
                        href: '/login'
                    },
                    {
                        name: 'logout',
                        href: '/logout'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    #menu_top {
        width: 100%;
        background-color: #424242;
        margin-bottom: 50px;

        #menu {
            button {
                border-radius: 0;
            }
        }
    }
</style>
