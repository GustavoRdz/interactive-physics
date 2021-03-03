<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A sinusoidal wave traveling in the positive x direction has an amplitude of {{ amplitude }} cm, a wavelength of {{ wavelength }} cm, and a frequency of {{ frequency }} Hz. The vertical position of an element of the medium at t = 0 and x = 0 is also {{ initialX }} cm (a) Find the wave number k, period T, angular frequency ω, and speed v of the wave. (b) Determine the phase constant &phi; and write a general expression for the wave function.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data A  (m)
        input.center.data(:class="checkedΑmplitude" v-model.number='enterA')
      p.inline.data λ (m)
        input.center.data(:class="checkedWavelength" v-model.number='enterWavelength')
      p.inline.data f (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
      p.inline.data k (1/m)
        input.center.data(:class="checkedNumber" v-model.number='enterNumber')
      p.inline.data T (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
      p.inline.data ω (rad/s)
        input.center.data(:class="checkedOmega" v-model.number='enterOmega')
      p.inline.data v (m/s)
        input.center.data(:class="checkedVelocity" v-model.number='enterVelocity')
      p.inline.data φ (rad)
        input.center.data(:class="checkedPhase" v-model.number='enterPhase')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterA: '',
      enterWavelength: '',
      enterFrequency: '',
      enterNumber: '',
      enterPeriod: '',
      enterOmega: '',
      enterVelocity: '',
      enterPhase: ''
    }
  },
  computed: {
    amplitude: function () {
      let max = 30
      let min = 5
      return Math.round(10 * ((Math.random() * (max - min + 1)) + min)) / 10
    },
    wavelength: function () {
      let max = 30
      let min = 5
      return Math.round(10 * ((Math.random() * (max - min + 1)) + min)) / 10
    },
    frequency: function () {
      let max = 30
      let min = 5
      return Math.round(10 * ((Math.random() * (max - min + 1)) + min)) / 10
    },
    initialX: function () {
      return this.amplitude
    },
    number: function () {
      return Math.round((2 * Math.PI / this.wavelength) * 1000) / 1000
    },
    period: function () {
      return Math.round((1 / this.frequency) * 1000) / 1000
    },
    angularFrequency: function () {
      return Math.round(2 * Math.PI * this.frequency * 1000) / 1000
    },
    velocity: function () {
      return Math.round(this.wavelength * this.frequency * 1000) / 1000
    },
    phase: function () {
      return 0
    },
    checkedΑmplitude: function () {
      let check
      console.log('Amplitude: => ' + this.amplitude + ' : ' + parseFloat(this.enterA))
      check = this.amplitude === parseFloat(this.enterA) ? 'correct' : 'not-correct'
      return check
    },
    checkedWavelength: function () {
      let check
      console.log('Wavelength:  => ' + this.wavelength + ' : ' + parseFloat(this.enterWavelength))
      check = this.wavelength === parseFloat(this.enterWavelength) ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequency: function () {
      let check
      console.log('Frequency: => ' + this.frequency + ' : ' + parseFloat(this.enterFrequency))
      check = this.frequency === parseFloat(this.enterFrequency) ? 'correct' : 'not-correct'
      return check
    },
    checkedNumber: function () {
      let check
      console.log('Wave number: => ' + this.number + ' : ' + parseFloat(this.enterNumber))
      check = this.number === parseFloat(this.enterNumber) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period: => ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedOmega: function () {
      let check
      console.log('Angular frequency: => ' + this.angularFrequency + ' : ' + parseFloat(this.enterOmega))
      check = this.angularFrequency === parseFloat(this.enterOmega) ? 'correct' : 'not-correct'
      return check
    },
    checkedVelocity: function () {
      let check
      console.log('Velocidad: => ' + this.velocity + ' : ' + parseFloat(this.enterVelocity))
      check = this.velocity === parseFloat(this.enterVelocity) ? 'correct' : 'not-correct'
      return check
    },
    checkedPhase: function () {
      let check
      console.log('Fase: => ' + this.phase + ' : ' + parseFloat(this.enterPhase))
      check = this.phase === parseFloat(this.enterPhase) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return
    }
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
