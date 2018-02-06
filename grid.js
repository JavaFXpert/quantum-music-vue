// The rotation angles to observe
var angles = [
  { label: 'a00', value: 0 },
  { label: 'a01', value: 0 },
  { label: 'a02', value: 0 },
  { label: 'a03', value: 0 },
  { label: 'a04', value: 0 },
  { label: 'a05', value: 0 },
  { label: 'a06', value: 0 },
  { label: 'a07', value: 0 },
  { label: 'a08', value: 0 },
  { label: 'a09', value: 0 },
  { label: 'a10', value: 0 },
  { label: 'a11', value: 0 },
  { label: 'a12', value: 0 },
  { label: 'a13', value: 0 },
  { label: 'a14', value: 0 },
  { label: 'a15', value: 0 },
  { label: 'a16', value: 0 },
  { label: 'a17', value: 0 },
  { label: 'a18', value: 0 },
  { label: 'a19', value: 0 },
  { label: 'a20', value: 0 },
  { label: 'a21', value: 0 },
  { label: 'a22', value: 0 },
  { label: 'a23', value: 0 },
  { label: 'a24', value: 0 },
  { label: 'a25', value: 0 },
  { label: 'a26', value: 0 },
  { label: 'a27', value: 0 }
]

// register the grid component
Vue.component('demo-grid', {
  template: '#matrix-template',
  replace: true,
  props: {
    numrowscols: Number,
    colnames: Array,
    //TODO: study how to be able to camel case rownames, etc. in Vue
    rownames: Array,
    angles: Array
  },
  /*
  data: function () {
    return {
      something: 42
    }
  },
  */
  computed: {
    matrixAsArray: function () {
      var mat = math.eye(8);
      return mat.valueOf();
    }
  },
  methods: {
    /*
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
    */
  }
})

// 

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    gridNumRowsCols: 8,
    gridRowNames: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
    gridColNames: ["C4'", "D4'", "E4'", "F4'", "G4'", "A4'", "B4'", "C5'"],
    gridMatrix: [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],
    angles: angles
  }
})
