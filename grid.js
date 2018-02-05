// register the grid component
Vue.component('demo-grid', {
  template: '#matrix-template',
  replace: true,
  props: {
    //data: Array,
    columns: Array,
    //TODO: study how to be able to camelcase rownames in Vue
    rownames: Array,
    //numRows: Number,
    //numCols: Number,

  },
  /*
  data: function () {
    /*
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  */
  computed: {
    /*
    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    */
    },
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
    searchQuery: '',
    gridRowNames: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
    gridColumns: ["C4'", "D4'", "E4'", "F4'", "G4'", "A4'", "B4'", "C5'"],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  }
})
