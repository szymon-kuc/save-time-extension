console.log("Chrome extension go");
let word ;
let ls;
let tab_id = 0;
chrome.runtime.sendMessage({ text: "what is my tab_id?" }, tab => {
    let url = tab.url;
    tab_id = tab.id;
    let index;
    let index2;
    if(tab.url.includes("www")){
        index = url.indexOf(".") + 1;
        index2 = url.indexOf(".", index);
    }
    else {
        index = url.indexOf("/") + 2;
        index2 = url.indexOf(".");
    }
    word = url.slice(index, index2);
    ls =  JSON.parse(localStorage.getItem(word));
    timer();
 });

let time_local = {
    seconds: 0,
    minutes: 0,
    hours: 0
}
function timer(){
    if(localStorage.length != 0){
        time_local = {
            seconds: ls.seconds == undefined ? 0 : ls.seconds,
            minutes: ls.minutes == undefined ? 0 : ls.minutes,
            hours: ls.hours == undefined ? 0 : ls.hours
        }
    };

}
let counter = () => {
    time_local.seconds++;

    if(time_local.seconds > 59){
        time_local.minutes++;
        time_local.seconds = 0;
        localStorage.setItem(word, JSON.stringify(time_local));
    }

    if(time_local.minutes > 1 && word=="youtube"){
        chrome.runtime.sendMessage({closeThis: true});
    }
    if(time_local.minutes > 59){
        time_local.hours++;
        time_local.minutes = 0;
    }
    console.log(time_local.minutes +":" + time_local.seconds);
}

setInterval(counter, 1000);

// else{
//     clearInterval(interval);
//     isActive = false;
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
