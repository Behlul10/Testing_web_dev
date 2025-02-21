let workspaceWindowId = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "openWorkspace") {
        if (!workspaceWindowId) {
            chrome.windows.create({
                url: "workspace.html",
                type: "popup",
                focused: true,
                width: 1200,
                height: 800
            }, (window) => {
                workspaceWindowId = window.id;
                console.log("✅ Workspace Opened:", workspaceWindowId);
            });
        } else {
            chrome.windows.update(workspaceWindowId, { focused: true });
        }
        sendResponse({ success: true });
    }

    if (request.action === "openTabInsideWorkspace") {
        if (workspaceWindowId) {
            chrome.tabs.create({
                windowId: workspaceWindowId,
                url: request.url,
                active: true
            }, (tab) => {
                console.log("🔄 Opened tab inside workspace:", tab.id);
                sendResponse({ success: true, tabId: tab.id, url: request.url });
            });
        }
        return true; // Keeps the message channel open
    }
});
