<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Find the speed of sound in air at T = {{ temperature }}°C and find the range of wavelengths in air to which the human ear (which can hear frequencies in the range of 20–20,000 Hz) is sensitive. The mean molar, mass for air (a mixture of mostly nitrogen and oxygen) is M = 28.8 * 10<sup>-3</sup> kg/mol and the ratio of heat capacities is <span style="font-family: Times;">&gamma;</span> = {{ gamma }}.<br> R = 8.314472(15) J/mol·K
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Temperature (K) 
        input.center.data(:class="checkedTemp" v-model.number='enterTemp')
        <span class="error" v-if="errorTemp">[e: {{ errorTemp.toPrecision(3) }}%]</span>
      p.inline.data  <span style="font-family: Times;">&gamma;</span>
        input.center.data(:class="checkedGamma" v-model.number='enterGamma')
      p.inline.data M (kg/mol)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
      p.inline.data v (m/s) 
        input.center.data(:class="checkedSpeed" v-model='enterSpeed')
        <span class="error" v-if="errorSpeed">[e: {{ errorSpeed.toPrecision(3) }}%]</span>
      p.inline.data λ<sub>min</sub>(m)
        input.center.data(:class="checkedLambdaMin" v-model.number='enterLambdaMin')
        <span class="error" v-if="errorLambdaMin">[e: {{ errorLambdaMin.toPrecision(3) }}%]</span>
      p.inline.data λ<sub>max</sub> (m) 
        input.center.data(:class="checkedLambdaMax" v-model='enterLambdaMax')
        <span class="error" v-if="errorLambdaMax">[e: {{ errorLambdaMax.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterTemp: '',
      errorTemp: 0,
      enterGamma: '',
      errorGamma: 0,
      enterMass: '',
      errorMass: 0,
      enterSpeed: '',
      errorSpeed: 0,
      enterLambdaMin: '',
      errorLambdaMin: 0,
      enterLambdaMax: '',
      errorLambdaMax: 0,
      fmin: 20,
      fmax: 20000,
      gamma: 1.4,
      R: 8.314472,
      M: 28.8e-3
    }
  },
  computed: {
    temperature: function () {
      console.clear()
      let max = 30
      let min = 20
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    speed: function () {
      return Math.sqrt(this.gamma * this.R * (this.temperature + 273.15) / this.M)
    },
    lambdaMin: function () {
      return this.speed / this.fmax
    },
    lambdaMax: function () {
      return this.speed / this.fmin
    },
    checkedTemp: function () {
      this.errorTemp = this.errorRelative('Temperature => ', this.temperature + 273.15, parseFloat(this.enterTemp))
      return this.errorTemp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedGamma: function () {
      this.errorGamma = this.errorRelative('γ => ', this.gamma, parseFloat(this.enterGamma))
      return this.errorGamma < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMass: function () {
      this.errorMass = this.errorRelative('m => ', this.M, parseFloat(this.enterMass))
      return this.errorMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeed: function () {
      this.errorSpeed = this.errorRelative('Speed => ', this.speed, parseFloat(this.enterSpeed))
      return this.errorSpeed < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLambdaMin: function () {
      this.errorLambdaMin = this.errorRelative('λ min => ', this.lambdaMin, parseFloat(this.enterLambdaMin))
      return this.errorLambdaMin < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLambdaMax: function () {
      this.errorLambdaMax = this.errorRelative('λ max => ', this.lambdaMax, parseFloat(this.enterLambdaMax))
      return this.errorLambdaMax < 1e-1 ? 'correct' : 'not-correct'
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
