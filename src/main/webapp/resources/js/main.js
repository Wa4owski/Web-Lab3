//import {} from "./graph.js";
//setCanvas(document.getElementById("graph-canvas"));
//drawGraphic();
let  ctx1 = (document.getElementById("graph-canvas")).getContext('2d');
function generateGraph(){
    ctx1.lineWidth = 2;
    ctx1.beginPath();
    ctx1.moveTo(0, 250);
    ctx1.lineTo(500, 250);
    ctx1.moveTo(250, 500);
    ctx1.lineTo(250, 0);

    ctx1.moveTo(50, 253);
    ctx1.lineTo(50, 247);
    ctx1.moveTo(150, 253);
    ctx1.lineTo(150, 247);
    ctx1.moveTo(350, 253);
    ctx1.lineTo(350, 247);
    ctx1.moveTo(450, 253);
    ctx1.lineTo(450, 247);

    ctx1.font = "12px Verdana";
    ctx1.textAlign = "start";
    ctx1.fillText("-R", 43, 245);
    ctx1.fillText("-R/2", 138, 245);
    ctx1.fillText("R/2", 340, 245);
    ctx1.fillText("R", 445, 245);

    ctx1.moveTo(247, 50);
    ctx1.lineTo(253, 50);
    ctx1.moveTo(247, 150);
    ctx1.lineTo(253, 150);
    ctx1.moveTo(247, 350);
    ctx1.lineTo(253, 350);
    ctx1.moveTo(247, 450);
    ctx1.lineTo(253, 450);

    ctx1.font = "12px Verdana";
    ctx1.textAlign = "left";
    ctx1.fillText("-R", 255, 453);
    ctx1.fillText("-R/2", 255, 353);
    ctx1.fillText("R/2", 255, 153);
    ctx1.fillText("R", 255, 55);

    ctx1.lineWidth = 1;
    ctx1.moveTo(246, 7);
    ctx1.lineTo(250, 0);
    ctx1.lineTo(254, 7);
    ctx1.moveTo(493, 246);
    ctx1.lineTo(500, 250);
    ctx1.lineTo(493, 254);
    ctx1.stroke();
}
let x, y;
let graphUse = false;
const r = 5;
const rInput = document.getElementById("form:r_input")
const xHidden = document.getElementById("form:x-hidden");
const yInput = document.getElementById("form:y-param");



function submit() {
    $('#errors').empty();
    if (validateData()) {
       sendRequest();
    }
}

function sendRequest(){
    $('#errors').empty();
    return  $.ajax({
        url: "controller",
        method: "POST",
        data: {
            'x': x,
            'y': y,
            'r': r,
            'graphUse': graphUse
        },
        success: function (data) {
            $('#result-table tr:first').after(data);
            return true;
        }
    });
}

$("#form\\:y-input").change(function() {
    alert("Its here");
    if(!this.value) {
        redrawS();
    }
});

function redrawS(){
   // alert('redrawS');
    ctx1.clearRect(0, 0, 500, 500);
    generateGraph();
    let offR = 40*rInput.value + 4;
    console.log(offR, rInput.value);
    ctx1.fillStyle = "rgba(0, 0, 255, 0.5)";
    ctx1.moveTo(250, 250 - offR);
    ctx1.lineTo(250-offR/2, 250);
    ctx1.lineTo(250, 250);
    ctx1.lineTo(250, 250 - offR);

    ctx1.rect(250-offR/2, 250, offR/2, offR);


    ctx1.arc(250, 250, offR, 0, Math.PI/2, false);
    ctx1.fill();
}
function drawPoint() {
    // if(data.status === 'complete'){
        let X = xHidden.value;
        let Y = yInput.value;
        let offX = X*(200/r)+250;
        let offY = -Y*(200/r)+250;
        let isHit = true;
        console.log("DRAW");
        console.log(X);
        console.log(Y);
        ctx1.beginPath();
        ctx1.fillStyle = (isHit ? 'green' :'red');
        ctx1.arc(offX, offY, 2, 0, 2 * Math.PI);
        ctx1.fill();
    // }
}


$('#graph-canvas').on("click", function (event) {
    //if (validateR()) {
    console.log('SUBM');
        let offX = event.offsetX;
        let offY = event.offsetY;
        console.log(offX, offY);
        x = (offX - 250) * (r / 200);
        y = - (offY - 250) * (r / 200);
        console.log(x, y);
        xHidden.value = x;
        yInput.value = y;
        document.getElementById("form:submitButton").click();
        console.log("click");
        // graphUse = true;
        // if (sendRequest()) {
        //      drawPoint(offX, offY);
        // }
        // graphUse = false;
   // }
    // else {
    //     alert("R not chosen.")
    // }
})


$(document).ready(function () {

    let buttons = document.querySelectorAll(".x-group");


    console.log(xHidden.value);
    console.log(buttons.length);
    if (xHidden.value && buttons) {
        console.log(xHidden.value);
        buttons[Math.round(xHidden.value) + 5].style.color = 'red';
    }

    buttons.forEach(click);
    function click(element) {
        element.onclick = function () {
            buttons.forEach(function (element) {
                element.style.color = null;
            });
            this.style.color = "red";
            xHidden.value = this.textContent;
            console.log(xHidden.value);
        }
    }
});

function successFunc(data) {
    console.log('AAAAAAAAAAAAAA');
    if (data.status === 'success') {
        alert('complete');
    }
    else{
        alert('fail');
    }
}

