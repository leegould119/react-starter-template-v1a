const detectDevices = () => {
  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    }
  };

  if (isMobile.Android()) {
    return "Android";
  } else if (isMobile.iOS()) {
    return "iOS";
  } else if (isMobile.BlackBerry()) {
    return "Blackberry";
  } else if (isMobile.Opera()) {
    return "Opera Mini";
  } else if (isMobile.Windows()) {
    return "ieMobile";
  } else {
    return "Desktop";
  }
};
export default detectDevices;
