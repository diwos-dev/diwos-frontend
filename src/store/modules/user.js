import axios from "axios";
 
export const namespaced = true;
 
export const state = {
    // currentUser: {},
}
 
export const getters = {
    
}
 
export const mutations = {
    SET_USER(){}
}
 
export const actions = {

    async registerUser({commit}, newUser){
        console.log(newUser)
        axios.post('http://server.diwos.ru/user/registration', newUser)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        commit
    },
    async authorizationUser({commit}, newUser){
        console.log("fuck2")
        axios.post('http://server.diwos.ru/user/registration', newUser)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        commit
    },
}