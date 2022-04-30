
import { Graphics } from './graphics.js'
import ws from './webSocketInit.js';

const graphics = new Graphics();

console.log('Game services started', ws, graphics);

// socket.on('world', (world) => {
//     console.log('in', world);
//     localStorage.setItem('mainObjects', JSON.stringify(world))

//     if (world) {
//         world.data.forEach(obj => {
//             graphics.graphishDrawInfoUpdate(obj)
//         });
//     }
// })
