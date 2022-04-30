import graphics from './graphics';
import store from '@/store/index';


function ping(ws, wsResponse) {
    store.commit('user/SET_PING', new Date() - new Date(wsResponse.date))
    console.log(new Date() - new Date(wsResponse.date));
    return new Date() - new Date(wsResponse.date);
}

function getWorld(ws, wsResponse) {

    if (wsResponse.data) {
        for (let obj in wsResponse.data) {
            graphics.graphishDrawInfoUpdate(wsResponse.data[obj])
        }
    }

}

export default {
    ping,
    getWorld
}
