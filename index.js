const colorPickerBtn = document.querySelector(".btn");
const selColor = document.querySelector(".selectedColor");
const selValue = document.querySelector(".selectedValue");

colorPickerBtn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: pickYourColor,
    },
    async (color) => {
      const [data] = await color;
      const gridColor = data.result.sRGBHex;
      console.log(data);
      if (data.result) {
        selColor.style.backgroundColor = gridColor;
        selValue.innerHTML = gridColor;
      }
    }
  );
});

const pickYourColor = async () => {
  try {
    const eyeDropper = new EyeDropper();
    const response = await eyeDropper.open();
    return response;
  } catch (error) {}
};
