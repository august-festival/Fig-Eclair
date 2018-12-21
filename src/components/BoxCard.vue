<template lang="pug">
    #box_card
        .card(v-for="vo of list")
            h2 {{ vo.title }}
            span {{ vo.content }}
</template>

<script>
    export default {
        name: "BoxCard",
        props: {
            list: {
                type: Array,
                default: () => {
                    return [];
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #box_card {
        .card {
            display: inline-block;
            box-sizing: border-box;
            width: 200px;
            height: 200px;
            margin-right: 15px;
            margin-bottom: 20px;
            float: left;
        }
    }
</style>