<template>
    <div class="listbox">
        <div class="list-header">
            todo
        </div>
        <div class="list-content">
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
        name: "ListAdd"
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
            padding: 15px 0 15px 15px;
            color: #000;
            font-size: 13.5px;
            font-weight: bold;            
        }
        .list-content{
            margin:0 10px;
            .card-item{
                margin-bottom: 10px;
                padding: 10px;
                border-radius: 3px;
                background-color: #eee;
                font-size: 16px;
                width: 99%;

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