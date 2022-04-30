
import graphics from './graphics';

function ping(ws, wsResponse) {

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
