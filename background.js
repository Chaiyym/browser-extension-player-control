import {sendCommand2Content} from './js/module/messageModule.js';

chrome.runtime.onInstalled.addListener((details) => {
    console.log(`service-worker gogogo`);
});

chrome.commands.onCommand.addListener((command) => {
        console.log(`Command "${command}" triggered`);
        sendCommand2Content(command);
    }
)
