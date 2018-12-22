<template lang="pug">
    #box_card
        .card(class="text-white bg-dark mb-3" v-for="vo of list")
            .card-header header
            .card-body
                h5.card-title {{ vo.title }}
                p.card-text {{ vo.content }}
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
            width: 200px;
            height: 200px;
            margin-right: 15px;
            margin-bottom: 20px;
            float: left;
        }
    }
</style>