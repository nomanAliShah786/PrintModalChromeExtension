function readPopup() {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    var script2 = document.createElement('script2');
    script2.src = 'http://github.com/aadel112/googoose/jquery.googoose.js';
    script2.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script2);
    var popupData = document.querySelector("#searchtext .Section1");
    console.log(popupData.innerHTML);
    var dt = new Date();
    var dataTime = dt.toLocaleString();
    var printWindow = window.open('', '', 'height=400,width=800');
      printWindow.document.write(`<html><head><title>${dataTime}</title>`);
      printWindow.document.write('</head><body >');
      printWindow.document.write(popupData.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    
    
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: readPopup
    });
});