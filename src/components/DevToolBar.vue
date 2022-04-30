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
        exit() {
            console.log(this.deleteToken())
            localStorage.login = this.userLogin;
            localStorage.token = this.userToken
            this.$router.push('login')
        },
        ...mapActions({
            isUserAdmin: 'user/isUserAdmin',
            deleteToken: 'user/deleteToken'
        }),

    },

    computed: {
        ...mapGetters({
            isUserAdmid: 'user/isUserAdmin',
            userToken: 'user/userToken'
        }),
    },

    mounted() {
        if (!localStorage.token) {
            this.$router.push('login')
        }
        if(this.isUserAdmin){this.isDevMenuVisible = true}
    },

    data() {
        return{
            isDevMenuVisible: false,
        }
    },
}
</script>