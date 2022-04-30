<template> 
    <div class="wrapper">
        <div class="registrationForm">
            <div class="registrationFields">
                <h1>Авторизация</h1>
                <input v-model="user_login" class="inputText" type="text" name="username" placeholder="Имя пользователя" />
                <input v-model="user_password" class="inputText" type="password" name="password" placeholder="Пароль" />
                <span id="error">{{ errorMessage }}</span>
                <input class="inputSubmit" type="submit" value="Войти" @click="auth()" />
                <p class="line"> Еще не зарегистрированы?
                    <router-link to="/register"> Регистрация </router-link>
                </p>
            </div>
            <div class="registrationServices">
                <input type="image" src="VK_logo.png" @click="authVK()" />
                <input type="image" src="Google_logo.png" @click="authGoogle()" />
                <input type="image" src="Facebook_logo.png" @click="authFacebook()" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import '@/assets/css/LoginForm.scss'
export default {
    name: 'LogForm',
    data() {
        return {
            user_login : "",
            user_password : "",
            errorMessage : ""
        }
    },
    methods:{
        async auth() {
            const requestOptions = {
                login : this.user_login,
                password : this.user_password
            }
            await this.authorization(requestOptions)
            localStorage.login = this.userLogin;
            localStorage.token = this.userToken
            if (!this.userToken || !this.userLogin) {
                const error = document.getElementById('error')
                this.errorMessage = "Неверный логин или пароль"
                error.style.display = "block";
                setTimeout(()=>{
                    error.style.opacity = 1;
                },5)
                return 
            }
            this.$router.push('game')
        },
        ...mapActions({
            authorization: 'user/authorizationUser',
        })
    },

    computed:{
        ...mapGetters({
            userToken: 'user/userToken',
            userLogin: 'user/userLogin',
        }),
    },
}
</script>