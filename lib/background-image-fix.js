"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailspring_exports_1 = require("mailspring-exports");
function isImageDark(imageUrl, threshold = 128, quality = 10, callback) {
    let img = document.createElement('img');
    img.src = imageUrl;
    img.style.display = 'none';
    document.body.appendChild(img);
    img.onload = function () {
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
        for (let x = 0, len = data.length; x < len; x += 4 * quality) {
            r = data[x];
            g = data[x + 1];
            b = data[x + 2];
            avg = Math.floor((r + g + b) / 3);
            colorSum += avg;
            pixelsChecked++;
        }
        let brightness = Math.floor(colorSum / pixelsChecked);
        callback(brightness < threshold);
        // cleanup
        document.body.removeChild(img);
    };
}
class BackgroundImageFix extends mailspring_exports_1.MessageViewExtension {
    static renderedMessageBodyIntoDocument({ document, message, iframe }) {
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
                isImageDark(tag.src, 128, 10, function (isDark) {
                    if (isDark) {
                        tag.style.filter = "";
                    }
                    else {
                        tag.style.filter = "invert(1)";
                    }
                });
                //tag.style.filter = "invert(1)";
                tag.style.color = "#000";
            }
        });
    }
}
exports.default = BackgroundImageFix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC1pbWFnZS1maXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYmFja2dyb3VuZC1pbWFnZS1maXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQXlEO0FBRXpELFNBQVMsV0FBVyxDQUFDLFFBQVEsRUFBRSxTQUFTLEdBQUcsR0FBRyxFQUFFLE9BQU8sR0FBRyxFQUFFLEVBQUUsUUFBUTtJQUNsRSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDO0lBQ25CLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUvQixHQUFHLENBQUMsTUFBTSxHQUFHO1FBQ1QsZ0JBQWdCO1FBQ2hCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsb0RBQW9EO1FBQ3RGLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLHFEQUFxRDtRQUV6Rix5QkFBeUI7UUFDekIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUIsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BFLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDakIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztRQUV0QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBRSxDQUFDLEdBQUMsT0FBTyxFQUFFO1lBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWQsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLFFBQVEsSUFBSSxHQUFHLENBQUM7WUFDaEIsYUFBYSxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsQ0FBQztRQUN0RCxRQUFRLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBRWpDLFVBQVU7UUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUE7QUFDTCxDQUFDO0FBR0QsTUFBcUIsa0JBQW1CLFNBQVEseUNBQW9CO0lBQ2xFLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDO1FBQ2hFLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBRXBELE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztZQUV0QixJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsS0FBSyxNQUFNLEVBQUU7Z0JBQ3BELFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDbEI7WUFDRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUN6QixTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ2xCO1lBRUQsK0NBQStDO1lBQy9DLElBQUksU0FBUyxFQUFFO2dCQUNiLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBUyxNQUFNO29CQUMzQyxJQUFJLE1BQU0sRUFBRTt3QkFDVixHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7cUJBQ3RCO3lCQUFNO3dCQUNMLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQTtxQkFDL0I7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsaUNBQWlDO2dCQUNqQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQTlCRCxxQ0E4QkMifQ==