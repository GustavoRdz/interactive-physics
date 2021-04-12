<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A {{ deep }} m deep storage tank is fulled with water. The upper part of the tank is open to the air. What is the absolute pressure at the bottom of the tank? And the gauge pressure?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Deep (m)
        input.center.data(:class="checkedDeep" v-model.number='enterDeep')
        <span class="error" v-if="errorDeep">[e: {{ errorDeep.toPrecision(2) }}%]</span>
      p.inline.data Atm pressure (Pa)
        input.center.data(:class="checkedAtmPressure" v-model.number='enterAtmPressure')
        <span class="error" v-if="errorAtmPressure">[e: {{ errorAtmPressure.toPrecision(2) }}%]</span>
      p.inline.data Density (kg/m<sup>3</sup>)
        input.center.data(:class="checkedDensity" v-model.number='enterDensity')
        <span class="error" v-if="errorDensity">[e: {{ errorDensity.toPrecision(2) }}%]</span>
      p.inline.data Absolute pressure (Pa)
        input.center.data(:class="checkedAbsPressure" v-model='enterAbsPressure')
        <span class="error" v-if="errorAbsPressure">[e: {{ errorAbsPressure.toPrecision(2) }}%]</span>
      p.inline.data Gauge pressure (Pa)
        input.center.data(:class="checkedGaugePressure" v-model='enterGaugePressure')
        <span class="error" v-if="errorGaugePressure">[e: {{ errorGaugePressure.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterDeep: '',
      errorDeep: 0,
      enterAtmPressure: '',
      errorAtmPressure: 0,
      enterDensity: '',
      errorDensity: 0,
      enterAbsPressure: '',
      errorAbsPressure: 0,
      enterGaugePressure: '',
      errorGaugePressure: 0,
      atm: 101300,
      rho: 1000,
      g: 9.81
    }
  },
  computed: {
    deep: function () {
      console.clear()
      let max = 15
      let min = 3
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    absPressure: function () {
      return this.atm + this.rho * this.g * this.deep
    },
    gagPressure: function () {
      return this.rho * this.g * this.deep
    },
    checkedDeep: function () {
      this.errorDeep = this.errorRelative('Tank depth => ', this.deep, parseFloat(this.enterDeep))
      return this.errorDeep < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAtmPressure: function () {
      this.errorAtmPressure = this.errorRelative('Atm pressure => ', this.atm, parseFloat(this.enterAtmPressure))
      return this.errorAtmPressure < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDensity: function () {
      this.errorDensity = this.errorRelative('Fluid density => ', this.rho, parseFloat(this.enterDensity))
      return this.errorDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAbsPressure: function () {
      this.errorAbsPressure = this.errorRelative('Absolute pressure => ', this.absPressure, parseFloat(this.enterAbsPressure))
      return this.errorAbsPressure < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedGaugePressure: function () {
      this.errorGaugePressure = this.errorRelative('Gauge pressure => ', this.gagPressure, parseFloat(this.enterGaugePressure))
      return this.errorGaugePressure < 1e-1 ? 'correct' : 'not-correct'
    }
  },
  methods: {
    errorRelative: function (comment, A, x) {
      let relativeError
      relativeError = 100 * Math.abs((A - x) / (A + Number.MIN_VALUE))
      console.log(comment + A + ' : ' + x + ' ==> ' + 'error  ' + relativeError + ' %')
      return relativeError
    }
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    width: 100%;
    max-width: 100%;
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
  margin: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  color: blue;
  width: 100%;
}
.mate {
  font-family: 'New Times Roman';
  font-style: italic;
  font-size: 30px;
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
.error {
  font-size: 14px;
}
</style>
