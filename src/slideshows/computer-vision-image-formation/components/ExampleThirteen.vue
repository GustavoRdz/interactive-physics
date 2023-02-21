<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A sinusoidal electromagnetic wave of fre- quency 40.0 MHz travels in free space in the x direction.<br>(A) Determine the wavelength and period of the wave.<br>(B) At some point and at some instant, the electric field has its maximum value of 750 N/C and is directed along the y axis. Calculate the magnitude and direction of the magnetic field at this position and time.
    .center
      //- img(src="../assets/fig34-9.png" height="250px")

    //- .center
    //-   //- p.solution initial X: {{ initialX }}, amplitudeAcc: {{ amplitudeVel }}, frequency: {{ frequency }}, period: {{ period }}, phase: {{ phase }}:{{ Math.round(phase * 1800 / Math.PI) /10 }}º
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Elastic constant (N/m)
    //-     input.center.data(:class="checkedElastic" v-model.number='enterElastic')
    //-   p.inline.data Period (s)
    //-     input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
    //-   p.inline.data Frequency (Hz)
    //-     input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
    //-   p.inline.data Angular frequency (rad/s)
    //-     input.center.data(:class="checkedAngular" v-model.number='enterAngular')
    //-   p.inline.data Maximum velocity (m/s)
    //-     input.center.data(:class="checkedVel" v-model='enterVel')
    //-   p.inline.data Amplitude (m)
    //-     input.center.data(:class="checkedAmplitude" v-model='enterAmplitude')
    //-   p.inline.data Mass (kg)
    //-     input.center.data(:class="checkedMass" v-model.number='enterMass')


</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterElastic: '',
      enterPeriod: '',
      enterFrequency: '',
      enterAngular: '',
      enterMass: '',
      enterVel: '',
      enterAmplitude: '',
      enterForce: ''
    }
  },
  computed: {
    chord: function () {
      return calcChord(this.initialX, this.frequency, this.amplitudeVel, this.phase)
    },
    initialX: function () {
      let max = this.amplitudeVel
      let min = -this.amplitudeVel
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    frequency: function () {
      return Math.round(1000 / this.period) / 1000
    },
    amplitudeVel: function () {
      let max = 20
      let min = 2
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    period: function () {
      let max = 40
      let min = 1
      return Math.round(100 * Math.floor((Math.random() * (max - min + 1) + min))) / 1000
    },
    phase: function () {
      return (2 * Math.round(Math.random()) - 1) * Math.round(1000 * Math.acos(this.initialX / this.amplitudeVel)) / 1000
    },
    elastic: function () {
      let max = 10
      let min = 2
      return Math.round((100 * Math.floor(Math.random() * (max - min + 1)) + min)) / 100
    },
    angular: function () {
      return Math.round(2000 * Math.PI / this.period) / 1000
    },
    mass: function () {
      return Math.round(1000 * this.elastic / Math.pow(this.angular, 2)) / 1000
    },
    accel: function () {
      return Math.round(1.2 * 9.81 * (1 - this.rise / 100) * 1000) / 1000
    },
    amplitude: function () {
      return Math.round(1000 * (this.amplitudeVel / this.angular)) / 1000
    },
    force: function () {
      return Math.round(1000 * (this.elastic * this.amplitude)) / 1000
    },
    checkedElastic: function () {
      let check
      console.log('Elastic Constant : ' + this.elastic + ' : ' + parseFloat(this.enterElastic))
      check = this.elastic === parseFloat(this.enterElastic) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period : ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequency: function () {
      let check
      console.log('Frequency : ' + this.frequency + ' : ' + parseFloat(this.enterFrequency))
      check = this.frequency === parseFloat(this.enterFrequency) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngular: function () {
      let check
      console.log('&omega;: ' + this.angular + ' : ' + parseFloat(this.enterAngular))
      check = this.angular === parseFloat(this.enterAngular) ? 'correct' : 'not-correct'
      return check
    },
    checkedMass: function () {
      let check
      console.log('Glider`s mass: ' + this.mass + ' : ' + parseFloat(this.enterMass))
      check = this.mass === parseFloat(this.enterMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedVel: function () {
      let check
      console.log('Maximum velocity : ' + this.amplitudeVel + ' : ' + parseFloat(this.enterVel))
      check = this.amplitudeVel === parseFloat(this.enterVel) ? 'correct' : 'not-correct'
      return check
    },
    checkedAmplitude: function () {
      let check
      console.log('Amplitude : ' + this.amplitude + ' : ' + parseFloat(this.enterAmplitude))
      check = this.amplitude === parseFloat(this.enterAmplitude) ? 'correct' : 'not-correct'
      return check
    },
    checkedForce: function () {
      let check
      console.log('Force : ' + this.force + ' : ' + parseFloat(this.enterForce))
      check = this.force === parseFloat(this.enterForce) ? 'correct' : 'not-correct'
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

function calcChord (initialX, frequency, amplitudeVel, phase) {
  let xIncrement = 380 / 25
  let d = `M50,${200 - initialX * 0.625 * xIncrement} `
  let timeIncrement = 1.61 / 50
  let pixelTime = 570 / 3
  // let phase = Math.acos(initialX / amplitude)
  var time
  for (time = 0; time <= 94; time++) {
    d += `L${50 + pixelTime * time * timeIncrement} ${200 - 0.625 * xIncrement * amplitudeVel * Math.cos(1 * Math.PI * frequency * time * timeIncrement + phase)}`
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
