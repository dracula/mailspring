function fixBackgroundImages() {
  const parentAreas = document.getElementsByClassName("message-iframe-container");
  if (parentAreas.length >= 1) {
    const iFrame = parentAreas[0].firstChild.contentWindow.document;
    const tags = iFrame.querySelectorAll("*");
    tags.forEach(tag => {
      let fixInvert = false;

      if (getComputedStyle(tag).backgroundImage !== 'none') {
        fixInvert = true;
      }

      // using this method so more can be added later
      if (fixInvert) {
        tag.style.filter = "invert(1)";
      }
    })
  }
}


export function activate(state) {
  fixBackgroundImages();
}
