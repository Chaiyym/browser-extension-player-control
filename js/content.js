import {METHOD_TAG} from "./module/messageModule.js";

console.log("content gogogo")

export function main() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log(request.method)
        var method = request.method;
        switch (method) {
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
        }
        sendResponse('ok')
    })
}

function getVideElement() {
    return document.querySelector('video');
}

function pip() {
    var video = getVideElement();
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else {
        video.requestPictureInPicture()
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
