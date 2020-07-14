<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Find the speed of sound in air at T = 20°C and find the range of wavelengths in air to which the human ear (which can hear frequencies in the range of 20–20,000 Hz) is sensitive. The mean molar, mass for air (a mixture of mostly nitrogen and oxygen) is M = 28.8 * 10<sup>-3</sup> kg/mol and the ratio of heat capacities is &gamma; = 1.40.
    .center
      //- p.solution Please do calculations and introduce your results
      //- p.inline.data Initial displacement (s)
      //-   input.center.data(:class="checkedInitialX" v-model.number='enterInitialX')
      //- p.inline.data Period (s)
      //-   input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
      //- p.inline.data Frequency (Hz)
      //-   input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
      //- p.inline.data Amplitude (m)
      //-   input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
      //- p.inline.data Angular frequency (rad/s)
      //-   input.center.data(:class="checkedAngular" v-model='enterAngular')
      //- p.inline.data phase (rad)
      //-   input.center.data(:class="checkedPhase" v-model='enterPhase')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterInitialX: '',
      enterPeriod: '',
      enterFrequency: '',
      enterAmplitude: '',
      enterAngular: '',
      enterPhase: ''
    }
  },
  computed: {
    chord: function () {
      return calcChord(this.initialX, this.frequency, this.amplitude, this.phase)
    },
    initialX: function () {
      let max = this.amplitude
      let min = -this.amplitude
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    frequency: function () {
      return Math.round(1000 / this.period) / 1000
    },
    amplitude: function () {
      let max = 10
      let min = 2
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    phase: function () {
      return (2 * Math.round(Math.random()) - 1) * Math.round(1000 * Math.acos(this.initialX / this.amplitude)) / 1000
    },
    period: function () {
      let max = 32
      let min = 4
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    angular: function () {
      return Math.round(2000 * Math.PI * this.frequency) / 1000
    },
    checkedPeriod: function () {
      let check
      console.log('Period : ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequency: function () {
      let check
      console.log('Frequency: ' + this.frequency + ' : ' + parseFloat(this.enterFrequency))
      check = this.frequency === parseFloat(this.enterFrequency) ? 'correct' : 'not-correct'
      return check
    },
    checkedAmplitude: function () {
      let check
      console.log('Amplitude : ' + this.amplitude + ' : ' + parseFloat(this.enterAmplitude))
      check = this.amplitude === parseFloat(this.enterAmplitude) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngular: function () {
      let check
      console.log('Angular frequency: ' + this.angular + ' : ' + parseFloat(this.enterAngular))
      check = this.angular === parseFloat(this.enterAngular) ? 'correct' : 'not-correct'
      return check
    },
    checkedPhase: function () {
      let check
      console.log('Phase: ' + this.phase + ' : ' + parseFloat(this.enterPhase))
      check = this.phase === parseFloat(this.enterPhase) ? 'correct' : 'not-correct'
      return check
    },
    checkedInitialX: function () {
      let check
      console.log('Initial X : ' + this.initialX + ' : ' + parseFloat(this.enterInitialX))
      check = this.initialX === parseFloat(this.enterInitialX) ? 'correct' : 'not-correct'
      return check
    },
    checkedAirPressure: function () {
      let check
      console.log('pressure : ' + this.pressure + ' : ' + parseFloat(this.airPressure))
      check = this.pressure === parseFloat(this.airPressure) ? 'correct' : 'not-correct'
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

function calcChord (initialX, frequency, amplitude, phase) {
  let d = `M50,${200 - initialX * 19}`
  let timeIncrement = 16 / 100
  let xIncrement = 610 / 19
  // let phase = Math.acos(initialX / amplitude)
  var time
  for (time = 0; time <= 200; time++) {
    d += `L${50 + 19 * time * timeIncrement} ${200 - 0.6 * xIncrement * amplitude * Math.cos(1 * Math.PI * frequency * time * timeIncrement + phase)}`
  }
  return d
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
