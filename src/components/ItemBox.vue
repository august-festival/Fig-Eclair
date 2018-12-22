<template>
    <div class="itembox">
        <div class="itembox_container">
            <div class="itembox-list">
                <list-box></list-box>                
            </div>
            <div class="itembox-list">
                <list-box></list-box>                
            </div>
            <div class="itembox-list">
                <list-box></list-box>
            </div>
            <div class="itembox_add">
                <button><font-awesome-icon icon="plus" /> list add</button>            
            </div>
        </div>
    </div>
</template>

<script>
    import ListBox from '@/components/ListBox'
    import ListAdd from '@/components/ListAdd'

    export default {
        name: "ItemBox",
        components: {
            ListBox,
            ListAdd
        }
    }
</script>

<style lang="scss" scoped>
    .itembox{
        .itembox_container{
            width: 275px;
            height: 100%;
            display: flex;
            flex-direction: row;
        }
        .itembox_add{
            button{
                display: inline-block;
                width: 275px;
                height: 30px;
                line-height: 30px;
                border:0;
                border-radius: 3px;
                color: #eee;
                background-color: #323438;
                outline: none;
                text-align: left;
                padding-left: 10px;
            }
            button:hover{
                cursor: pointer;
                background-color: #656668;
            }            
        }
    }

</style>