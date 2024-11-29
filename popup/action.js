import {METHOD_TAG} from "../js/module/messageModule.js";

let currentWindowTabQuery = {
    active: true, currentWindow: true
};


document.getElementById(METHOD_TAG.RE_BIND).addEventListener('click', function () {
    // popup2Content(currentWindowTabQuery, METHOD_TAG.RE_BIND)
});

document.getElementById(METHOD_TAG.PIP).addEventListener('click', function () {
    console.log("PIP clicked")
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


const popup2Content = (tag) => {
    console.log("popup2Content")
    chrome.runtime.sendMessage({
        method: METHOD_TAG.GET_INDEX,
    }, index => {
        console.log(index)
        let query = {}
        if (!index) {
            query = currentWindowTabQuery
            index = 0
        }
        console.log(query);
        console.log(index)
        chrome.tabs.query(query, (tabs) => {
            chrome.tabs.sendMessage(tabs[index].id, {
                method: tag
            })
        })

    })

}


//Background设置tab_indx
const getTabIndex = () => {
    let index
    console.log("getTabIndex()")
    chrome.runtime.sendMessage({
        method: METHOD_TAG.GET_INDEX,
    }, res => {
        console.log(res)
        index = res
    })

    return index

}
