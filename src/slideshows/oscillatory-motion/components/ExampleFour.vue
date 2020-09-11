<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The displacement of an oscillating object as a function of time is shown. What are (a) the period; (b) the frequency; (c) the amplitude; (d) the angular frequency; (e) the phase of this motion?
    .center
      //img(src='../assets/equations/graphProblem4.svg' width="200px")
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 800 500" height="200px" width="400px" >

        <!-- Axis -->
        <line fill="none" stroke="#000" stroke-width="5" x1="0" y1="200" x2="700" y2="200" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="5" x1="50" y1="0" x2="50" y2="400" stroke-linecap="round"/>

        <!-- x scale -->
        <line fill="none" stroke="#000" stroke-width="1" x1="88" y1="10" x2="88" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="126" y1="10" x2="126" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="164" y1="10" x2="164" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="202" y1="10" x2="202" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="3" x1="240" y1="10" x2="240" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="278" y1="10" x2="278" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="316" y1="10" x2="316" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="354" y1="10" x2="354" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="392" y1="10" x2="392" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="3" x1="430" y1="10" x2="430" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="468" y1="10" x2="468" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="506" y1="10" x2="506" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="544" y1="10" x2="544" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="582" y1="10" x2="582" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="3" x1="620" y1="10" x2="620" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="658" y1="10" x2="658" y2="390" stroke-linecap="round"/>

        <!-- y scale -->
        <line fill="none" stroke="#000" stroke-width="1" x1="50" y1="10" x2="660" y2="10" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="50" y1="48" x2="660" y2="48" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="50" y1="86" x2="660" y2="86" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="50" y1="124" x2="660" y2="124" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="50" y1="162" x2="660" y2="162" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="50" y1="238" x2="660" y2="238" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="50" y1="276" x2="660" y2="276" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="50" y1="314" x2="660" y2="314" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="50" y1="352" x2="660" y2="352" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="50" y1="390" x2="660" y2="390" stroke-linecap="round"/>

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
      p.solution Please do calculations and introduce your results
      p.inline.data Initial displacement (cm)
        input.center.data(:class="checkedInitialX" v-model.number='enterInitialX')
      p.inline.data Period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
      p.inline.data Frequency (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
      p.inline.data Amplitude (cm)
        input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngular" v-model='enterAngular')
      p.inline.data phase (rad)
        input.center.data(:class="checkedPhase" v-model='enterPhase')

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
