console.log("background running!");


window.time = 0;
let minutes = 0;
let hours = 0;
let i =0;
let interval;
let counter = () => {
    i++;
    
    if(i > 59){
        minutes++;
        i = 0;
    }
    if(minutes > 59){
        hours++;
        minutes = 0;
    }
    window.time = (hours < 10 ? ("0"+hours) : hours) + ":" + (minutes < 10 ? ("0"+minutes) : minutes) + ":" + (i < 10 ? ("0"+i) : i);
    console.log(i);
    
}

chrome.tabs.onActivated.addListener(function(activeInfo) {
    

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
        
});




    
