const deviceDetection = {
  detectDeviceWidth: function (width) {
    let device_4K = 3840,
      device_XXL = 1366,
      device_XL = 992,
      device_L = 768,
      device_S = 567,
      device_XS = 320,
      device = null;

    if (device_4K <= width) {
      deivce = device_4K;
    } else if (device_XXL <= width) {
      device = device_XXL;
    } else if (device_XL <= width) {
      device = device_XL;
    } else if (device_L <= width) {
      device = device_L;
    } else if (device_S <= width) {
      device = device_S;
    } else if (device_XS <= width) {
      device = device_XS;
    }

    return device;
  },

  detectDeviceOrientation: function (deviceSize) {
    let deviceOrientation = true;
    if (window.matchMedia("(orientation: portrait)").matches) {
      deviceOrientation = true;
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
      deviceOrientation = false;
    }
    let deviceParams = {
      deviceOrientation: deviceOrientation,
      deviceSize: deviceSize
    };
    return deviceParams;
  }
};
export default deviceDetection;
