

function sendMessage(ws, method, message ) {

    const wsPayload = {
        method,
        message,
        date: new Date(),
        token: localStorage.getItem('token')
    }

    console.log('WS sendMessage', method, wsPayload, JSON.stringify(wsPayload));
    ws.send(JSON.stringify(wsPayload));
}

function ping(ws, method = 'ping', message = {}) {
    sendMessage(ws, method, message);
}

export default {
    sendMessage,
    ping
}
