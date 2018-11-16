<template>
    <div class="input-login">
        <input v-bind:type=inputType v-bind:placeholder=inputPlaceHolder>        
    </div>
</template>

<script>
    export default {
        props : {
            inputType: {type: String, default: 'password'},
            inputPlaceHolder: {type: String, default: '패스워드 입력' }
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

</style>