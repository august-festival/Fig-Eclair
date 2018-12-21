<template lang="pug">
    #menu_top(class="btn-group" role="group")
        button(class="btn btn-light" v-for="menu of menus")
            router-link(:to="menu.href") {{ menu.name }}
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
        float: left;
    }
</style>
