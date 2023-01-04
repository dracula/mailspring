"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailspring_exports_1 = require("mailspring-exports");
class BackgroundImageFix extends mailspring_exports_1.MessageViewExtension {
    static renderedMessageBodyIntoDocument({ document, message, iframe }) {
        const frameDocument = iframe.contentWindow.document;
        const tags = frameDocument.querySelectorAll("*");
        tags.forEach(tag => {
            let fixInvert = false;
            if (getComputedStyle(tag).backgroundImage !== 'none') {
                fixInvert = true;
            }
            // using this method so more can be added later
            if (fixInvert) {
                tag.style.filter = "invert(1)";
                tag.style.color = "#111";
            }
            // fix images
            if (tag.tagName === "IMG") {
                tag.style.filter = "invert(1)";
                tag.style.color = "#111";
            }
        });
    }
}
exports.default = BackgroundImageFix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC1pbWFnZS1maXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYmFja2dyb3VuZC1pbWFnZS1maXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQXlEO0FBRXpELE1BQXFCLGtCQUFtQixTQUFRLHlDQUFvQjtJQUNsRSxNQUFNLENBQUMsK0JBQStCLENBQUMsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQztRQUNoRSxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUVwRCxNQUFNLElBQUksR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFdEIsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEtBQUssTUFBTSxFQUFFO2dCQUNwRCxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ2xCO1lBRUQsK0NBQStDO1lBQy9DLElBQUksU0FBUyxFQUFFO2dCQUNiLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztnQkFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2FBQzFCO1lBRUQsYUFBYTtZQUNiLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztnQkFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUF6QkQscUNBeUJDIn0=