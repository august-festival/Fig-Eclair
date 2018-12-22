<template>
    <div class="listbox">
        <div class="list-header">
            <span>
                <input type="text" value="todo" @click="styleChangeIn" @mouseout="styleChangeOut" @keyup.enter="styleChangeOut"/>
            </span>
        </div>
        <div class="list-content" ref="content">
            <card-item v-bind:cards=item></card-item>
        </div>
        <div class="list-footer">
            <button class="list-add" @click="listAdd">
                카드 추가
            </button>
        </div>
        
    </div>
</template>

<script>
    import CardItem from '@/components/CardItem'

    export default {
        name: "ListBox",
        data: function() {
            return {
                item : [
                    {title: 'card1', done: true}, 
                    {title: 'card2', done: true},
                    ]
            }
        },
        components: {
            CardItem
        },
        methods: {
            styleChangeIn: function(e) {
                e.target.style.backgroundColor = '#eee';
            },
            styleChangeOut: function(e) {
                e.target.style.backgroundColor = '#bcbec0';
                e.target.blur();
            },
            listAdd: function(){
                const count = this.item.length+1;
                const val = `card${count}`
                this.item.push({title: val, done: false})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .listbox{
        margin: 0 10px;
        padding: 10px 0;
        background-color: #bcbec0;
        border-radius: 3px;
        width: 272px;
        // height: 225px;
        .list-header{
            padding: 10px;
            color: #000;
            font-size: 13.5px;
            font-weight: bold;
            span{
                input{
                    padding: 5px 10px;
                    border-radius: 3px;
                    background-color: #eee;
                    font-size: 1.2em;
                    width: 99%;
                    border: 0;
                    border-radius: 3px;
                    outline: none;
                    background-color: #bcbec0;
                    font-weight: bold;
                    cursor: pointer;
                }
            }
        }
        .list-content{
            margin:0 10px;
            height: 100%;
            .card-item{
                // height: 100%;
                margin-bottom: 10px;
                padding: 10px;
                border-radius: 3px;
                background-color: #eee;
                font-size: 16px;
                width: 99%;
                cursor: pointer;
            }
            .card-item:hover{
                background-color: #919191;
            }
        }
        .list-footer{
            margin:0 10px;
            button{
                display: inline-block;
                width: 100px;
                height: 30px;
                border: 0;
                border-radius: 3px;
                color: #eee;
                background-color: #e65183;
                cursor: pointer;
                outline: none;
            }
            button:hover{ 
                background-color: #b6476c;
            }
        }
    }

</style>