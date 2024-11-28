(async () => {
    const src = chrome.runtime.getURL('js/content.js');
    const content_main = await import(src);
    content_main.main();
})();