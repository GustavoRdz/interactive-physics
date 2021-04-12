<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A sinusoidal wave traveling in the positive x direction has an amplitude of {{ amplitude }} cm, a wavelength of {{ wavelength }} cm, and a frequency of {{ frequency }} Hz. The vertical position of an element of the medium at t = 0 and x = 0 is also {{ initialX }} cm (a) Find the wave number k, period T, angular frequency ω, and speed v of the wave. (b) Determine the phase constant &phi; and write a general expression for the wave function.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data A  (m)
        input.center.data(:class="checkedΑmplitude" v-model.number='enterAmplitude')
        <span class="error" v-if="errorAmplitude">[e: {{ errorAmplitude.toPrecision(3) }}%]</span>
      p.inline.data λ (m)
        input.center.data(:class="checkedWavelength" v-model.number='enterWavelength')
        <span class="error" v-if="errorWavelength">[e: {{ errorWavelength.toPrecision(3) }}%]</span>
      p.inline.data f (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
        <span class="error" v-if="errorFrequency">[e: {{ errorFrequency.toPrecision(3) }}%]</span>
      p.inline.data k (1/m)
        input.center.data(:class="checkedNumber" v-model.number='enterNumber')
        <span class="error" v-if="errorNumber">[e: {{ errorNumber.toPrecision(3) }}%]</span>
      p.inline.data T (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
        <span class="error" v-if="errorPeriod">[e: {{ errorPeriod.toPrecision(3) }}%]</span>
      p.inline.data ω (rad/s)
        input.center.data(:class="checkedOmega" v-model.number='enterOmega')
        <span class="error" v-if="errorOmega">[e: {{ errorOmega.toPrecision(3) }}%]</span>
      p.inline.data v (m/s)
        input.center.data(:class="checkedVelocity" v-model.number='enterVelocity')
        <span class="error" v-if="errorVelocity">[e: {{ errorVelocity.toPrecision(3) }}%]</span>
      p.inline.data φ (rad)
        input.center.data(:class="checkedPhase" v-model.number='enterPhase')
        <span class="error" v-if="errorPhase">[e: {{ errorPhase.toPrecision(3) }}%]</span>

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
      enterFrequency: '',
      errorFrequency: 0,
      enterNumber: '',
      errorNumber: 0,
      enterPeriod: '',
      errorPeriod: 0,
      enterOmega: '',
      errorOmega: 0,
      enterVelocity: '',
      errorVelocity: 0,
      enterPhase: '',
      errorPhase: 0
    }
  },
  computed: {
    amplitude: function () {
      console.clear()
      let max = 30
      let min = 5
      return Math.round(10 * (Math.random() * (max - min + 1) + min)) / 10
    },
    wavelength: function () {
      let max = 30
      let min = 5
      return Math.round(10 * (Math.random() * (max - min + 1) + min)) / 10
    },
    frequency: function () {
      let max = 30
      let min = 5
      return Math.round(10 * (Math.random() * (max - min + 1) + min)) / 10
    },
    initialX: function () {
      return this.amplitude
    },
    number: function () {
      return 2 * Math.PI / this.wavelength
    },
    period: function () {
      return 1 / this.frequency
    },
    angularFrequency: function () {
      return 2 * Math.PI * this.frequency
    },
    velocity: function () {
      return this.wavelength * this.frequency
    },
    phase: function () {
      return 0
    },
    checkedΑmplitude: function () {
      this.errorAmplitude = this.errorRelative('Amplitude => ', this.amplitude, parseFloat(this.enterAmplitude))
      return this.errorAmplitude < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWavelength: function () {
      this.errorWavelength = this.errorRelative('λ => ', this.wavelength, parseFloat(this.enterWavelength))
      return this.errorWavelength < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFrequency: function () {
      this.errorFrequency = this.errorRelative('f => ', this.frequency, parseFloat(this.enterFrequency))
      return this.errorFrequency < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedNumber: function () {
      this.errorNumber = this.errorRelative('Number => ', this.number, parseFloat(this.enterNumber))
      return this.errorNumber < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPeriod: function () {
      this.errorPeriod = this.errorRelative('Period => ', this.period, parseFloat(this.enterPeriod))
      return this.errorPeriod < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOmega: function () {
      this.errorOmega = this.errorRelative('ω => ', this.angularFrequency, parseFloat(this.enterOmega))
      return this.errorOmega < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedVelocity: function () {
      this.errorVelocity = this.errorRelative('velocity => ', this.velocity, parseFloat(this.enterVelocity))
      return this.errorVelocity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPhase: function () {
      this.errorPhase = this.errorRelative('φ => ', this.phase, parseFloat(this.enterPhase))
      return this.errorPhase < 1e-1 ? 'correct' : 'not-correct'
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
  font-size: 25px;
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
.error {
  font-size: 14px;
}
</style>
