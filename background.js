import {METHOD_TAG,} from './js/module/messageModule.js';


//锁定tab index
let tab_index = 1

//监听快捷键,并发消息给Content.js,使其执行相关命令
chrome.commands.onCommand.addListener((command) => {
        console.log("background2Content")


        chrome.tabs.query({}, (tabs) => {
            chrome.tabs.sendMessage(tabs[tab_index | 0].id, {
                method: METHOD_TAG
            }, res => {
            })
        })
    }
)


//监听Content.js的消息,获取和存储共享的页面index
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("background listener")
    console.log(message);
    switch (message.method) {
        case METHOD_TAG.GET_INDEX:
            console.log("GET_INDEX")
            console.log("background: " + tab_index);
            sendResponse(tab_index)
            break;
        case METHOD_TAG.SET_INDEX:
            tab_index = message.index
            break;
    }
    return true;
})


//Background设置tab_indx
const setTabIndex = (index) => {
    console.log("setTabIndex()")
    chrome.runtime.sendMessage({
        method: METHOD_TAG.SET_INDEX,
        index: index
    }, res => {
    })
}

