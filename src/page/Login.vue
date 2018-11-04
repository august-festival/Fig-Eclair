<template>
    <div id="login_workspace">
        <span>아이디</span><input type="text">
        <span>비밀번호</span><input type="password">
        <button>로그인</button>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style lang="scss">
    #login_workspace {
        background-color: red;
        width: 100px;
        height: 100px;
    }
</style>
