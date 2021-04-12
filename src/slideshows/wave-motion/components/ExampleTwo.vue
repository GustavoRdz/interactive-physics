<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A certain transverse wave is described by 
      .center.problem <span class="mate">y</span>(<span class="mate">x</span>, <span class="mate">t</span>) = ({{ (amplitude * 100).toFixed(1) }}cm)cos2<span class="mate">&pi;</span>(<span class="mate">x</span>/{{ (wavelength * 100).toFixed(1)}}cm {{ sign }} <span class="mate">t</span>/{{ period.toFixed(1) }}s)
    p.problem Determine the wave’s (a) amplitude; (b) wavelength; (c) frequency; (d) speed of propagation; (e) direction of propagation.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data A (m)
        input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
        <span class="error" v-if="errorAmplitude">[e: {{ errorAmplitude.toPrecision(3) }}%]</span>
      p.inline.data λ (m)
        input.center.data(:class="checkedWavelength" v-model.number='enterWavelength')
        <span class="error" v-if="errorWavelength">[e: {{ errorWavelength.toPrecision(3) }}%]</span>
      p.inline.data T (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
        <span class="error" v-if="errorPeriod">[e: {{ errorPeriod.toPrecision(3) }}%]</span>
      p.inline.data ω (rad/s)
        input.center.data(:class="checkedOmega" v-model.number='enterOmega')
        <span class="error" v-if="errorOmega">[e: {{ errorOmega.toPrecision(3) }}%]</span>
      p.inline.data f (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
        <span class="error" v-if="errorFrequency">[e: {{ errorFrequency.toPrecision(3) }}%]</span>
      p.inline.data v (m/s)
        input.center.data(:class="checkedVelocity" v-model.number='enterVelocity')
        <span class="error" v-if="errorVelocity">[e: {{ errorVelocity.toPrecision(3) }}%]</span>
      p.inline.data direction (+x/-x)
        input.center.data(:class="checkedDirection" v-model.number='enterDirection')
        <span class="error" v-if="errorDirection">[e: {{ errorDirection.toPrecision(3) }}%]</span>
      
</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterAmplitude: '',
      errorAmplitude: 0,
      enterWavelength: '',
      errorWavelength: 0,
      enterPeriod: '',
      errorPeriod: 0,
      enterOmega: '',
      errorOmega: 0,
      enterFrequency: '',
      errorFrequency: 0,
      enterVelocity: '',
      errorVelocity: 0,
      enterDirection: '',
      errorDirection: 0
    }
  },
  computed: {
    amplitude: function () {
      console.clear()
      let max = 20
      let min = 5
      return Math.round(10 * (Math.random() * (max - min + 1) + min)) / 1000
    },
    wavelength: function () {
      let max = 20
      let min = 5
      return Math.round(10 * (Math.random() * (max - min + 1)) + min) / 1000
    },
    period: function () {
      let max = 20
      let min = 5
      return Math.round(10 * (Math.random() * (max - min + 1)) + min) / 10
    },
    omega: function () {
      return 2 * Math.PI / this.period
    },
    frequency: function () {
      return 1 / this.period
    },
    velocity: function () {
      return 1 * this.wavelength * this.frequency
    },
    directionTo: function () {
      let max = 1
      let min = 0
      return Math.round(((Math.random() * (max - min + 1)) + min))
    },
    sign: function () {
      return this.directionTo === 1 ? '-' : '+'
    },
    checkedAmplitude: function () {
      this.errorAmplitude = this.errorRelative('A => ', this.amplitude, parseFloat(this.enterAmplitude))
      return this.errorAmplitude < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWavelength: function () {
      this.errorWavelength = this.errorRelative('λ => ', this.wavelength, parseFloat(this.enterWavelength))
      return this.errorWavelength < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPeriod: function () {
      this.errorPeriod = this.errorRelative('T => ', this.period, parseFloat(this.enterPeriod))
      return this.errorPeriod < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOmega: function () {
      this.errorOmega = this.errorRelative('ω => ', this.omega, parseFloat(this.enterOmega))
      return this.errorOmega < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFrequency: function () {
      this.errorFrequency = this.errorRelative('f => ', this.frequency, parseFloat(this.enterFrequency))
      return this.errorFrequency < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedVelocity: function () {
      this.errorVelocity = this.errorRelative('v => ', this.velocity, parseFloat(this.enterVelocity))
      return this.errorVelocity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDirection: function () {
      let check
      let a
      a = this.sign === '+' ? '-x' : '+x'
      console.log('Direction: ' + this.directionTo)
      console.log('Direction: sign ' + this.sign + ' => ' + a + ' : ' + this.enterDirection)
      check = a === this.enterDirection ? 'correct' : 'not-correct'
      return check
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
