<template lang="pug">
    #login_workspace
        h2 Login
        .input_box
            input(type="text" required)
            label email
        .input_box
            input(type="password" required)
            label password
        button(class="btn btn-primary") 로그인
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
        box-shadow: 0 15px 25px rgba(0,0,0,.5);
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
    }
</style>
