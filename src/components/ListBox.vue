<template>
    <div class="listbox">
        <div class="list-header">
            <span>
                <input type="text" value="todo" @click="styleChangeIn" @mouseout="styleChangeOut" @keyup.enter="styleChangeOut"/>
            </span>
        </div>
        <div class="list-content" ref="content">
            <div class="card-item">
                <span class="item">
                    card1
                </span>
            </div>
            <div class="card-item">
                <span class="item">
                    card2
                </span>
            </div>
            <div class="card-item">
                <span class="item">
                    card3
                </span>
            </div>
        </div>
        <div class="list-footer">
            <button class="list-add">
                카드 추가
            </button>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "ListBox",
        methods: {
            styleChangeIn: function(e) {
                e.target.style.backgroundColor = '#eee';
            },
            styleChangeOut: function(e) {
                e.target.style.backgroundColor = '#bcbec0';
                e.target.blur();
            },
            listAdd: function(){
                const rootEl = this.$refs.content;                
                rootEl.appendChild(this.makeChildEl());
            }
        }
    }
</script>

<style lang="scss" scoped>
    .listbox{
        margin: 0 10px;
        background-color: #bcbec0;
        border-radius: 3px;
        width: 272px;
        height: 225px;
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
            .card-item{
                height: 100%;
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