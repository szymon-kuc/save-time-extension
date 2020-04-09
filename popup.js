function setup(){

    let params = {
        active: true,
        currentWindow: true
    }

    userinput.onkeydown = function(){
        chrome.tabs.query(params, gotTabs);

        function gotTabs(tabs){
            let msg = {
                txt: userinput.value
            }
            chrome.tabs.sendMessage(tabs[0].id, msg)
        }
    }
   
}

setup();