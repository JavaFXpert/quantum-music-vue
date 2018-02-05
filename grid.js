// register the grid component
Vue.component('demo-grid', {
  template: '#matrix-template',
  replace: true,
  props: {
    numrowscols: Number,
    colnames: Array,
    //TODO: study how to be able to camelcase rownames in Vue
    rownames: Array,
    matrix: Array,
    //numRows: Number,
    //numCols: Number,

  },
  data: function () {
    var identityMatrix = math.eye(8);
    return {
      iMatrix: identityMatrix,
    }
  },
  /*
  computed: {
    matrix: function () {
      return 7;
      return (((math.Matrix)(this.identityMatrix)).subset(index(rowIdx, colIdx)));
      //return this.identityMatrix.subset(math.index(rowIdx, colIdx));
    }
  },
  */
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    gridNumRowsCols: 4,
    gridRowNames: ['C4', 'D4', 'E4', 'F4'],
    gridColNames: ["C4'", "D4'", "E4'", "F4'"],
    gridMatrix: [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8]
  }
})
