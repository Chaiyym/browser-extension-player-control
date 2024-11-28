import {METHOD_TAG, queryOptions, sendCommand2Content} from "../js/module/messageModule.js";

document.getElementById(METHOD_TAG.PIP).addEventListener('click', function () {
    sendCommand2Content(queryOptions, METHOD_TAG.PIP)
});

document.getElementById(METHOD_TAG.PLAY_TRANS).addEventListener('click', function () {
    sendCommand2Content(queryOptions, METHOD_TAG.PLAY_TRANS)
});

document.getElementById(METHOD_TAG.SKIP).addEventListener('click', function () {
    sendCommand2Content(queryOptions, METHOD_TAG.SKIP)
});

document.getElementById(METHOD_TAG.BACK).addEventListener('click', function () {
    sendCommand2Content(queryOptions, METHOD_TAG.BACK)
});
