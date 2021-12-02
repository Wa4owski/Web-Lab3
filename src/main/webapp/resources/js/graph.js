//function generateGraph() {
    let ctx = (document.getElementById("graph-canvas")).getContext('2d');
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(500, 250);
    ctx.moveTo(250, 500);
    ctx.lineTo(250, 0);

    ctx.moveTo(50, 253);
    ctx.lineTo(50, 247);
    ctx.moveTo(150, 253);
    ctx.lineTo(150, 247);
    ctx.moveTo(350, 253);
    ctx.lineTo(350, 247);
    ctx.moveTo(450, 253);
    ctx.lineTo(450, 247);

    ctx.font = "12px Verdana";
    ctx.textAlign = "start";
    ctx.fillText("-R", 43, 245);
    ctx.fillText("-R/2", 138, 245);
    ctx.fillText("R/2", 340, 245);
    ctx.fillText("R", 445, 245);

    ctx.moveTo(247, 50);
    ctx.lineTo(253, 50);
    ctx.moveTo(247, 150);
    ctx.lineTo(253, 150);
    ctx.moveTo(247, 350);
    ctx.lineTo(253, 350);
    ctx.moveTo(247, 450);
    ctx.lineTo(253, 450);

    ctx.font = "12px Verdana";
    ctx.textAlign = "left";
    ctx.fillText("-R", 255, 453);
    ctx.fillText("-R/2", 255, 353);
    ctx.fillText("R/2", 255, 153);
    ctx.fillText("R", 255, 55);

    ctx.lineWidth = 1;
    ctx.moveTo(246, 7);
    ctx.lineTo(250, 0);
    ctx.lineTo(254, 7);
    ctx.moveTo(493, 246);
    ctx.lineTo(500, 250);
    ctx.lineTo(493, 254);
    ctx.stroke();
// }
// generateGraph();
// ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
// ctx.moveTo(250, 150);
// ctx.lineTo(150, 250);
// ctx.lineTo(250, 250);
// ctx.lineTo(250, 150);
//
// ctx.rect(250, 150, 200, 100);
//
//
// ctx.arc(250, 250, 200, 0, Math.PI/2, false);
// ctx.fill();

