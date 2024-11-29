import {METHOD_TAG} from "../js/module/messageModule.js";

let currentWindowTabeQuery = {
    active: true, currentWindow: true
};

document.getElementById(METHOD_TAG.RE_BIND).addEventListener('click', function () {
    popup2Content(currentWindowTabeQuery, METHOD_TAG.RE_BIND)
});

document.getElementById(METHOD_TAG.PIP).addEventListener('click', function () {
    popup2Content(currentWindowTabeQuery, METHOD_TAG.PIP)
});

document.getElementById(METHOD_TAG.PLAY_TRANS).addEventListener('click', function () {
    popup2Content(currentWindowTabeQuery, METHOD_TAG.PLAY_TRANS)
});

document.getElementById(METHOD_TAG.SKIP).addEventListener('click', function () {
    popup2Content(currentWindowTabeQuery, METHOD_TAG.SKIP)
});

document.getElementById(METHOD_TAG.BACK).addEventListener('click', function () {
    popup2Content(currentWindowTabeQuery, METHOD_TAG.BACK)
});


const popup2Content = (queryParams, METHOD_TAG) => {
    console.log("popup2Content")
    let tabIndex = 0
    // console.log(tabIndex);
    chrome.tabs.query(queryParams, (tabs) => {
        chrome.tabs.sendMessage(tabs[tabIndex].id, {
            method: METHOD_TAG
        }, res => {
        })
    })
}