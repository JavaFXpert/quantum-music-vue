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

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    gridNumRowsCols: 8,
    gridRowNames: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
    gridColNames: ["C4'", "D4'", "E4'", "F4'", "G4'", "A4'", "B4'", "C5'"],
    gridMatrix: [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8]
  }
})
