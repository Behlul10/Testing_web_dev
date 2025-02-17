document.addEventListener("DOMContentLoaded", function () {
    if (!chrome || !chrome.runtime || !chrome.runtime.sendMessage) {
        console.error("❌ Chrome API is not available. Ensure this is running inside an extension.");
        alert("Chrome API is not available. Make sure you are opening this from the extension popup!");
        return;
    }
    
    console.log("✅ Chrome API detected!");

    document.getElementById("openTab").addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "openTabInsideWorkspace", url: "https://www.google.com" }, (response) => {
            if (response && response.tabId) {
                addTabToWorkspace(response.tabId, response.url);
            }
        });
    });

    function addTabToWorkspace(tabId, url) {
        let tabList = document.getElementById("tabList");
        let tabButton = document.createElement("button");
        tabButton.innerText = url;
        tabButton.onclick = () => chrome.tabs.update(tabId, { active: true });
        tabList.appendChild(tabButton);
    }
});
