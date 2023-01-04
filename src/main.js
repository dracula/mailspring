
import { ExtensionRegistry } from 'mailspring-exports';

import BackgroundImageFix from './background-image-fix';

export function activate() {
  ExtensionRegistry.MessageView.register(BackgroundImageFix)
}
export function deactivate() {
  ExtensionRegistry.MessageView.unregister(BackgroundImageFix)
}
