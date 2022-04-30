<template> 
    <div class="chatForm"> 
        <message-list :messages="messages" />
        <message-form @send="sendMessage" />
    </div>
</template>

<script>

import MessageList from "./MessageList.vue"
import MessageForm from "./MessageForm.vue"
// import ws from '@/game/webSocketInit';
// import { sendMessage } from "@/game/webSocketMethods"

export default {
    name: 'Chat',
    components: {
        MessageList: MessageList,
        MessageForm: MessageForm,
    },
    data() {
        return {
            messages: [

            ],
        }
    },
    methods:{
       sendMessage(message) {
           console.log(message);
            // this.messages.push(message);
            // message.token = 
            // sendMessage(ws, 'chatMessage', message)
       }
    },
    created() {
        // socket.on('chatMessage', (message) => {
        //     this.messages.push(message);
        // })
    }
}
</script>

<style>
.chatForm {
    width: 400px;
    height: auto;
    background-color: white;
    border: solid 2px;
}

</style>