

function ping(ws, wsResponse) {

    console.log(new Date() - new Date(wsResponse.date));
    
    return new Date() - new Date(wsResponse.date);

}

export default {
    ping
}
