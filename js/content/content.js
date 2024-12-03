const METHOD_TAG = {
    RE_BIND: 're_bind',
    PIP: 'pip',
    PLAY_TRANS: 'play_trans',
    SKIP: 'skip',
    BACK: 'back',
    GET_INDEX: "GET_INDEX",
    SET_INDEX: "SET_INDEX"
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.method) {
        case METHOD_TAG.PIP:
            pip();
            break;
        case METHOD_TAG.PLAY_TRANS:
            play_trans();
            break;
        case METHOD_TAG.SKIP:
            skip();
            break;
        case METHOD_TAG.BACK:
            back();
            break;
        case METHOD_TAG.RE_BIND:
            re_bind();
            break;
    }
    return true
})


function getVideElement() {
    return document.querySelector('video');
}

function pip() {
    var video = getVideElement();
    if (!document.pictureInPictureEnabled) {
        console.log('当前浏览器不支持视频画中画。');
    }
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else {
        video.requestPictureInPicture().catch(console.error);
    }
}

function play_trans() {
    var video = getVideElement();
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function skip() {
    var video = getVideElement();
    if (video) {
        if (video.currentTime + 5 <= video.duration) {
            video.currentTime += 5;
        } else {
            video.currentTime = video.duration;
        }
    }
}

function back() {
    var video = getVideElement();
    if (video) {
        if (video.currentTime - 5 >= 0) {
            video.currentTime -= 5;
        } else {
            video.currentTime = 0;
        }
    }
}


function re_bind() {
    var video = getVideElement();
    if (video) {
        if (video.currentTime - 5 >= 0) {
            video.currentTime -= 5;
        } else {
            video.currentTime = 0;
        }
    }
}


