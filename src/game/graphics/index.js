
import { Graphics } from './graphicsClass.js'

const graphics = new Graphics();

const canvas = document.getElementsByTagName('canvas')[0];

canvas.addEventListener('mousedown', e => {
    console.log('mousedown', e);
    graphics.documentMouseX = e.offsetX;
    graphics.documentMouseY = e.offsetY;
    graphics.canvasMouseMoving = true;
});
canvas.addEventListener('mousemove', e => {
    if (graphics.canvasMouseMoving === true) {
        changePosition(e.offsetX, e.offsetY);
    }

    graphics.documentMouseX = e.offsetX;
    graphics.documentMouseY = e.offsetY;

    graphics.mouseX = graphics.x + (- graphics.SIZEx / 2 + graphics.documentMouseX) / graphics.relativeSCALE;
    graphics.mouseY = graphics.y + (graphics.SIZEy / 2 - graphics.documentMouseY) / graphics.relativeSCALE;
    //update_html_data();


});
canvas.addEventListener('mouseup', e => {
    console.log('mouseup', e);
    if (graphics.canvasMouseMoving === true) {
        changePosition(e.offsetX, e.offsetY);
        graphics.documentMouseX = 0;
        graphics.documentMouseY = 0;
        graphics.canvasMouseMoving = false;
    }
});
canvas.addEventListener('wheel', e => {

    let nowSCALEChange;

    if (e.deltaY < 0) {
        nowSCALEChange = 1 / graphics.SCALEChange;

    } else if (e.deltaY > 0) {
        nowSCALEChange = graphics.SCALEChange;

    } else {
        nowSCALEChange = 1;

    }

    console.log('wheel', graphics.SCALE, nowSCALEChange, graphics.SCALE * nowSCALEChange)
    graphics.SCALE = graphics.SCALE * nowSCALEChange;

    graphics.x = graphics.mouseX - (- graphics.SIZEx / 2 + graphics.documentMouseX) / graphics.relativeSCALE;
    graphics.y = graphics.mouseY - (graphics.SIZEy / 2 - graphics.documentMouseY) / graphics.relativeSCALE;

    // canvas_update()

});

function changePosition(newMouseX, newMouseY) {

    const mouseXChange = newMouseX - graphics.documentMouseX;
    const mouseYChange = newMouseY - graphics.documentMouseY;

    graphics.x = graphics.x - mouseXChange / graphics.relativeSCALE;
    graphics.y = graphics.y - mouseYChange / graphics.relativeSCALE;

    // canvas_update()
}

export default graphics;