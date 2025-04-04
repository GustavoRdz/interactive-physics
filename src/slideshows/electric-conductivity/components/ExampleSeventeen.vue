<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A {{ mass }}-kg connecting rod from a car engine is pivoted about a horizontal knife edge as shown in Figure. The center of gravity of the rod was located by balancing and is {{ gravityCenter }} m from the pivot. When the rod is set into small-amplitude oscillation, it makes {{ oscillations }} complete swings in {{ time }} s. Calculate the moment of inertia of the rod about the rotation axis through the pivot.
    .center
        //- img(src='../assets/problemConnectingRod.png' style=" width: 120px; height: 200px; object-fit: cover; object-position: 0% 10px;")
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Mass (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
        <span class="error" v-if="errorMass">[e: {{ errorMass.toPrecision(3) }}%]</span>
      p.inline.data Center of gravity (m)
        input.center.data(:class="checkedCenter" v-model.number='enterCenter')
        <span class="error" v-if="errorCenter">[e: {{ errorCenter.toPrecision(3) }}%]</span>
      p.inline.data Oscillations (oscillations)
        input.center.data(:class="checkedOscillations" v-model.number='enterOscillations')
        <span class="error" v-if="errorOscillations">[e: {{ errorOscillations.toPrecision(3) }}%]</span>
      p.inline.data Time (s)
        input.center.data(:class="checkedTime" v-model.number='enterTime')
        <span class="error" v-if="errorTime">[e: {{ errorTime.toPrecision(3) }}%]</span>
      p.inline.data Frequency (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
        <span class="error" v-if="errorFrequency">[e: {{ errorFrequency.toPrecision(3) }}%]</span>
      p.inline.data Inertia (kgm<sup>2</sup>)
        input.center.data(:class="checkedInertia" v-model.number='enterInertia')
        <span class="error" v-if="errorInertia">[e: {{ errorInertia.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterMass: '',
      errorMass: 0,
      enterCenter: '',
      errorCenter: 0,
      enterOscillations: '',
      errorOscillations: 0,
      enterTime: '',
      errorTime: 0,
      enterFrequency: '',
      errorFrequency: 0,
      enterInertia: '',
      errorInertia: 0
    }
  },
  computed: {
    mass: function () {
      console.clear()
      let max = 3000
      let min = 1500
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    gravityCenter: function () {
      let max = 300
      let min = 200
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    oscillations: function () {
      let max = 200
      let min = 50
      return Math.floor(Math.random() * (max - min + 1) + min) / 1
    },
    time: function () {
      let max = 250
      let min = 50
      return Math.floor(Math.random() * (max - min + 1) + min) / 1
    },
    frequency: function () {
      return this.oscillations / this.time
    },
    inertia: function () {
      return 9.81 * this.mass * this.gravityCenter / Math.pow(2 * Math.PI * this.frequency, 2)
    },
    checkedMass: function () {
      this.errorMass = this.errorRelative('Mass => ', this.mass, parseFloat(this.enterMass))
      return this.errorMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCenter: function () {
      this.errorCenter = this.errorRelative('Gravity center => ', this.gravityCenter, parseFloat(this.enterCenter))
      return this.errorCenter < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOscillations: function () {
      this.errorOscillations = this.errorRelative('Oscillations => ', this.oscillations, parseFloat(this.enterOscillations))
      return this.errorOscillations < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTime: function () {
      this.errorTime = this.errorRelative('Time => ', this.time, parseFloat(this.enterTime))
      return this.errorTime < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFrequency: function () {
      this.errorFrequency = this.errorRelative('Frequency => ', this.frequency, parseFloat(this.enterFrequency))
      return this.errorFrequency < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedInertia: function () {
      this.errorInertia = this.errorRelative('Inertia => ', this.inertia, parseFloat(this.enterInertia))
      return this.errorInertia < 1e-1 ? 'correct' : 'not-correct'
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
