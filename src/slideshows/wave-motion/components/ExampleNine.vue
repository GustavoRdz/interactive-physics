<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A certain transverse wave is described by 
      .center.problem y(x, t) = ({{ (amplitude * 100).toFixed(1) }}cm)cos2&pi;(x/{{ (wavelength * 100).toFixed(1)}}cm {{ sign }} t/{{ period.toFixed(1) }}s)
    p.problem Determine the wave’s (a) amplitude; (b) wavelength; (c) frequency; (d) speed of propagation; (e) direction of propagation.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data A (m)
        input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
      p.inline.data λ (m)
        input.center.data(:class="checkedWavelength" v-model.number='enterWavelength')
      p.inline.data T (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
      p.inline.data ω (rad/s)
        input.center.data(:class="checkedOmega" v-model.number='enterOmega')
      p.inline.data f (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
      p.inline.data v (m/s)
        input.center.data(:class="checkedVelocity" v-model.number='enterVelocity')
      p.inline.data direction (+x/-x)
        input.center.data(:class="checkedDirection" v-model.number='enterDirection')
      
</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterAmplitude: '',
      enterWavelength: '',
      enterPeriod: '',
      enterOmega: '',
      enterFrequency: '',
      enterVelocity: '',
      enterDirection: ''
    }
  },
  computed: {
    amplitude: function () {
      let max = 20
      let min = 5
      return Math.round(10 * ((Math.random() * (max - min + 1)) + min)) / 1000
    },
    wavelength: function () {
      let max = 20
      let min = 5
      return Math.round(10 * ((Math.random() * (max - min + 1)) + min)) / 1000
    },
    period: function () {
      let max = 20
      let min = 5
      return Math.round(10 * ((Math.random() * (max - min + 1)) + min)) / 10
    },
    omega: function () {
      return Math.round(1000 * 2 * Math.PI / this.period) / 1000
    },
    frequency: function () {
      return Math.round(1000 / this.period) / 1000
    },
    velocity: function () {
      return Math.round(1000 * this.wavelength * this.frequency) / 1000
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
      let check
      console.log('Amplitude : ' + this.amplitude + ' : ' + parseFloat(this.enterAmplitude))
      check = this.amplitude === parseFloat(this.enterAmplitude) ? 'correct' : 'not-correct'
      return check
    },
    checkedWavelength: function () {
      let check
      console.log('Longitud de onda : ' + this.wavelength + ' : ' + parseFloat(this.enterWavelength))
      check = this.wavelength === parseFloat(this.enterWavelength) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period : ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedOmega: function () {
      let check
      console.log('Angular frequency : ' + this.omega + ' : ' + parseFloat(this.enterOmega))
      check = this.omega === parseFloat(this.enterOmega) ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequency: function () {
      let check
      console.log('Frequency : ' + this.frequency + ' : ' + parseFloat(this.enterFrequency))
      check = this.frequency === parseFloat(this.enterFrequency) ? 'correct' : 'not-correct'
      return check
    },
    checkedVelocity: function () {
      let check
      console.log('Velocity : ' + this.velocity + ' : ' + parseFloat(this.enterVelocity))
      check = this.velocity === parseFloat(this.enterVelocity) ? 'correct' : 'not-correct'
      return check
    },
    checkedDirection: function () {
      let check
      let a
      a = this.sign === '+' ? '-x' : '+x'
      console.log('Direction: ' + this.directionTo)
      console.log('Direction: ' + this.sign + ' : ' + a + ' : ' + this.enterDirection)
      check = a === this.enterDirection ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return {
        'baby bunnies': 'Yeeeeah my favorite too !',
        'fluffy puppies': 'Wow so original.',
        'funny kitties': 'Good for you ' + this.volume + '.',
        'Theming': 'Ok ' + this.volume + ', whatever.',
        'Slide reuse': 'Seriously ' + this.volume + ' you <em>want</em> to see this.',
        'Interactivity': 'Well that\'s this slide, ' + this.volume +
                         '. <br /> A bit too late to unsee it, heh ?'
      }[name]
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
      width: 100%;
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
