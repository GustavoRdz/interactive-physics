<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A magnet is placed near a metal loop as shown.<br>(A) Find the direction of the induced current in the loop when the magnet is pushed toward the loop.<br>(B) Find the direction of the induced current in the loop when the magnet is pulled away from the loop.
    img(src='../assets/fig31-13A.png' width="200px" style="margin: 0 0 0 -50px;")
    img(src='../assets/fig31-13B.png' width="200px" style="margin: 0 0 0 0px;")
    img(src='../assets/fig31-13C.png' width="200px" style="margin: 0 0 0 0px;")
    img(src='../assets/fig31-13D.png' width="200px" style="margin: 0 0 0 0px;")
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Initial displacement (cm)
    //-     input.center.data(:class="checkedInitialX" v-model.number='enterInitialX')
    //-     <span class="error" v-if="errorInitialX">[e: {{ errorInitialX.toPrecision(3) }}%]</span>
    //-   p.inline.data Period (s)
    //-     input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
    //-     <span class="error" v-if="errorPeriod">[e: {{ errorPeriod.toPrecision(3) }}%]</span>
    //-   p.inline.data Frequency (Hz)
    //-     input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
    //-     <span class="error" v-if="errorFrequency">[e: {{ errorFrequency.toPrecision(3) }}%]</span>
    //-   p.inline.data Amplitude (cm)
    //-     input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
    //-     <span class="error" v-if="errorAmplitude">[e: {{ errorAmplitude.toPrecision(3) }}%]</span>
    //-   p.inline.data Angular frequency (rad/s)
    //-     input.center.data(:class="checkedAngular" v-model='enterAngular')
    //-     <span class="error" v-if="errorAngular">[e: {{ errorAngular.toPrecision(3) }}%]</span>
    //-   p.inline.data phase (rad)
    //-     input.center.data(:class="checkedPhase" v-model='enterPhase')
    //-     <span class="error" v-if="errorPhase">[e: {{ errorPhase.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterInitialX: '',
      errorInitialX: 0,
      enterPeriod: '',
      errorPeriod: 0,
      enterFrequency: '',
      errorFrequency: 0,
      enterAmplitude: '',
      errorAmplitude: 0,
      enterAngular: '',
      errorAngular: 0,
      enterPhase: '',
      errorPhase: 0
    }
  },
  computed: {
    chord: function () {
      console.clear()
      return calcChord(this.initialX, this.frequency, this.amplitude, this.phase)
    },
    initialX: function () {
      let max = this.amplitude
      let min = -this.amplitude
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    frequency: function () {
      return 1 / this.period
    },
    amplitude: function () {
      let max = 10
      let min = 2
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    phase: function () {
      return (2 * Math.round(Math.random()) - 1) * Math.acos(this.initialX / this.amplitude)
    },
    period: function () {
      let max = 32
      let min = 4
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    angular: function () {
      return 2 * Math.PI * this.frequency
    },
    checkedInitialX: function () {
      this.errorInitialX = this.errorRelative('Initial disp => ', this.initialX, parseFloat(this.enterInitialX))
      return this.errorInitialX < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPeriod: function () {
      this.errorPeriod = this.errorRelative('Period => ', this.period, parseFloat(this.enterPeriod))
      return this.errorPeriod < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFrequency: function () {
      this.errorFrequency = this.errorRelative('Frequency => ', this.frequency, parseFloat(this.enterFrequency))
      return this.errorFrequency < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAmplitude: function () {
      this.errorAmplitude = this.errorRelative('Amplitude => ', this.amplitude, parseFloat(this.enterAmplitude))
      return this.errorAmplitude < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngular: function () {
      this.errorAngular = this.errorRelative('Omega => ', this.angular, parseFloat(this.enterAngular))
      return this.errorAngular < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPhase: function () {
      this.errorPhase = this.errorRelative('Phase => ', this.phase, parseFloat(this.enterPhase))
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
