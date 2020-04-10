console.log("background running!");

var localStorage = localStorage.getItem("time");
let time_local = {
    seconds: JSON.parse(localStorage.time).seconds == undefined ? 0 : JSON.parse(localStorage.time).seconds,
    minutes: JSON.parse(localStorage.time).minutes == undefined ? 0 : JSON.parse(localStorage.time).minutes,
    hours: JSON.parse(localStorage.time).hours == undefined ? 0 : JSON.parse(localStorage.time).hours
}
window.time = localStorage === null ? 0 : (time_local.hours < 10 ? ("0"+time_local.hours) : time_local.hours) + ":" + (time_local.minutes < 10 ? ("0"+time_local.minutes) : time_local.minutes) + ":" + (time_local.seconds < 10 ? ("0"+time_local.seconds) : time_local.seconds);
let interval;
let counter = () => {
    time_local.seconds++;
    
    if(time_local.seconds > 59){
        time_local.minutes++;
        time_local.seconds = 0;
        localStorage.setItem('time', JSON.stringify(time_local));
    }
    if(time_local.minutes > 59){
        time_local.hours++;
        time_local.minutes = 0;
    }
    window.time = (time_local.hours < 10 ? ("0"+time_local.hours) : time_local.hours) + ":" + (time_local.minutes < 10 ? ("0"+time_local.minutes) : time_local.minutes) + ":" + (time_local.seconds < 10 ? ("0"+time_local.seconds) : time_local.seconds);
    console.log(time_local.seconds);
}

chrome.tabs.onActivated.addListener(getUrl);;

function getUrl() {
    chrome.tabs.query(
        {
         lastFocusedWindow: true,
         active: true
        },
        function (tabs)
        {
            let url = tabs[0].url;

            if(url.includes("youtube")){
                interval = setInterval(counter, 1000)
            }
            else{
                 clearInterval(interval);
            }
        });
}
getUrl();
chrome.tabs.onRemoved.addListener(function(tabid, removed) {
        localStorage.setItem('time', JSON.stringify(time_local));
   })
   



    
