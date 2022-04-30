import axios from "axios";
 
export const namespaced = true;
 
export const state = {
    login: undefined,
    userToken: undefined,
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
    userLogin(state){
        return state.login 
    },
    userIsAdmin(state){
        return state.admin 
    },
}
 
export const mutations = {
    SET_LOGIN(state, item){
        state.login = item
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
        await axios.post('http://server.diwos.ru/user/registration', newUser)
        .then(res => {
            commit('SET_USERTOKEN', res.data.token)
            commit('SET_ADMIN', res.data.isAdmin)
            commit('SET_LOGIN', res.data.login)
        })
        .catch(err => {
            return err.response
        })
    },
    async authorizationUser({commit}, registeringUser){
        await axios.post('http://server.diwos.ru/user/auth', registeringUser)
        .then(res => {
            commit('SET_USERTOKEN', res.data.token)
            commit('SET_ADMIN', res.data.isAdmin)
            commit('SET_LOGIN', res.data.login)
        })
        .catch(err => {
            return err.response
        })
    },
    async deleteToken({commit}){
        await commit('SET_USERTOKEN', undefined)
    },
    async deleteLogin({commit}){
        await commit('SET_LOGIN', undefined)
    },

}

