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
                // its a blank url 
                // if (getComputedStyle(tag).filter === "none") {
                //   fixInvert = false;
                // }
                // console.log("filter", getComputedStyle(tag).filter)
            }
            if (tag.tagName === "IMG") {
                fixInvert = true;
            }
            // using this method so more can be added later
            if (fixInvert) {
                tag.style.filter = "invert(1)";
                tag.style.color = "#000";
            }
        });
    }
}
exports.default = BackgroundImageFix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC1pbWFnZS1maXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYmFja2dyb3VuZC1pbWFnZS1maXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQXlEO0FBRXpELE1BQXFCLGtCQUFtQixTQUFRLHlDQUFvQjtJQUNsRSxNQUFNLENBQUMsK0JBQStCLENBQUMsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQztRQUNoRSxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUVwRCxNQUFNLElBQUksR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFdEIsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEtBQUssTUFBTSxFQUFFO2dCQUNwRCxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUVqQixtQkFBbUI7Z0JBQ25CLGlEQUFpRDtnQkFDakQsdUJBQXVCO2dCQUN2QixJQUFJO2dCQUNKLHNEQUFzRDthQUN2RDtZQUNELElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQ3pCLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDbEI7WUFFRCwrQ0FBK0M7WUFDL0MsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO2dCQUMvQixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQTVCRCxxQ0E0QkMifQ==