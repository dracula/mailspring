import { MessageViewExtension } from 'mailspring-exports'

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
        tag.style.filter = "invert(1)";
        tag.style.color = "#000";
      }
    })
  } 
}