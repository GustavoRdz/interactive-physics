<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem You want to find the moment of inertia of a complicated machine part about an axis through its center of mass. You suspend it from a wire along this axis. The wire has a torsion constant of {{ torsion }} Nm/rad. You twist the part a small amount about this axis and let it go, timing {{ oscillations }} oscillations in {{ time }} s. What is the moment of inertia you want to find?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Torsion constant (Nm/rad)
        input.center.data(:class="checkedTorsion" v-model.number='enterTorsion')
      p.inline.data Oscillations (oscillations)
        input.center.data(:class="checkedOscillations" v-model.number='enterOscillations')
      p.inline.data Time (s)
        input.center.data(:class="checkedTime" v-model.number='enterTime')
      p.inline.data frequency (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngular" v-model.number='enterAngular')
      p.inline.data Moment of inertia (kgm<sup>2</sup>)
        input.center.data(:class="checkedInertia" v-model.number='enterInertia')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterTorsion: '',
      enterOscillations: '',
      enterTime: '',
      enterFrequency: '',
      enterAngular: '',
      enterInertia: ''
    }
  },
  computed: {
    torsion: function () {
      let max = 2000
      let min = 500
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    oscillations: function () {
      let max = 300
      let min = 100
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    time: function () {
      let max = 400
      let min = 100
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    frequency: function () {
      return Math.round(1000 * this.oscillations / this.time) / 1000
    },
    angular: function () {
      return Math.round(2000 * Math.PI * this.frequency) / 1000
    },
    inertia: function () {
      return Math.round(1000 * this.torsion / Math.pow(this.angular, 2)) / 1000
    },
    checkedTorsion: function () {
      let check
      console.log('Torsion : ' + this.torsion + ' : ' + parseFloat(this.enterTorsion))
      check = parseFloat(this.torsion) === parseFloat(this.enterTorsion) ? 'correct' : 'not-correct'
      return check
    },
    checkedOscillations: function () {
      let check
      console.log('Oscillations : ' + this.oscillations + ' : ' + parseFloat(this.enterOscillations))
      check = parseFloat(this.oscillations) === parseFloat(this.enterOscillations) ? 'correct' : 'not-correct'
      return check
    },
    checkedTime: function () {
      let check
      console.log('Time : ' + this.time + ' : ' + parseFloat(this.enterTime))
      check = parseFloat(this.time) === parseFloat(this.enterTime) ? 'correct' : 'not-correct'
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
      console.log('Angular : ' + this.angular + ' : ' + parseFloat(this.enterAngular))
      check = this.angular === parseFloat(this.enterAngular) ? 'correct' : 'not-correct'
      return check
    },
    checkedInertia: function () {
      let check
      console.log('Inertia : ' + this.inertia + ' : ' + parseFloat(this.enterInertia))
      check = this.inertia === parseFloat(this.enterInertia) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserHorizontalDistance: function () {
      let check
      console.log(this.horizontalDistance + ' : ' + parseFloat(this.userHorizontalDistance))
      check = parseFloat(this.horizontalDistance) === parseFloat(this.userHorizontalDistance) ? 'correct' : 'not-correct'
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
