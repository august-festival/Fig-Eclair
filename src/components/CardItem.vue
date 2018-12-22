<template>
    <div>
        <div class="card-item" v-for="(card, index) in cards" :key=index >
            <span class="item" v-if="card.done" @click="cardDetail">
                {{ card.title }}
            </span>
            <span class="item" v-else>
                <input type="text"/>
            </span>
        </div>
        <div class="card-item-detail" v-show="isCard">
            <div class="item-detail">
                <div class="detail detail-title">
                    <div class="title">
                        <h2>CARD</h2>
                    </div>
                </div>
                <div class="detail detail-desc">
                    <div class="desc">
                        <h2>설 명</h2>
                        <textarea name="desc" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="detail detail-checklist">
                    <div class="checklist">
                        <h2>체크 리스트</h2>
                    </div>
                </div>
                <div class="detail detail-comment">
                    <div class="commnet">
                        <h2>댓글</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardItem',
        props: {
            cards: {
                type: Array,
                default: () => {
                    return [];
                }
            }
        },
        data: function(){
            return{
                isCard : false
            }
        },
        methods: {
            cardDetail: function(){
                this.isCard = true;
            }
        }
    }
</script>

<style lang="scss" scoped>

    .card-item{
        height: 100%;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 3px;
        background-color: #eee;
        width: 99%;
        height: 36px;
        cursor: pointer;
        span{
            display: inline-block;
            margin: 0;
            padding: 0;
            width: 100%;
            input{
                height: 100%;
                display: inline-block;
                border-radius: 3px;
                font-size: 16px;
                line-height: 21px;
                background-color: #eee;
                width: 99%;
                border: 0;
                font-weight: bold;
                outline: none;
                cursor: pointer;
            }
        }
    }
    .card-item-detail{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
        z-index: 20;
        .item-detail{
            position: absolute;
            display: block;
            top: 40%;
            left: 50%;
            width: 600px;
            height: 600px;
            margin-bottom: 300px;
            padding: 25px 25px;
            background-color: rgb(235, 238, 240);
            border-radius: 3px;
            transform: translate(-50%, -50%);
            z-index: 30;
            h2{
                font-size: 1.3rem;
                font-weight: bold;
            }
            textarea{
                width: 100%;
            }
        }

    }
</style>