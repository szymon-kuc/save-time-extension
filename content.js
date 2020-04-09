console.log("Chrome extension go");


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message);
        for(elt of paragraphs){
            elt.innerHTML = message.txt;
        }
}

