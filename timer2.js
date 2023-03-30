let days2 = document.getElementById('days2');
let hours2 = document.getElementById('hours2');
let minutes2 = document.getElementById('minutes2');
let seconds2 = document.getElementById('seconds2');

let dd2 = document.getElementById('dd2');
let hh2 = document.getElementById('hh2');
let mm2 = document.getElementById('mm2');
let ss2 = document.getElementById('ss2');

let day_dot2 = document.querySelector('day_dot2');
let hr_dot2 = document.querySelector('hr_dot2');
let min_dot2 = document.querySelector('min_dot2');
let sec_dot2 = document.querySelector('sec_dot2');

let endDate = '06/02/2023 00:13:00';
// date format mm/dd/yyyy

let x2 = setInterval(function(){
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    // time calculation for days, hours, minutes and seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));
    
    // output the result in element with id
    days2.innerHTML = d + "<br><br><span>Jours<span>"
    hours2.innerHTML = h + "<br><br><span>Heures<span>"
    minutes2.innerHTML = m + "<br><br><span>Minutes<span>"
    seconds2.innerHTML = s + "<br><br><span>Secondes<span>"

    // animate stroke
    dd2.style.strokeDashoffset = 440 - (440 * d) / 365;
    // 365 jours dans une année
    hh2.style.strokeDashoffset = 440 - (440 * h) / 24;
    // 24 heures dans une journée
    mm2.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 minutes dans une heure
    ss2.style.strokeDashoffset = 440 - (440 * s) / 60;
    // 60 secondes dans une minutes

    // animate circle dots
    day_dot2.style.transform = 'rotateZ(${d * 0.986} deg)';
    // 360des / 365dys = 0.986
    hr_dot2.style.transform = 'rotateZ(${h * 15} deg)';
    // 360des / 24hrs = 15
    min_dot2.style.transform = 'rotateZ(${h * 6} deg)';
    // 360deg /  60minutes = 6
    sec_dot2.style.transform = 'rotateZ(${h * 6} deg)';
    // 360deg /  60seconds = 6

    // if the countdown is over, write some text
    if(distance < 0){
        clearInterval(x);
        document.getElementById('time').style.display = 'none'
    }

})
