let d = new Date();
let time = d.toLocaleTimeString();
function printTime(time) {
    console.log(time);
}
setInterval(printTime, 1000, time);