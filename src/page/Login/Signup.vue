<template>
    <div>
        <h1>Create a Account</h1>
        <form action="" method="POST">
            <input-text inputName="nickname" inputPlaceHolder="닉네임"></input-text>
            <input-text inputName="email" inputType="email" inputPlaceHolder="이메일"></input-text>
            <input-text inputName="name" inputPlaceHolder="이름"></input-text>
            <input-text inputName="phone" inputType="tel" inputPlaceHolder="핸드폰 입력 (ex: 010-4434-3434)"></input-text>
            <dropdown dropdownName="language" :list="dropdownlist"></dropdown>
            <btn-login btnType="btn-account" btnName="New Account"></btn-login>
        </form>
    </div>
</template>

<script>    
    import ButtonLogin from '@/components/Button/Login/Login'
    import InputText from '@/components/Input/Login/InputText'
    import InputPassword from '@/components/Input/Login/InputPassword'
    import DropDown from '@/components/DropDown/Login/DropDown'

    export default {
        data: function() {            
            return {
                dropdownlist : [
                    {value: "KOR", text: "한국어 (KOR)"},
                    {value: "USA", text: "미국어 (USA)"},
                    {value: "JAP", text: "일본어 (JAP)"}
                ]       
            }
        },        
        components: {
            'btn-login' : ButtonLogin,  
            'input-text' : InputText,
            'input-password' : InputPassword,
            'dropdown': DropDown
        }
    }
</script>

<style scoped>

h1 {
    margin-bottom: 3rem;
}

</style>