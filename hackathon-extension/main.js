// get text that you've selected in browser
// const getSelectedText = () => {

//     let text = '';

//     if (window.getSelection()) {

//         text = window.getSelection().toString();

//     } else if (window.document.selection) {
        
//         text = window.document.selection.createRange().text;

//     }

//     return text;
//     // chrome.storage.sync.get(text);

// }



// adds new div to webpage
// const newDiv = document.createElement('div');
// newDiv.style.fontSize = "5rem";
// newDiv.innerText = "NEW DIV"
// document.body.appendChild(newDiv);


// var showInfo = function () {
//     alert("Show Info is invoked");
// }
// var showAnotherInfo = function () {
//     alert("Show Another Info");
// }
// chrome.runtime.onMessage.addListener(function (message, sender, callback) {
//     console.log('listener fired');
//     if (message.functiontoInvoke == "showInfo") {
//         showInfo();
//     }
//     if (message.functiontoInvoke == "showAnotherInfo") {
//         showAnotherInfo();
//     }
// });

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting === "hello")
        sendResponse({farewell: "goodbye"});
    }
  );