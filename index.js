// time & date display
function updateTime(params) {
    let Times=document.querySelector('.displayTime');
    let session=document.querySelector('.session')
    let currentTime=new Date();
    let hours=updateZero(currentTime.getHours());
    let minutes=updateZero(currentTime.getMinutes());
    let seconds=updateZero(currentTime.getSeconds());
    hours>12 ? `0${hours=hours-12}` : hours;
    hours>=12 ? session.innerHTML='AM':session.innerHTML='PM'

    let displayTime=`${hours}:${minutes}:${seconds}`
    Times.innerHTML=displayTime;


}

setInterval(updateTime,10)


function updateZero(zeroadd) {
    return zeroadd<10 ? `0${zeroadd}` : zeroadd
}


function updateDate(params) {
    let date=document.querySelector('.displayDate');
    let h1=document.querySelector('.h1');
    let h2=document.querySelector('.h2');
    let currentDate=new Date();
    let dates=zero(currentDate.getDate());
    let month=zero(currentDate.getMonth()+1);
    let year=zero(currentDate.getFullYear());
    let day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let days=day[currentDate.getDay()]
h1.innerHTML=days
let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let monthed=months[currentDate.getMonth()]
h2.innerHTML=monthed
   let displayDates=`${dates}/${month}/${year}`;
   date.innerHTML=displayDates
}

updateDate()

function zero(add) {
    return add<10 ? `0${add}` : add
}
