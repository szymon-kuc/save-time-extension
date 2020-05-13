console.log("background running!");

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text == "what is my tab_id?") {
        sendResponse(sender.tab);
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.closeThis) chrome.tabs.remove(sender.tab.id);
  });

// let isActive = false;
// var localStorage = localStorage.getItem("time")


// let interval;
// let time_local = {
//     seconds: 0,
//     minutes: 0,
//     hours: 0
// }
// timer();
// let tab_id = 0;

// let counter = () => {
//     time_local.seconds++;
    
//     if(time_local.seconds > 59){
//         time_local.minutes++;
//         time_local.seconds = 0;
//         localStorage.setItem('time', JSON.stringify(time_local));
//     }
//     if(time_local.minutes > 59){
//         chrome.tabs.remove(tab_id);
//     }
//     if(time_local.minutes > 59){
//         time_local.hours++;
//         time_local.minutes = 0;
//     }
//     window.time = (time_local.hours < 10 ? ("0"+time_local.hours) : time_local.hours) + ":" + (time_local.minutes < 10 ? ("0"+time_local.minutes) : time_local.minutes) + ":" + (time_local.seconds < 10 ? ("0"+time_local.seconds) : time_local.seconds);
//     console.log(time_local.seconds);
//     isActive = true;
// }

// chrome.tabs.onActivated.addListener(getUrl);
// chrome.tabs.onUpdated.addListener(getUrl);
// function getUrl() {
//     chrome.tabs.query({},
//         function (tabs)
//         {
//             for(i=0;i<=tabs.length; i++){
//                 console.log(tabs[i]);
//                 if(tabs[i].url.includes("youtube") || tabs[i].url.includes("facebook") && isActive==false){
//                     interval = setInterval(counter, 1000);
//                     isActive = true;
//                     tab_id = tabs[i].id;
//                     break;
//                 }
//                 else{
//                     clearInterval(interval);
//                     isActive = false;
//                }
//             }
//         });
// }
// getUrl();
// chrome.tabs.onRemoved.addListener(function(tabid, removed) {
//         getUrl();
//         localStorage.setItem('time', JSON.stringify(time_local));
//    })
   

// function timer(){

//     if(localStorage.length != 0){
//         time_local = {
//             seconds: JSON.parse(localStorage.time).seconds == undefined ? 0 : JSON.parse(localStorage.time).seconds,
//             minutes: JSON.parse(localStorage.time).minutes == undefined ? 0 : JSON.parse(localStorage.time).minutes,
//             hours: JSON.parse(localStorage.time).hours == undefined ? 0 : JSON.parse(localStorage.time).hours
//         }
//     };
    
//     window.time = localStorage === null ? 0 : (time_local.hours < 10 ? ("0"+time_local.hours) : time_local.hours) + ":" + (time_local.minutes < 10 ? ("0"+time_local.minutes) : time_local.minutes) + ":" + (time_local.seconds < 10 ? ("0"+time_local.seconds) : time_local.seconds);
// }



    
