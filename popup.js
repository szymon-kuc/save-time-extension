
let h1 = document.getElementsByTagName('span')[0];


let bgpage = chrome.extension.getBackgroundPage();
setInterval(()=>{
    let word = bgpage.time;
    h1.innerHTML = word;
})
