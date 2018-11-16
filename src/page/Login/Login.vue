<template>
    <div>        
        <h1>Login in</h1>                
        <btn-login btnType="btn-facebook" btnName="facebook"></btn-login>
        <btn-login btnType="btn-google" btnName="google"></btn-login>
        <btn-login btnType="btn-naver" btnName="naver"></btn-login>
        <btn-login btnType="btn-kakao" btnName="kakao"></btn-login>
    </div>
</template>

<script>

import ButtonLogin from '@/components/Button/Login/Login'
import InputText from '@/components/Input/Login/InputText'
import InputPassword from '@/components/Input/Login/InputPassword'

export default {
    components : {
        
        'btn-login' : ButtonLogin,
        'input-text' : InputText,
        'input-password' : InputPassword,
    }
}
</script>

<style scoped>

h1 {
    margin-bottom: 3rem;
}


</style>
