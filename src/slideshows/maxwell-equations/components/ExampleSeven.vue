<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The coil in an AC generator consists of 8 turns of wire, each of area A = 0.090 0 m<sup>2</sup>, and the total resistance of the wire is 12.0 &ohm;. The coil rotates in a 0.500-T magnetic field at a constant frequency of 60.0 Hz.<br>(A) Find the maximum induced emf in the coil.<br>(B) What is the maximum induced current in the coil when the output terminals are connected to a low-resistance conductor?


    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Elastic constant (N/m)
    //-     input.center.data(:class="checkedElastic" v-model.number='enterElastic')
    //-     <span class="error" v-if="errorElastic">[e: {{ errorElastic.toPrecision(3) }}%]</span>
    //-   p.inline.data Period (s)
    //-     input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
    //-     <span class="error" v-if="errorPeriod">[e: {{ errorPeriod.toPrecision(3) }}%]</span>
    //-   p.inline.data Angular frequency (rad/s)
    //-     input.center.data(:class="checkedAngular" v-model.number='enterAngular')
    //-     <span class="error" v-if="errorAngular">[e: {{ errorAngular.toPrecision(3) }}%]</span>
    //-   p.inline.data (a) Glider's mass (kg)
    //-     input.center.data(:class="checkedMass" v-model.number='enterMass')
    //-     <span class="error" v-if="errorMass">[e: {{ errorMass.toPrecision(3) }}%]</span>
    //-   p.inline.data Maximum acceleration (m/s<sup>2</sup>)
    //-     input.center.data(:class="checkedAccel" v-model='enterAccel')
    //-     <span class="error" v-if="errorAccel">[e: {{ errorAccel.toPrecision(3) }}%]</span>
    //-   p.inline.data (b) Amplitude (m)
    //-     input.center.data(:class="checkedAmplitude" v-model='enterAmplitude')
    //-     <span class="error" v-if="errorAmplitude">[e: {{ errorAmplitude.toPrecision(3) }}%]</span>
    //-   p.inline.data (c) Maximum force (N)
    //-     input.center.data(:class="checkedForce" v-model='enterForce')
    //-     <span class="error" v-if="errorForce">[e: {{ errorForce.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterElastic: '',
      errorElastic: 0,
      enterPeriod: '',
      errorPeriod: 0,
      enterAngular: '',
      errorAngular: 0,
      enterMass: '',
      errorMass: 0,
      enterAccel: '',
      errorAccel: 0,
      enterAmplitude: '',
      errorAmplitude: 0,
      enterForce: '',
      errorForce: 0
    }
  },
  computed: {
    chord: function () {
      return calcChord(this.initialX, this.frequency, this.amplitudeAccel, this.phase)
    },
    initialX: function () {
      console.clear()
      let max = this.amplitudeAccel
      let min = -this.amplitudeAccel
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    frequency: function () {
      return Math.round(1000 / this.period) / 1000
    },
    amplitudeAccel: function () {
      let max = 15
      let min = 2
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    period: function () {
      let max = 32
      let min = 4
      return Math.round(1000 * Math.floor((Math.random() * (max - min + 1) + min)) * 0.025) / 1000
    },
    phase: function () {
      return (2 * Math.round(Math.random()) - 1) * Math.round(1000 * Math.acos(this.initialX / this.amplitudeAccel)) / 1000
    },
    elastic: function () {
      let max = 10
      let min = 2
      return Math.round(100 * Math.floor(Math.random() * (max - min + 1) + min)) / 100
    },
    angular: function () {
      return 2 * Math.PI / this.period
    },
    mass: function () {
      return this.elastic / Math.pow(this.angular, 2)
    },
    // accel: function () {
    //   return Math.round(1.2 * 9.81 * (1 - this.rise / 100) * 1000) / 1000
    // },
    amplitude: function () {
      return this.amplitudeAccel / Math.pow(this.angular, 2)
    },
    force: function () {
      return this.elastic * this.amplitude
    },
    checkedElastic: function () {
      this.errorElastic = this.errorRelative('K => ', this.elastic, parseFloat(this.enterElastic))
      return this.errorElastic < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPeriod: function () {
      this.errorPeriod = this.errorRelative('T => ', this.period, parseFloat(this.enterPeriod))
      return this.errorPeriod < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngular: function () {
      this.errorAngular = this.errorRelative('Ω => ', this.angular, parseFloat(this.enterAngular))
      return this.errorAngular < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMass: function () {
      this.errorMass = this.errorRelative('m => ', this.mass, parseFloat(this.enterMass))
      return this.errorMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAccel: function () {
      this.errorAccel = this.errorRelative('a => ', this.amplitudeAccel, parseFloat(this.enterAccel))
      return this.errorAccel < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAmplitude: function () {
      this.errorAmplitude = this.errorRelative('A => ', this.amplitude, parseFloat(this.enterAmplitude))
      return this.errorAmplitude < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedForce: function () {
      this.errorForce = this.errorRelative('F => ', this.force, parseFloat(this.enterForce))
      return this.errorForce < 1e-1 ? 'correct' : 'not-correct'
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

function calcChord (initialX, frequency, amplitudeAccel, phase) {
  let xIncrement = 380 / 19
  let d = `M50,${200 - initialX * 0.625 * xIncrement} `
  let timeIncrement = 0.425 / 50
  let pixelTime = 570 / 0.75
  // let phase = Math.acos(initialX / amplitude)
  var time
  for (time = 0; time <= 94; time++) {
    d += `L${50 + pixelTime * time * timeIncrement} ${200 - 0.625 * xIncrement * amplitudeAccel * Math.cos(1 * Math.PI * frequency * time * timeIncrement + phase)}`
  }
  return d
}
</script>

<style lang='scss' scoped>
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
