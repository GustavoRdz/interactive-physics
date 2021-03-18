<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem On a frictionless, horizontal air track, a glider oscillates at the end of an ideal spring of force constant {{ elastic }} N/m. The graph shows the acceleration of the glider as a function of time. Find (a) the mass of the glider; (b) the maximum displacement of the glider from the equilibrium point; (c) the maximum force the spring exerts on the glider.
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -70 800 500" height="200px" width="400px" >

        <!-- Axis -->
        <line fill="none" stroke="#000" stroke-width="5" x1="0" y1="200" x2="700" y2="200" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="5" x1="50" y1="0" x2="50" y2="400" stroke-linecap="round"/>

        <!-- x scale -->
        <line fill="none" stroke="#000" stroke-width="1" x1="88" y1="10" x2="88" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="126" y1="10" x2="126" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="164" y1="10" x2="164" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="3" x1="202" y1="10" x2="202" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="240" y1="10" x2="240" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="278" y1="10" x2="278" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="316" y1="10" x2="316" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="3" x1="354" y1="10" x2="354" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="392" y1="10" x2="392" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="430" y1="10" x2="430" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="468" y1="10" x2="468" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="3" x1="506" y1="10" x2="506" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="544" y1="10" x2="544" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="582" y1="10" x2="582" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="1" x1="620" y1="10" x2="620" y2="390" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="3" x1="658" y1="10" x2="658" y2="390" stroke-linecap="round"/>

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
        <text x="0" y="-25" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic"> a </text>
        <text x="25" y="-25" font-size="35" fill="black" font-weight="bold" font-family="Times"> (m/s<tspan baseline-shift = "super">2</tspan>) </text>
         <text x="-25" y="20" font-size="35" fill="#00f" font-family="Times"  font-weight="bold" > 15.0 </text>
         <text x="15" y="235" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
         <text x="-37" y="400" font-size="35" fill="#00f" font-family="Times"  font-weight="bold" > -15.0 </text>

         <text x="175" y="235" font-size="35" fill="#00f" font-family="Times" font-weight="bold" > 0.10 </text>
         <text x="335" y="235" font-size="35" fill="#00f" font-family="Times" font-weight="bold" > 0.20 </text>
         <text x="485" y="235" font-size="35" fill="#00f" font-family="Times" font-weight="bold" > 0.30 </text>
         <text x="640" y="235" font-size="35" fill="#00f" font-family="Times" font-weight="bold" > 0.40 </text>
         <text x="720" y="210" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic"> t </text>
         <text x="735" y="210" font-size="35" fill="black" font-weight="bold" font-family="Times"> (s) </text>

        </svg>

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Elastic constant (N/m)
        input.center.data(:class="checkedElastic" v-model.number='enterElastic')
      p.inline.data Period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngular" v-model.number='enterAngular')
      p.inline.data (a) Glider's mass (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
      p.inline.data Maximum acceleration (m/s<sup>2</sup>)
        input.center.data(:class="checkedAccel" v-model='enterAccel')
      p.inline.data (b) Amplitude (m)
        input.center.data(:class="checkedAmplitude" v-model='enterAmplitude')
      p.inline.data (c) Maximum force (N)
        input.center.data(:class="checkedForce" v-model='enterForce')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterElastic: '',
      enterPeriod: '',
      enterAngular: '',
      enterMass: '',
      enterAccel: '',
      enterAmplitude: '',
      enterForce: ''
    }
  },
  computed: {
    chord: function () {
      return calcChord(this.initialX, this.frequency, this.amplitudeAccel, this.phase)
    },
    initialX: function () {
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
      return Math.round(1000 * (this.amplitudeAccel / Math.pow(this.angular, 2))) / 1000
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
    checkedAccel: function () {
      let check
      console.log('Maximum aceleration : ' + this.amplitudeAccel + ' : ' + parseFloat(this.enterAccel))
      check = this.amplitudeAccel === parseFloat(this.enterAccel) ? 'correct' : 'not-correct'
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
