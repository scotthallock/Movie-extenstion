const receiveText = arr => {
    alert(arr);
}

// shows highlighted text, but only from the movie_ext html
// const btn =document.querySelector('#textGrab')
// btn.addEventListener('click', (e) => {
//     // chrome.tabs.query({active: true}, (tabs) => {
//     //     const tab = tabs[0];
//     //     if (tab) {
//     //         chrome.scripting.executeScript(tab.id,
//     //             {
//     //                 code: 'document.body.innerText;'
//     //             },
//     //             receiveText());
//     //     } else {
//     //         alert("no active windows");
//     //     }
//     // })
//     chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//         if (request.method == "getSelection")
//           sendResponse({data: window.getSelection().toString()});
//         else
//           sendResponse({}); // snub them.
//     });
//     // alert(getSelectedText())
// });

// get text that you've selected in browser
const getSelectedText = () => {

    let text = '';

    if (window.getSelection()) {

        text = window.getSelection().toString();

    } else if (window.document.selection) {
        
        text = window.document.selection.createRange().text;

    }

    return text;
    // chrome.storage.sync.get(text);

}


// show selected text when button is click
// document.querySelector('#textGrab').onclick = async () => {
//     const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
//     let result;
//     try {
//       [{result}] = await chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         function: () => getSelection().toString(),
//       });
//     } catch (e) {
//       return; // ignoring an unsupported page like chrome://extensions
//     }
//     document.body.append('Selection: ' + result);
//     alert(result);
//   };