/* eslint-disable */
import "%modules%/faq/faq";
import "%modules%/gallery/gallery";
import "%modules%/first-screen/first-screen";
import "%modules%/modal/modal";

// Lazy Load

window.bLazy = new Blazy({
  // container: '.container',
  success: function(element){
    console.log("Element loaded: ", element.nodeName);
  }
});
