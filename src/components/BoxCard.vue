<template lang="pug">
    #box_card
        .card(class="text-white bg-dark mb-3" v-for="vo of list")
            .card-header
                router-link(v-if="vo.href !== undefined" :to="vo.href") {{ vo.title }}
                span(v-else="vo.href === undefined") {{ vo.title }}
            .card-body
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