<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A mass m is attached to a spring of force constant {{ elastic }} N/m and allowed to oscillate. Figure shows a graph of its velocity as a function of time. <br>Find (a) the period, (b) the frequency, and (c) the angular frequency of this motion. (d) What is the amplitude (in cm), and at what times does the mass reach this position? (e) Find the maximum acceleration of the mass and the times at which it occurs. (f) What is the mass m?
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Una masa m está unida a un resorte de constante de fuerza de {{ elastic }}N/m y se le permite oscilar. La figura muestra una gráfica de su velocidad en función del tiempo. <br>Encuentre (a) el período, (b) la frecuencia y (c) la frecuencia angular de este movimiento. (d) ¿Cuál es la amplitud (en cm) y en qué momento la masa alcanza esta posición? (e) Encuentre la aceleración máxima de la masa y los tiempos en los que ocurre. (f) ¿Cuál es la masa m?
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
        <text x="0" y="-25" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic"> v </text>
        <text x="25" y="-25" font-size="35" fill="black" font-weight="bold" font-family="Times"> (cm/s) </text>
         <text x="-25" y="20" font-size="35" fill="#00f" font-family="Times"  font-weight="bold" > 20.0 </text>
         <text x="15" y="235" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
         <text x="-37" y="400" font-size="35" fill="#00f" font-family="Times"  font-weight="bold" > -20.0 </text>

         <text x="175" y="235" font-size="35" fill="#00f" font-family="Times" font-weight="bold" > 0.40 </text>
         <text x="335" y="235" font-size="35" fill="#00f" font-family="Times" font-weight="bold" > 0.80 </text>
         <text x="485" y="235" font-size="35" fill="#00f" font-family="Times" font-weight="bold" > 1.20 </text>
         <text x="640" y="235" font-size="35" fill="#00f" font-family="Times" font-weight="bold" > 1.60 </text>
         <text x="720" y="210" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic"> t </text>
         <text x="735" y="210" font-size="35" fill="black" font-weight="bold" font-family="Times"> (s) </text>

        </svg>

    .center
      //- p.solution initial X: {{ initialX }}, amplitudeAcc: {{ amplitudeVel }}, frequency: {{ frequency }}, period: {{ period }}, phase: {{ phase }}:{{ Math.round(phase * 1800 / Math.PI) /10 }}º
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Elastic constant (N/m)
        input.center.data(:class="checkedElastic" v-model.number='enterElastic')
      p.inline.data Period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
      p.inline.data Frequency (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngular" v-model.number='enterAngular')
      p.inline.data Maximum velocity (m/s)
        input.center.data(:class="checkedVel" v-model='enterVel')
      p.inline.data Amplitude (m)
        input.center.data(:class="checkedAmplitude" v-model='enterAmplitude')
      p.inline.data Mass (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')


</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
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
</style>
