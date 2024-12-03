import {currentWindowTabQuery, METHOD_TAG,} from './js/module/messageModule.js';


let tabInfo = {
    tabId: null,
    windowId: null
}

//监听快捷键,并发消息给Content.js,使其执行相关命令
chrome.commands.onCommand.addListener((command) => {
    execCommand(command)
})


function execCommand(command) {
    if (tabInfo?.tabId) {
        chrome.tabs.sendMessage(tabInfo.tabId, {
            method: command
        })
    } else {
        //没有获取到tabId,通知当前tab,并存储
        chrome.tabs.query(currentWindowTabQuery, ([tab]) => {
            if (tab) {
                //通知
                chrome.tabs.sendMessage(tab.id, {
                    method: command
                })
                //存储
                tabInfo.tabId = tab.tabId;
                tabInfo.windowId = tab.windowId;
            }
        })
    }
}

//监听Content.js的消息,获取和存储共享的页面index
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.method) {
        case METHOD_TAG.GET_INDEX:
            sendResponse(tabInfo)
            break;
        case METHOD_TAG.SET_INDEX:
            tabInfo = {
                tabId: null,
                windowId: null
            }
            tabInfo.tabId = message.tabId;
            tabInfo.windowId = message.windowId;
            break;
    }
    return true;
})



