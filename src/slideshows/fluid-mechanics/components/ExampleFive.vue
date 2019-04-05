<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A {{ deep }} m deep storage tank is fulled with water. The upper part of the tank is open to the air. What is the absolute pressure at the bottom of the tank? And the gauge pressure?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Deep (m)
        input.center.data(:class="checkedDeepTank" v-model.number='deepTank')
      p.inline.data Atm pressure (Pa)
        input.center.data(:class="checkedAtmPressure" v-model.number='atmPressure')
      p.inline.data Density (kg/m<sup>3</sup>)
        input.center.data(:class="checkedDensity" v-model.number='density')
      p.inline.data Absolute pressure (Pa)
        input.center.data(:class="checkedAbsolutePressure" v-model='absolutePressure')
      p.inline.data Gauge pressure (Pa)
        input.center.data(:class="checkedGaugePressure" v-model='gaugePressure')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      deepTank: '',
      atmPressure: '',
      density: '',
      absolutePressure: '',
      gaugePressure: ''
    }
  },
  computed: {
    deep: function () {
      let max = 15
      let min = 3
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    absPressure: function () {
      return 101300 + this.density * 9.81 * this.deep
    },
    gagPressure: function () {
      return parseInt(this.density * 9.81 * this.deep * 1000) / 1000
    },
    checkedDeepTank: function () {
      let check
      // console.log('deep : ' + this.deep + ' : ' + parseFloat(this.deepTank))
      check = this.deep === parseFloat(this.deepTank) ? 'correct' : 'not-correct'
      return check
    },
    checkedAtmPressure: function () {
      let check
      // console.log('atmPressure : ' + 101300 + ' : ' + parseFloat(this.atmPressure))
      check = this.atmPressure === 101300 ? 'correct' : 'not-correct'
      return check
    },
    checkedDensity: function () {
      let check
      // console.log('density : ' + 1000 + ' : ' + parseFloat(this.density))
      check = this.density === 1000 ? 'correct' : 'not-correct'
      return check
    },
    checkedAbsolutePressure: function () {
      let check
      // console.log('absPressure : ' + this.absPressure + ' : ' + parseFloat(this.absolutePressure))
      check = this.absPressure === parseFloat(this.absolutePressure) ? 'correct' : 'not-correct'
      return check
    },
    checkedGaugePressure: function () {
      let check
      // console.log('gagPressure : ' + this.gagPressure + ' : ' + parseFloat(this.gaugePressure))
      check = this.gagPressure === parseFloat(this.gaugePressure) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    // FIGURE AND CAPTIONS
    .figure {
      p {
        font-size: 0.7em;
        margin-top: 2em;
        margin-bottom: 0;
        color: #555;
      }
      width: 80%;
      margin-left: 10%;
    }
  }
}

.data {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  margin: 15px 20px 15px 20px;
  font-size: 30px;
  color: blue;
  width: 95%;
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
