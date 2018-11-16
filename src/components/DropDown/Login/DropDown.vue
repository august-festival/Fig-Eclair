<template>
    <div class="dropdown-login">
        <select v-bind:name=dropdownName v-bind:id=dropdownName>
            <option>언어 선택</option>            
            <option v-bind:value="v.value" v-for="v in list" :key="v.value">
                {{ v.text }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            dropdownName: {type: String},
            list: {type: Array}
        }
                    
    }    
</script>

<style scoped>

.dropdown-login {
    margin: 20px 0;      
}

#language { 
    width: 100%;
    max-width: 430px;
    padding: .6em 1.3em;
    border: 1px solid #cdd2d4;    
    border-radius: 4px;
    background-color: #edeff0;
    outline: none;    
}

</style>