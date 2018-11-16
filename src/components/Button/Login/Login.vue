<template>
  <div class="btn-login">
    <button v-bind:class=btnType>{{ btnName }}</button>
  </div>
</template>

<script>
  export default {
    props : {
      btnName: { type:String, default: 'button'},
      btnType: { type:String}
    }
    
  }
</script>

<style scoped>

.btn-login {
    margin: 20px 0;      
}

button {
    width: 100%;
    max-width: 430px;     
    padding: .6em 1.3em;
    border: 0;    
    border-radius: 4px;
    background-color: #000;
    color: #fff;        
    font-size: 1.2em;
    font-weight: 300;
    cursor: pointer;
    letter-spacing: 1.5px;
    outline: none;
}

button:hover {
    opacity: 0.5;
}

.btn-account {
    background-color: #00CCCC;
}

.btn-facebook {
    background-color: #4267b2;    
}

.btn-google {
    background-color: #db4437;
}

.btn-naver {
    background-color: #1fbc02;
}

.btn-kakao {
    background-color: #ffdc00;
}



</style>