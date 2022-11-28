
import webSocketMethods from './webSocketMethods.js';
import webSocketMethodsProcessing from './webSocketMethodsProcessing.js';

console.log("Starting connection to WebSocket Server")
const ws = new WebSocket("ws://localhost:13372")

ws.onmessage = function(event) {

    const wsResponse = JSON.parse(event.data);
    console.log('WS onmessage', wsResponse.method, wsResponse);

    if (webSocketMethodsProcessing[wsResponse.method]) {
        webSocketMethodsProcessing[wsResponse.method](ws, wsResponse);
    }

}

ws.onopen = function(event) {
    console.log("WS connected ", event);
    webSocketMethods.ping(ws);
    webSocketMethods.getWorld(ws);
}

export default ws;
