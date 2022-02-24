function setTime() {
    let date = new Date();
    let hours = date.getHours(); 
    let min = date.getMinutes(); 
    let sec = date.getSeconds();
    let session = 'PM';

    if (hours == 0) {
        hours = 12;
    }
    if (hours == 12) {
        hours = hours - 12;
        session = 'AM';
    }

    hours = (hours <10) ? '0' + hours : hours;
    min = (min <10) ? '0' + min : min;
    sec = (sec <10) ? '0' + sec : sec;

    // This conditon also does the same output...
    // if (hours < 10) {
    //     hours = '0' + hours;
    // }
    // if (min < 10) {
    //     min = '0' + min;
    // }
    // if (sec < 10) {
    //     sec = '0' + sec;
    // }

    let time = hours +':' + min + ':' + sec + '' + session;

    let clock = document.getElementById('time');
    clock.innerText = time;

    setTimeout(setTime, 1000);
}
setTime();