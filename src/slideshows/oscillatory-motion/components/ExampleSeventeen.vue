<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A {{ mass }}-kg connecting rod from a car engine is pivoted about a horizontal knife edge as shown in Figure. The center of gravity of the rod was located by balancing and is {{ gravityCenter }} m from the pivot. When the rod is set into small-amplitude oscillation, it makes {{ oscillations }} complete swings in {{ time }} s. Calculate the moment of inertia of the rod about the rotation axis through the pivot.
    .center
        img(src='../assets/problemConnectingRod.png' style=" width: 120px; height: 200px; object-fit: cover; object-position: 0% 10px;")
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Mass (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
      p.inline.data Center of gravity (m)
        input.center.data(:class="checkedCenter" v-model.number='enterCenter')
      p.inline.data Oscillations (oscillations)
        input.center.data(:class="checkedOscillations" v-model.number='enterOscillations')
      p.inline.data Time (s)
        input.center.data(:class="checkedTime" v-model.number='enterTime')
      p.inline.data Frequency (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
      p.inline.data Inertia (kgm<sup>2</sup>)
        input.center.data(:class="checkedInertia" v-model.number='enterInertia')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterMass: '',
      enterCenter: '',
      enterOscillations: '',
      enterTime: '',
      enterFrequency: '',
      enterInertia: ''
    }
  },
  computed: {
    mass: function () {
      let max = 3000
      let min = 1500
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    gravityCenter: function () {
      let max = 300
      let min = 200
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    oscillations: function () {
      let max = 200
      let min = 50
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    time: function () {
      let max = 250
      let min = 50
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    frequency: function () {
      return Math.round(1000 * this.oscillations / this.time) / 1000
    },
    inertia: function () {
      return Math.round(1000 * 9.81 * this.mass * this.gravityCenter / Math.pow(2 * Math.PI * this.frequency, 2)) / 1000
    },
    checkedMass: function () {
      let check
      console.log('Mass : ' + this.mass + ' : ' + parseFloat(this.enterMass))
      check = this.mass === parseFloat(this.enterMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedCenter: function () {
      let check
      console.log('Gravity center : ' + this.gravityCenter + ' : ' + parseFloat(this.enterCenter))
      check = this.gravityCenter === parseFloat(this.enterCenter) ? 'correct' : 'not-correct'
      return check
    },
    checkedOscillations: function () {
      let check
      console.log('Oscillations : ' + this.oscillations + ' : ' + parseFloat(this.enterOscillations))
      check = this.oscillations === parseFloat(this.enterOscillations) ? 'correct' : 'not-correct'
      return check
    },
    checkedTime: function () {
      let check
      console.log('Time : ' + this.time + ' : ' + parseFloat(this.enterTime))
      check = this.time === parseFloat(this.enterTime) ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequency: function () {
      let check
      console.log('Frequency : ' + this.frequency + ' : ' + parseFloat(this.enterFrequency))
      check = this.frequency === parseFloat(this.enterFrequency) ? 'correct' : 'not-correct'
      return check
    },
    checkedInertia: function () {
      let check
      console.log('Inertia : ' + this.inertia + ' : ' + parseFloat(this.enterInertia))
      check = this.inertia === parseFloat(this.enterInertia) ? 'correct' : 'not-correct'
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
