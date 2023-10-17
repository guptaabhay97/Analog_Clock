let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');


function displayTime(params) {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRe = 30 * hh + mm/2 + ss/120;
    let mRe = 6 * mm + ss/10;
    let sRe = 6 * ss; 
    hour.style.transform = `rotate(${hRe}deg)`;
    minute.style.transform =`rotate(${mRe}deg)`;
    second.style.transform = `rotate(${sRe}deg)`;
}
setInterval(displayTime , 1000)