import {METHOD_TAG,} from './js/module/messageModule.js';


//锁定tab index
let tab_index = 2


//监听快捷键,并发消息给Content.js,使其执行相关命令
chrome.commands.onCommand.addListener((command) => {
        background2Content({}, command);
    }
)

const background2Content = (queryParams, METHOD_TAG) => {
    console.log("background2Content")
    let tabIndex = 0
    console.log(tabIndex);
    chrome.tabs.query(queryParams, (tabs) => {
        chrome.tabs.sendMessage(tabs[tabIndex].id, {
            method: METHOD_TAG
        }, res => {
        })
    })
}


//监听Content.js的消息,获取和存储共享的页面index
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("background listener")
    console.log(message)
    switch (message.method) {
        case METHOD_TAG.GET_INDEX:
            sendResponse(tab_index)
            break;
        case METHOD_TAG.SET_INDEX:
            tab_index = message.index
            break;
    }
    return true;
})


