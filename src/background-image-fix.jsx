import { MessageViewExtension } from 'mailspring-exports'

function isImageDark(imageUrl, threshold = 128, quality = 10, callback) {
    let img = document.createElement('img');
    img.src = imageUrl;
    img.style.display = 'none';
    document.body.appendChild(img);

    img.onload = function() {
        // create canvas
        let canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth; // or 'this.width' if you want a special/scaled size
        canvas.height = this.naturalHeight; // or 'this.height' if you want a special/scaled size

        // draw image onto canvas
        let ctx = canvas.getContext('2d');
        ctx.drawImage(this, 0, 0);

        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;
        let r, g, b, avg;
        let colorSum = 0;
        let pixelsChecked = 0;

        for(let x = 0, len = data.length; x < len; x+=4*quality) {
            r = data[x];
            g = data[x+1];
            b = data[x+2];

            avg = Math.floor((r+g+b)/3);
            colorSum += avg;
            pixelsChecked++;
        }

        let brightness = Math.floor(colorSum / pixelsChecked);
        callback(brightness < threshold);

        // cleanup
        document.body.removeChild(img);
    }
}


export default class BackgroundImageFix extends MessageViewExtension {
  static renderedMessageBodyIntoDocument({document, message, iframe}) {
    const frameDocument = iframe.contentWindow.document;

    const tags = frameDocument.querySelectorAll("*");
    tags.forEach(tag => {
      let fixInvert = false;

      if (getComputedStyle(tag).backgroundImage !== 'none') {
        fixInvert = true; 
      }
      if (tag.tagName === "IMG") {
        fixInvert = true;
      }

      // using this method so more can be added later
      if (fixInvert) {
        isImageDark(tag.src, 128, 10, function(isDark) {
          if (isDark) {
            tag.style.filter = ""
          } else {
            tag.style.filter = "invert(1)"
          }
        })

        //tag.style.filter = "invert(1)";
        tag.style.color = "#000";
      }
    })
  } 
}
