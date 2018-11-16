<template>
    <div class="input-login">
        <input v-bind:name=inputName v-bind:type=inputType v-bind:placeholder=inputPlaceHolder @blur=inputTextCheck>
    </div>
</template>

<script>
    //email 정규표현식 
    const regExpEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regExpPhone = /^\d{3}-\d{3,4}-\d{4}$/;

    export default {
        props : {
            inputName: {type: String },
            inputType: {type: String, default: "text"},
            inputPlaceHolder: {type: String, default: "입력하세요" }
        },
        methods: {
            inputTextCheck: function(e) {
                                
                const target = e.target;
                const type = this.inputType;

                if(target.value.length > 1) {
                    if(type === "email") {
                        if(!target.value.match(regExpEmail)) {
                            this.inputClassAdd(target);                            
                            alert("이메일을 제대로 입력해주세요");
                        } else {
                            this.inputClassRemove(target);
                        }
                    }
                    if(type === "tel") {
                        if(!target.value.match(regExpPhone)) {
                            this.inputClassAdd(target);
                            alert("핸드폰을 제대로 입력해주세요");
                        } else {
                            this.inputClassRemove(target);
                        }
                    } 
                } else if(target.value.length === 0) {
                    this.inputClassRemove(target);
                    return;
                } else {
                    this.inputClassAdd(target);
                    alert('두 글자 이상 입력해주세요');
                }
            },
            inputClassAdd: function(t) {
                t.className = "input-warning";
            },
            inputClassRemove: function(t) {
                t.className = "";
            },
        }
    }
</script>

<style scoped>

.input-login {
    margin: 20px 0;      
}

input { 
    width: 100%;
    max-width: 430px;
    padding: .6em 1.3em;
    border: 1px solid #cdd2d4;    
    border-radius: 4px;
    background-color: #edeff0;
    outline: none;
    
}

input.input-warning {
    border: 4px solid #FF6666;
}

</style>