<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem The displacement of an oscillating object as a function of time is shown. What are (a) the period; (b) the frequency; (c) the amplitude; (d) the angular frequency; (e) the phase of this motion?
    p(v-if = 'language' style="margin: 25px 0px 30px 0px;").problem La gráfica muestra el desplazamiento de un objeto oscilante en función del tiempo. ¿Cuáles son (a) el período; (b) la frecuencia; (c) la amplitud; (d) la frecuencia angular; (e) la fase de este movimiento?
    .center
      //img(src='../assets/equations/graphProblem4.svg' width="200px")
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 800 500" height="200px" width="400px" >

        <!-- Axis -->
        <line fill="none" stroke="#000" stroke-width="5" x1="0" y1="200" x2="700" y2="200" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="5" x1="50" y1="0" x2="50" y2="400" stroke-linecap="round"/>

        <!-- x scale -->
        <line v-for="x in [88,126,164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620, 658]" fill="none" stroke="#000" stroke-width="1" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>

        <!-- y scale -->
        <line v-for="y in [10, 48, 86, 124, 162, 238, 276, 314, 352, 390]" fill="none" stroke="#000" stroke-width="1" x1="50" :y1="y" x2="660" :y2="y" stroke-linecap="round"/>
        
        <!-- graph -->
        <path :d="chord" stroke="#f00" fill="none" stroke-opacity="1" stroke-width="5" ></path>

        <!-- text -->
        <text x="0" y="-25" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic"> x </text>
        <text x="25" y="-25" font-size="35" fill="black" font-weight="bold" font-family="Times"> (cm) </text>
        <text x="-25" y="20" font-size="35" fill="#00f" font-family="Times"  font-weight="bold" > 10.0 </text>
        <text x="15" y="235" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        <text x="-37" y="400" font-size="35" fill="#00f" font-family="Times"  font-weight="bold" > -10.0 </text>

        <text x="220" y="235" font-size="35" fill="#00f" font-family="Times" font-weight="bold" > 5.0 </text>
        <text x="395" y="235" font-size="35" fill="#00f" font-family="Times" font-weight="bold" > 10.0 </text>
        <text x="585" y="235" font-size="35" fill="#00f" font-family="Times" font-weight="bold" > 15.0 </text>
        <text x="720" y="210" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic"> t </text>
        <text x="735" y="210" font-size="35" fill="black" font-weight="bold" font-family="Times"> (s) </text>

      </svg>
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Initial displacement (cm)
        input.center.data(:class="checkedInitialX" v-model.number='enterInitialX')
        <span class="error" v-if="errorInitialX">[e: {{ errorInitialX.toPrecision(3) }}%]</span>
      p.inline.data Period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
        <span class="error" v-if="errorPeriod">[e: {{ errorPeriod.toPrecision(3) }}%]</span>
      p.inline.data Frequency (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
        <span class="error" v-if="errorFrequency">[e: {{ errorFrequency.toPrecision(3) }}%]</span>
      p.inline.data Amplitude (cm)
        input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
        <span class="error" v-if="errorAmplitude">[e: {{ errorAmplitude.toPrecision(3) }}%]</span>
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngular" v-model='enterAngular')
        <span class="error" v-if="errorAngular">[e: {{ errorAngular.toPrecision(3) }}%]</span>
      p.inline.data phase (rad)
        input.center.data(:class="checkedPhase" v-model='enterPhase')
        <span class="error" v-if="errorPhase">[e: {{ errorPhase.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
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
