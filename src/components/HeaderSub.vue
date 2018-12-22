<template>
    <div class="header">
        <div class="header-sub">
            <ul class="list-sub">
                <li>board 이름</li>
                <li>@lsk @kgh @test</li>
                <li>멤버 new</li>
            </ul>
        </div>
        <div class="header-menu-sub">
            <button @click="showMenu">이력 조회</button>            
        </div>
        <div class="activity" v-show="isActivity">
            <div class="activity-container">
                <div class="activity-title">
                    <ul>
                        <li>이력 조회</li>
                        <li><span @click="showMenu" ref="action"><font-awesome-icon icon="times" /></span></li>
                    </ul>                    
                </div>
                <hr>
            </div>
        </div>
        
        
    </div>

</template>

<script>
    export default {
        name: "HeaderSub",
        data: function() {
            return {
                isActivity : false
            }
        },
        methods: {
            showMenu: function() {
                this.isActivity = !this.isActivity ? true : false;
            }
        }

    }
</script>

<style lang="scss" scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin: 0 10px;
        .header-sub{
          .list-sub{
            padding: 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            li{
                height: 30px;
                line-height: 30px;
                margin: 0 10px 0 0;
                padding: 0 10px 0 0;
                border-right: 1px solid #828282;
                color: #eee;
                
            }
            li:first-child{
                font-size: 1.25rem;
                font-weight: 400;
            }
            li:last-child{
                border:0;
            }          
          }
        }
        .header-menu-sub{
            // position: relative;
            button{
                display: inline-block;
                width: 100px;
                height: 30px;
                line-height: 30px;
                border:0;
                color: #eee;
                background-color: transparent;
                outline: none;
            }
            button:hover{
                background-color: #323438;
                cursor: pointer;
            }            
        }
        .activity{
            position: absolute;
            top: 0;
            right: 0;
            margin-top: 38px;
            width: 21vw;
            height: 96%;
            background-color: #eee;
            animation-name: move;
            animation-duration: 0.2s;
            @keyframes move {
                from {
                    width: 0;
                }
                to {
                    width: 21vw;
                }
            }
            .activity-container{
                margin: 20px 20px;
                display: flex;
                flex-direction: column;
                .activity-title{
                    font-size: 1.2rem;
                    font-weight: bold;
                    ul{
                        margin: 0;
                        padding: 0;
                        text-align: center;
                        li{
                            float: left;
                        }
                        li:first-child{
                            width: 90%;
                        }
                        li:last-child{
                            width: 10%;
                            span{
                                cursor: pointer;
                            }
                        }
                        li:last-child:hover{
                            span{
                                opacity: 0.6;
                            }
                        }
                    }
                }
            }
        }
    }
</style>