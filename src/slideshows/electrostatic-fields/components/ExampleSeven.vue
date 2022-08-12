<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A uniform electric field <span style="font-family: times; font-weight: bold;">E</span> is directed along the <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> axis between parallel plates of charge separated by a distance <span style="font-family: times; font-style: italic; font-weight: bold;">d</span>. A positive point charge <span style="font-family: times; font-style: italic; font-weight: bold;">q</span> of mass <span style="font-family: times; font-style: italic; font-weight: bold;">m</span> is released from rest at a point &#x24B6; next to the positive plate and accelerates to a point &#x24B7; next to the negative plate.<br> (A) Find the speed of the particle at &#x24B7; by modeling it as a particle under constant acceleration.<br>(B) Find the speed of the particle at &#x24B7; by modeling it as a nonisolated system.
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Un campo eléctrico uniforme <span style="font-family: font-style: italic; times; font-weight: bold;">E</span> se dirige a lo largo del eje <span style="font-family: times; font-style: italic; font-weight: bold;">x</span> entre placas de carga paralelas separadas por una distancia <span style="font-family: times; font-style: italic; font-weight: bold;">d</span>. Una carga puntual positiva <span style="font-family: times; font-style: italic; font-weight: bold;">q</span> de masa <span style="font-family: times; font-style: italic; font-weight: bold;">m</span> se libera desde el reposo en un punto &#x24B6; junto a la placa positiva y acelera hasta un punto &#x24B7; junto a la placa negativa. (A) Encuentre la velocidad de la partícula en &#x24B7; modelándola como una partícula bajo aceleración constante. (B) Encuentre la velocidad de la partícula en &#x24B7; modelándola como un sistema no aislado.
    .center
      img(src='../assets/fig23-23.png' height="250px")
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
  props: {
    language: Boolean
  },
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
