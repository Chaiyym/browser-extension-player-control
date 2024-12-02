import {METHOD_TAG, currentWindowTabQuery} from "../js/module/messageModule.js";

document.getElementById(METHOD_TAG.RE_BIND).addEventListener('click', function () {
    storageTabInfo()
});

document.getElementById(METHOD_TAG.PIP).addEventListener('click', function () {
    popup2Content(METHOD_TAG.PIP)
});

document.getElementById(METHOD_TAG.PLAY_TRANS).addEventListener('click', function () {
    popup2Content(METHOD_TAG.PLAY_TRANS)
});

document.getElementById(METHOD_TAG.SKIP).addEventListener('click', function () {
    popup2Content(METHOD_TAG.SKIP)
});

document.getElementById(METHOD_TAG.BACK).addEventListener('click', function () {
    popup2Content(METHOD_TAG.BACK)
});


async function popup2Content(tag) {
    let tabInfo = await chrome.runtime.sendMessage({
        method: METHOD_TAG.GET_INDEX,
    })
    if (tabInfo?.tabId) {
        //获取到tabId 直接通知对应tab
        chrome.tabs.sendMessage(tabInfo.tabId, {
            method: tag
        })
    } else {
        //没有获取到tabId,通知当前tab,并存储
        let [tab] = await chrome.tabs.query(currentWindowTabQuery)
        if (tab) {
            //通知
            chrome.tabs.sendMessage(tab.id, {
                method: tag
            })
            //存储
            chrome.runtime.sendMessage({
                method: METHOD_TAG.SET_INDEX,
                tabId: tab.id,
                windowId: tab.windowId
            });
        }
    }

}

async function storageTabInfo() {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if (tab) {
        chrome.runtime.sendMessage({
            method: METHOD_TAG.SET_INDEX,
            tabId: tab.id,
            windowId: tab.windowId
        });
    }

}


