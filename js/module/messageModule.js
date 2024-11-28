export const queryOptions = {active: true, currentWindow: true};

export const sendCommand2Content = (query,METHOD_TAG) => {
    chrome.tabs.query(query, (tabs) => {
        console.log(tabs);
        chrome.tabs.sendMessage(tabs[0].id, {
            method: METHOD_TAG
        }, res => {
            console.log('content response:');
            console.log(res)
        })
    })
}

export const METHOD_TAG = {
    PIP: 'pip',
    PLAY_TRANS: 'play_trans',
    SKIP: 'skip',
    BACK: 'back'
};
