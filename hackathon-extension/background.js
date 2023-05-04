chrome.runtime.onInstalled.addListener(() => {

    chrome.contextMenus.create({
      "id": "1",
      "title": "Lookup \"%s\"",
      "contexts": ["selection"]
    });

});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    (async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
        // do something with response here, not outside the function
        console.log(response);
      })();
});


//   chrome.windows.create({
//       url: chrome.runtime.getURL("movie_extension.html"),
//       type: "popup",
//       height: 350,
//       width: 350,
//       top: 50,
//   });
//   console.log('hi');
    // console.log("item " + info.menuItemId + " was clicked");
    // console.log("info: " + JSON.stringify(info));
    // console.log("tab: " + JSON.stringify(tab));

    // //Add all you functional Logic here
    // chrome.tabs.query({
    //     "active": true,
    //     "currentWindow": true
    // }, function (tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {
    //         "functiontoInvoke": "showInfo"
    //     });
    // });