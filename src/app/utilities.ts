

export module Utilities {

  export function scrollToTop() {
    document.querySelector('#customDiv').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  export function isServiceEnabled(serviceCode: string, currentUser: any) {
    var returnValue: boolean = false;

    if (currentUser.services != null && currentUser.services.length > 0) {
      var lstServices = currentUser.services.filter(service => {
        return service.serviceCode == serviceCode && service.isSelected == true;
      });

      if (lstServices != null && lstServices.length > 0)
        returnValue = true;
    }

    return returnValue;
  }

  export function base64toBlob(base64Data: any, contentType: any) {
    contentType = contentType || "";
    var sliceSize = 100;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);

      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }

  export function randomGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  //remove html tags from a string, leaving only the inner text
  export function convertHtmlToText(str) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
  }
}
