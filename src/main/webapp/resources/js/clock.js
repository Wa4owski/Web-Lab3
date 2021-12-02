window.onload = function() {
    setInterval(function() {

        let time = "";
        //console.log(time);
        let hours = new Date().getHours();
        time += addZero(hours) + ":";
        let minutes = new Date().getMinutes();
        time += addZero(minutes) + ":";
        let seconds = new Date().getSeconds();
        time += addZero(seconds);
        $("#clock").html(time);


        let months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let date = new Date().getDate();
        date = date + " of " + months[month] + ', ' + year;
        $("#date").html(date);

    }, 5000);
}

function addZero(number){
    return (number < 10 ? '0' : '') + number;
}