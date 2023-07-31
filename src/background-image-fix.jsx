import { MessageViewExtension } from 'mailspring-exports'

function getAverageColor(imgEl, quality = 10) {
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');
  let i = -4, length, data, count = 0;
  let rgb = { r:0, g:0, b:0 };

  let height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  let width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0, width, height);
  data = context.getImageData(0, 0, width, height).data;
  length = data.length;

  while ((i += quality * 4) < length) {
    ++count;
    rgb.r += data[i];
    rgb.g += data[i+1];
    rgb.b += data[i+2];
  }

  rgb.r = Math.floor(rgb.r/count);
  rgb.g = Math.floor(rgb.g/count);
  rgb.b = Math.floor(rgb.b/count);

  return rgb;
}

function isImageDark(rgb) {
  // calculate the brightness value based on human perception
  const brightness = Math.round((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000);
  return brightness < 128;  // you can adjust the threshold as per your requirement
}

function getImageEl(tag) {
  if (tag.tagName === "IMG") {
      return tag;
  }
  if (tag.tagName === "TD" && tag.hasAttribute("background")) {
    let img = new Image();
    img.src = tag.getAttribute("background");
    //console.log("generated image", img);
    return img;
  }

  const backgroundImage = getComputedStyle(tag).backgroundImage;
  if (backgroundImage !== 'none') {
    let img = new Image();
    img.src = backgroundImage.slice(5, -2); // Remove url(" and ")
    return img;
  }

  return null;
}

export default class BackgroundImageFix extends MessageViewExtension {
  static renderedMessageBodyIntoDocument({document, message, iframe}) {
    const frameDocument = iframe.contentWindow.document;
    const tags = frameDocument.querySelectorAll("*");

    tags.forEach(tag => {
      let imgEl = getImageEl(tag);
      if (imgEl && imgEl.complete && imgEl.naturalHeight !== 0) {
        let imageData = getAverageColor(imgEl, 10);
        if (isImageDark(imageData)) {
          tag.style.filter = "invert(1)";
          //console.log("isDark", tag)
        } else {
          tag.style.filter = "";
          //console.log("isntDark", tag)
        }
        tag.style.color = "#f8f8f2";
        tag.style.backgroundColor = "#44475a";
      }
    });
  }
}


