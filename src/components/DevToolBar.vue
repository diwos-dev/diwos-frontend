<template>
    <div class="container">
        <div class="menuContainer">
            <div class="menuPublicContainer">
                <input class="inputSubmit" type="submit" value="Друзья" @click="friends()" />   
                <input class="inputSubmit" type="submit" value="Донат" @click="donate()" />
                <input class="inputSubmit" type="submit" value="Настройки" @click="settings()" />
                <input class="inputSubmit" type="submit" value="ВЫХОД" @click="exit()" />
            </div>

            <div class="menuDevContainer" 
            v-if="isDevMenuVisible">
                <input type="submit" value="выбор объектов" @click="objectSelection()" />   
                <input type="submit" value="загрузка картинки" @click="uploadingImage()" />
                <input type="submit" value="создание/редактирование объекта" @click="creatingEditing()" />
            </div>
        </div>
    </div>
</template>


<script>
import { mapActions, mapGetters} from 'vuex'
import "@/assets/css/DevToolBar.scss"

export default {
    name: 'Toolbar',
    methods: {
        async exit() {
            localStorage.login = undefined
            localStorage.token = undefined
            await this.deleteToken()
            await this.deleteLogin()
            this.$router.push('login')
        },
        ...mapActions({
            deleteToken: 'user/deleteToken',
            deleteLogin: 'user/deleteLogin'
        }),

    },

    computed: {
        ...mapGetters({
            userIsAdmin: 'user/userIsAdmin',
            userToken: 'user/userToken',
            userLogin: 'user/userLogin',
        }),
    },

    mounted() {
        if (!localStorage.token || !localStorage.login) {
            this.$router.push('login')
        }
        if(this.userIsAdmin){this.isDevMenuVisible = true}
    },

    data() {
        return{
            isDevMenuVisible: false,
        }
    },
}
</script>