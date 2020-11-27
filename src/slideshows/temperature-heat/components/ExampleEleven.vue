<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A Styrofoam cooler has total wall area (including the lid) of {{ area }} m<sup>2</sup> and wall thickness {{ length*100 }} cm. It is filled with ice, water, and cans of beverage, all at 0°C. What is the rate of heat flow into the cooler if the temperature of the outside wall is {{ outTemp }}°C? How much ice melts in {{ time }} hours?

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data k (W/mºC)
        input.center.data(:class="checkedK" v-model.number='enterK')
      p.inline.data Area (m<sup>2</sup>)
        input.center.data(:class="checkedA" v-model.number='enterA')
      p.inline.data Length (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
      p.inline.data Hot temp. (ºC)
        input.center.data(:class="checkedHT" v-model.number='enterHT')
      p.inline.data Cold temp. (ºC)
        input.center.data(:class="checkedCT" v-model.number='enterCT')
      p.inline.data Heat current (W)
        input.center.data(:class="checkedH" v-model.number='enterH')
      p.inline.data Q<sub>{{ time }} hrs</sub> (J)
        input.center.data(:class="checkedQ" v-model.number='enterQ')
      p.inline.data Mass melted (kg)
        input.center.data(:class="checkedMM" v-model.number='enterMM')

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      enterK: '',
      enterA: '',
      enterL: '',
      enterHT: '',
      enterCT: '',
      enterH: '',
      enterQ: '',
      enterMM: '',
      k: 0.027,
      lv: 334000
    }
  },
  computed: {
    area: function () {
      let max = 150
      let min = 50
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    length: function () {
      let max = 5
      let min = 2
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    inTemp: function () {
      return 0
    },
    outTemp: function () {
      let max = 35
      let min = 25
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    time: function () {
      let max = 5
      let min = 2
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    heatFlow: function () {
      return parseFloat((this.k * this.area * (this.outTemp - this.inTemp) / this.length).toFixed(3))
    },
    energy: function () {
      return parseFloat((this.heatFlow * this.time * 3600).toFixed(3))
    },
    massMelted: function () {
      return parseFloat((this.energy / this.lv).toFixed(3))
    },
    checkedK: function () {
      let check
      console.log('Conductivity : ' + this.k + ' : ' + parseFloat(this.enterK))
      check = this.k === parseFloat(this.enterK) ? 'correct' : 'not-correct'
      return check
    },
    checkedA: function () {
      let check
      console.log('Area : ' + this.area + ' : ' + parseFloat(this.enterA))
      check = this.area === parseFloat(this.enterA) ? 'correct' : 'not-correct'
      return check
    },
    checkedL: function () {
      let check
      console.log('length : ' + this.length + ' : ' + parseFloat(this.enterL))
      check = this.length === parseFloat(this.enterL) ? 'correct' : 'not-correct'
      return check
    },
    checkedHT: function () {
      let check
      console.log('Hot temp : ' + this.outTemp + ' : ' + parseFloat(this.enterHT))
      check = this.outTemp === parseFloat(this.enterHT) ? 'correct' : 'not-correct'
      return check
    },
    checkedCT: function () {
      let check
      console.log('Cold temp : ' + this.inTemp + ' : ' + parseFloat(this.enterCT))
      check = this.inTemp === parseFloat(this.enterCT) ? 'correct' : 'not-correct'
      return check
    },
    checkedH: function () {
      let check
      console.log('Heat current : ' + this.heatFlow + ' : ' + parseFloat(this.enterH))
      check = this.heatFlow === parseFloat(this.enterH) ? 'correct' : 'not-correct'
      return check
    },
    checkedQ: function () {
      let check
      console.log('Energy in t : ' + this.energy + ' : ' + parseFloat(this.enterE))
      check = this.energy === parseFloat(this.enterQ) ? 'correct' : 'not-correct'
      return check
    },
    checkedMM: function () {
      let check
      console.log('Mass melted : ' + this.massMelted + ' : ' + parseFloat(this.enterMM))
      check = this.massMelted === parseFloat(this.enterMM) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
  },
  watch: {
  },
  mixins: [eagle.slide]
}

</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Major+Mono+Display');
@import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');
@import url('https://fonts.googleapis.com/css?family=Space+Mono');


.svg-display {
        font-family:'Space Mono', monospace;
        text-transform: "none";
      }
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #3f3;
}

li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 0px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}

button {
  width: 200px;
  height:40px;
}

.data {
  display: inline-block;
  text-transform: none;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  text-transform: none;
  margin: 1px 2px 1px 2px;
  font-size: 30px;
  color: blue;
  width: 100%;
}

.solution {
  margin: 15px 5px 5px 5px;
  font-size: 20px;
  color: red;
  width: 100%;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #80c080;
}

</style>
