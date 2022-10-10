const colorPickerBtn = document.querySelector(".btn");

colorPickerBtn.addEventListener("click", async () => {
  //   console.log("clicked");
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //   console.log(tab);

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: pickYourColor,
  });
});
