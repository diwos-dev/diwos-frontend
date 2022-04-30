

function ping(ws, wsResponse) {

    console.log(new Date() - wsResponse.date);
    
    return new Date() - wsResponse.date;

}

export default {
    ping
}
