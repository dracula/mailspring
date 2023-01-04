"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
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
        });
    }
}
function activate() {
    fixBackgroundImages();
}
exports.activate = activate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLFNBQVMsbUJBQW1CO0lBQzFCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ2hGLElBQUksV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFDM0IsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ2hFLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztZQUV0QixJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsS0FBSyxNQUFNLEVBQUU7Z0JBQ3BELFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDbEI7WUFFRCwrQ0FBK0M7WUFDL0MsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7S0FDSDtBQUNILENBQUM7QUFHRCxTQUFnQixRQUFRO0lBQ3RCLG1CQUFtQixFQUFFLENBQUM7QUFDeEIsQ0FBQztBQUZELDRCQUVDIn0=