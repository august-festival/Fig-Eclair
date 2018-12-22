<template lang="pug">
    #login_workspace
        h2 Login

        div
            a(class="login-btn btn btn-primary" href="/api/v1/auth/facebook")
                | 페이스북으로 로그인
        div
            a(class="login-btn btn btn-success" href="/api/v1/auth/naver")
                | 네이버로 로그인
        div
            a(class="login-btn btn btn-warning" href="/api/v1/auth/kakao")
                | 카카오로 로그인
        div
            a(class="login-btn btn btn-danger" href="/api/v1/auth/google")
                | 구글로 로그인
</template>

<script>
    export default {
        name: 'Login'
    }
</script>

<style lang="scss" scoped>
    #login_workspace {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        padding: 40px;
        background: rgba(0, 0, 0, .8);
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0, 0, 0, .5);
        border-radius: 10px;

        h2 {
            margin: 0 0 30px;
            padding: 0;
            color: #fff;
            text-align: center;
        }

        .input_box {
            position: relative;

            input {
                width: 100%;
                padding: 10px 0;
                font-size: 16px;
                color: #fff;
                margin-bottom: 30px;
                border: none;
                border-bottom: 1px solid #fff;
                outline: none;
                background: transparent;

                &:focus ~ label,
                &:valid ~ label {
                    top: -18px;
                    left: 0;
                    color: #03a9f4;
                    font-size: 12px;
                }
            }

            label {
                position: absolute;
                top: 0;
                left: 0;
                padding: 10px 0;
                font-size: 16px;
                color: #fff;
                pointer-events: none;
                transition: .5s;
            }

        }
        a.login-btn.btn {
            color: #fff;
            margin: 2px 5px;
            width: 160px;
            text-align: left;
        }
    }
</style>
