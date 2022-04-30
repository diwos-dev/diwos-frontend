<template>
    <div class="wrapper">
        <div class="registrationForm">
            <div class="registrationFields">
                <h1>Регистрация</h1>
                <input v-model="user_login" class="inputText" type="text" name="username" placeholder="Имя пользователя" />
                <input v-model="user_password" class="inputText" type="password" name="password" placeholder="Пароль" />
                <input v-model="user_password2" class="inputText" type="password" name="password2" placeholder="Повторите пароль" />
                <span id="error">{{ errorMessage }}</span>
                <input class="inputSubmit"  type="submit" value="Создать аккаунт" @click="reg()" />
                <p class="line"> Уже зарегистрированы?
                    <router-link to="/login"> Авторизация </router-link>
                </p>
            </div>
            <div class="registrationServices">
                <input type="image" src="VK_logo.png" @click="regVK()" />
                <input type="image" src="Google_logo.png" @click="regGoogle()" />
                <input type="image" src="Facebook_logo.png" @click="regFacebook()" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import '@/assets/css/LoginForm.scss'

export default {
    name: 'RegForm',
    data() {
        return {
            user_login : "",
            user_password : "",
            user_password2 : "",
            errorMessage : ""
        }
    },
    methods:{
        async reg() {
            if (this.user_password == this.user_password2) {
                const requestOptions = {
                    username : this.user_login,
                    password : this.user_password
                }
            await this.register(requestOptions)
            localStorage.login = this.userLogin;
            localStorage.token = this.userToken
                if(localStorage.token) {
                    this.$router.push('game')
                }

            } else {
                const error = document.getElementById('error')
                this.errorMessage = "Пароли не совпадают"
                error.style.display = "block";
                setTimeout(()=>{
                    error.style.opacity = 1;
                },5)
            }
        },
        ...mapActions({
            register: 'user/registerUser'
        }),
    },

    computed:{
        ...mapGetters({
            userToken: 'user/userToken'
        }),
    },

    mounted() {
        if (localStorage.token) {
            this.$router.push('game')
        }
    }
}
</script>