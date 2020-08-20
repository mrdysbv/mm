const {GPU: _GPU} = require('gpu.js');

class GPU {
  constructor() {
    this.gpu = new _GPU();
    this.initializeFunctions();
  }

  initializeFunctions() {
    this.gpu.addFunction(function linePointSide(A, B, C) {
      return ((B[0]-A[0])*(C[1]-A[1])-(B[1]-A[1])*(C[0]-A[0]));
    });
    this.gpu.addFunction(function checkThreePointsConsistent(x1, x2, x3, x1p, x2p, x3p) {
      return ((linePointSide(x1, x2, x3) > 0) === (linePointSide(x1p, x2p, x3p) > 0))? 1: 0;
    });
    this.gpu.addFunction(function checkFourPointsConsistent(x1, x2, x3, x4, x1p, x2p, x3p, x4p) {
      if (checkThreePointsConsistent(x1, x2, x3, x1p, x2p, x3p) === 0) return 0;
      if (checkThreePointsConsistent(x2, x3, x4, x2p, x3p, x4p) === 0) return 0;
      if (checkThreePointsConsistent(x3, x4, x1, x3p, x4p, x1p) === 0) return 0;
      if (checkThreePointsConsistent(x4, x1, x2, x4p, x1p, x2p) === 0) return 0;
      return 1;
    });
    this.gpu.addFunction(function multiplyPointHomographyInhomogenous(x, y, H0, H1, H2, H3, H4, H5, H6, H7, H8) {
      const w = H6*x + H7*y + H8;
      const xp = [
        (H0*x + H1*y + H2)/w,
        (H3*x + H4*y + H5)/w
      ];
      return xp;
    });
  }

  get() {
    return this.gpu;
  }
}

module.exports = {
  GPU
}
