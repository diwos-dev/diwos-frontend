import axios from "axios";
 
export const namespaced = true;
 
export const state = {
    currentUser: {},
    userToken: "",
    userPing: 0,
    admin: false,
}
 
export const getters = {
    userToken(state) {
        return state.userToken
    },
    userPing(state) {
        return state.userPing
    },
}
 
export const mutations = {
    SET_USER(state, item){
        state.currentUser = item
    },
    SET_ADMIN(state, item){
        state.admin = item
    },
    SET_PING(state, item){
        state.userPing = item
    },
    SET_USERTOKEN(state, item){
        state.userToken = item
    },
}
 
export const actions = {

    async registerUser({commit}, newUser){
        console.log(newUser)
        await axios.post('http://server.diwos.ru/user/registration', newUser)
        .then(res => {
            commit('SET_USERTOKEN', res.data.token)
            commit('SET_ADMIN', res.data.isAdmin)
            return true
        })
        .catch(err => {
            return err.response
        })
    },
    async authorizationUser({commit}, registeringUser){
        await axios.post('http://server.diwos.ru/user/auth', registeringUser)
        .then(response => {
            commit('SET_USERTOKEN', response.data.token)
            commit('SET_ADMIN', response.data.isAdmin)
        })
        .catch(err => {
            return err.response
        })
    },
    isUserAdmin({commit}){
        commit
        return this.admin
    },
    deleteToken({commit}){
        commit('SET_USERTOKEN', "")
    }

}

