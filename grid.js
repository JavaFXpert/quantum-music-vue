// The rotation angles to observe
var angles = [
  { label: 'CD', value: 0 },
  { label: 'CE', value: 0 },
  { label: 'CF', value: 0 },
  { label: 'CG', value: 0 },
  { label: 'CA', value: 0 },
  { label: 'CB', value: 0 },
  { label: 'CX', value: 0 },
  { label: 'DE', value: 0 },
  { label: 'DF', value: 0 },
  { label: 'DG', value: 0 },
  { label: 'DA', value: 0 },
  { label: 'DB', value: 0 },
  { label: 'DX', value: 0 },
  { label: 'EF', value: 0 },
  { label: 'EG', value: 0 },
  { label: 'EA', value: 0 },
  { label: 'EB', value: 0 },
  { label: 'EX', value: 0 },
  { label: 'FG', value: 0 },
  { label: 'FA', value: 0 },
  { label: 'FB', value: 0 },
  { label: 'FX', value: 0 },
  { label: 'GA', value: 0 },
  { label: 'GB', value: 0 },
  { label: 'GX', value: 0 },
  { label: 'AB', value: 0 },
  { label: 'AX', value: 0 },
  { label: 'BX', value: 0 }
]

// Determines whether to show the unistochastic (squared) matrix
var showuni = false;

// register the grid component
Vue.component('demo-grid', {
  template: '#matrix-template',
  replace: true,
  props: {
    numrowscols: Number,
    colnames: Array,
    //TODO: study how to be able to camel case rownames, etc. in Vue
    rownames: Array,
  },
  computed: {
    matrixAsArray: function () {
      return computeStochasticMatrix().valueOf();
    }
  },
  methods: {
  }
})

// function to compute rotation matrix
//function computeStochasticMatrix(anglesArrayInDegrees, showUnistochastic) {
function computeStochasticMatrix() {
  rotationDegOfFreedom = 28;
  matrixDims = 8;
  var a = math.zeros(rotationDegOfFreedom);
  for (var i = 0; i < rotationDegOfFreedom; i++) {
    a[i] = degreesToRadians(angles[i].value);
  }
  var matrix = math.eye(matrixDims);
  var rotatedMatrix =
    math.multiply(math.transpose(math.matrix([[math.cos(a[0]), -math.sin(a[0]), 0, 0, 0, 0, 0, 0], [math.sin(a[0]), math.cos(a[0]), 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
      math.multiply(math.transpose(math.matrix([[math.cos(a[1]), 0, -math.sin(a[1]), 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [math.sin(a[1]), 0, math.cos(a[1]), 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
        math.multiply(math.transpose(math.matrix([[math.cos(a[2]), 0, 0, -math.sin(a[2]), 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [math.sin(a[2]), 0, 0, math.cos(a[2]), 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
          math.multiply(math.transpose(math.matrix([[math.cos(a[3]), 0, 0, 0, -math.sin(a[3]), 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [math.sin(a[3]), 0, 0, 0, math.cos(a[3]), 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
            math.multiply(math.transpose(math.matrix([[math.cos(a[4]), 0, 0, 0, 0, -math.sin(a[4]), 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [math.sin(a[4]), 0, 0, 0, 0, math.cos(a[4]), 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
              math.multiply(math.transpose(math.matrix([[math.cos(a[5]), 0, 0, 0, 0, 0, -math.sin(a[5]), 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [math.sin(a[5]), 0, 0, 0, 0, 0, math.cos(a[5]), 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                math.multiply(math.transpose(math.matrix([[math.cos(a[6]), 0, 0, 0, 0, 0, 0, -math.sin(a[6])], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [math.sin(a[6]), 0, 0, 0, 0, 0, 0, math.cos(a[6])]])),
                  math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, math.cos(a[7]), -math.sin(a[7]), 0, 0, 0, 0, 0], [0, math.sin(a[7]), math.cos(a[7]), 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                    math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, math.cos(a[8]), 0, -math.sin(a[8]), 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, math.sin(a[8]), 0, math.cos(a[8]), 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                      math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, math.cos(a[9]), 0, 0, -math.sin(a[9]), 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, math.sin(a[9]), 0, 0, math.cos(a[9]), 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                        math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, math.cos(a[10]), 0, 0, 0, -math.sin(a[10]), 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, math.sin(a[10]), 0, 0, 0, math.cos(a[10]), 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                          math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, math.cos(a[11]), 0, 0, 0, 0, -math.sin(a[11]), 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, math.sin(a[11]), 0, 0, 0, 0, math.cos(a[11]), 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                            math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, math.cos(a[12]), 0, 0, 0, 0, 0, -math.sin(a[12])], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, math.sin(a[12]), 0, 0, 0, 0, 0, math.cos(a[12])]])),
                              math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, math.cos(a[13]), -math.sin(a[13]), 0, 0, 0, 0], [0, 0, math.sin(a[13]), math.cos(a[13]), 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                                math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, math.cos(a[14]), 0, -math.sin(a[14]), 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, math.sin(a[14]), 0, math.cos(a[14]), 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                                  math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, math.cos(a[15]), 0, 0, -math.sin(a[15]), 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, math.sin(a[15]), 0, 0, math.cos(a[15]), 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                                    math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, math.cos(a[16]), 0, 0, 0, -math.sin(a[16]), 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, math.sin(a[16]), 0, 0, 0, math.cos(a[16]), 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                                      math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, math.cos(a[17]), 0, 0, 0, 0, -math.sin(a[17])], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, math.sin(a[17]), 0, 0, 0, 0, math.cos(a[17])]])),
                                        math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, math.cos(a[18]), -math.sin(a[18]), 0, 0, 0], [0, 0, 0, math.sin(a[18]), math.cos(a[18]), 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                                          math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, math.cos(a[19]), 0, -math.sin(a[19]), 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, math.sin(a[19]), 0, math.cos(a[19]), 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                                            math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, math.cos(a[20]), 0, 0, -math.sin(a[20]), 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, math.sin(a[20]), 0, 0, math.cos(a[20]), 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                                              math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, math.cos(a[21]), 0, 0, 0, -math.sin(a[21])], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, math.sin(a[21]), 0, 0, 0, math.cos(a[21])]])),
                                                math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, math.cos(a[22]), -math.sin(a[22]), 0, 0], [0, 0, 0, 0, math.sin(a[22]), math.cos(a[22]), 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                                                  math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, math.cos(a[23]), 0, -math.sin(a[23]), 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, math.sin(a[23]), 0, math.cos(a[23]), 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                                                    math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, math.cos(a[24]), 0, 0, -math.sin(a[24])], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, math.sin(a[24]), 0, 0, math.cos(a[24])]])),
                                                      math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, math.cos(a[25]), -math.sin(a[25]), 0], [0, 0, 0, 0, 0, math.sin(a[25]), math.cos(a[25]), 0], [0, 0, 0, 0, 0, 0, 0, 1]])),
                                                        math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, math.cos(a[26]), 0, -math.sin(a[26])], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, math.sin(a[26]), 0, math.cos(a[26])]])),
                                                          math.multiply(math.transpose(math.matrix([[1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, math.cos(a[27]), -math.sin(a[27])], [0, 0, 0, 0, 0, 0, math.sin(a[27]), math.cos(a[27])]])),
                                                            matrix))))))))))))))))))))))))))));
  if (showuni) {
    rotatedMatrix = math.square(rotatedMatrix);
  }

  return rotatedMatrix;
}

// function to convert a vector containing degrees to radians
function degreesToRadians(angleInDegrees) {
  var radians = angleInDegrees * (math.pi / 180);
  return radians;
}

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    gridNumRowsCols: 8,
    gridRowNames: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'X'],
    gridColNames: ["C'", "D'", "E'", "F'", "G'", "A'", "B'", "X'"],
    angles: angles,
    showuni: showuni
  },
  methods: {
    toggleuni: function () {
      showuni = !showuni;

      //TODO: Find a way for the showuni variable to cause
      // the computeStochasticMatrix() method to be run, instead of
      // resorting to the following hack
      angles[0].value = 359 - angles[0].value;
      angles[0].value = 359 - angles[0].value;
    }
  }
})
