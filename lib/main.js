"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const mailspring_exports_1 = require("mailspring-exports");
const background_image_fix_1 = __importDefault(require("./background-image-fix"));
function activate() {
    mailspring_exports_1.ExtensionRegistry.MessageView.register(background_image_fix_1.default);
}
exports.activate = activate;
function deactivate() {
    mailspring_exports_1.ExtensionRegistry.MessageView.unregister(background_image_fix_1.default);
}
exports.deactivate = deactivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDJEQUF1RDtBQUV2RCxrRkFBd0Q7QUFFeEQsU0FBZ0IsUUFBUTtJQUN0QixzQ0FBaUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLDhCQUFrQixDQUFDLENBQUE7QUFDNUQsQ0FBQztBQUZELDRCQUVDO0FBQ0QsU0FBZ0IsVUFBVTtJQUN4QixzQ0FBaUIsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLDhCQUFrQixDQUFDLENBQUE7QUFDOUQsQ0FBQztBQUZELGdDQUVDIn0=