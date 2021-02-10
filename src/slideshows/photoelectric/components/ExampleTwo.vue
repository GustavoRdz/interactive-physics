<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A {{ mass }}-kg block is attached to a massless spring that has a force constant of k = {{ elasticK }} N/m. The spring is stretched {{ amplitude }} m from its equilibrium position and released from rest. <br>(A) Find the total energy of the system and the frequency of oscillation according to classical calculations. (B) Assuming the energy of the oscillator is quantized, find the quantum number n for the system oscillating with this amplitude.

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data mass (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
      p.inline.data k (N/m)
        input.center.data(:class="checkedK" v-model.number='enterK')
      p.inline.data Amplitude (m)
        input.center.data(:class="checkedA" v-model.number='enterA')
      p.inline.data A) Classical energy (J)
        input.center.data(:class="checkedEc" v-model='enterEc')
      p.inline.data frequency (Hz)
        input.center.data(:class="checkedF" v-model='enterF')
      p.inline.data B) n
        input.center.data(:class="checkedN" v-model='enterN')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterMass: '',
      enterK: '',
      enterA: '',
      enterEc: '',
      enterF: '',
      enterN: ''
    }
  },
  computed: {
    mass: function () {
      let max = 500
      let min = 100
      return Math.round(Math.floor(Math.random() * (max - min + 1) + min)) / 100
    },
    elasticK: function () {
      let max = 500
      let min = 200
      return Math.round(Math.floor(Math.random() * (max - min + 1) + min)) / 10
    },
    amplitude: function () {
      let max = 50
      let min = 10
      return Math.round(Math.floor(Math.random() * (max - min + 1) + min)) / 100
    },
    energy: function () {
      return Math.floor(1000 * (this.elasticK * this.amplitude ** 2 / 2)) / 1000
    },
    frequency: function () {
      return Math.floor(1000 * (Math.sqrt(this.elasticK / this.mass) / (2 * Math.PI))) / 1000
    },
    level: function () {
      return parseFloat((this.energy / (6.626e-34 * this.frequency)).toPrecision(4))
    },
    checkedMass: function () {
      let check
      console.log('Mass => ' + this.mass + ' : ' + parseFloat(this.enterMass))
      check = this.mass === parseFloat(this.enterMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedK: function () {
      let check
      console.log('K => ' + this.elasticK + ' : ' + parseFloat(this.enterK))
      check = this.elasticK === parseFloat(this.enterK) ? 'correct' : 'not-correct'
      return check
    },
    checkedA: function () {
      let check
      console.log('Amplitude => ' + this.amplitude + ' : ' + parseFloat(this.enterA))
      check = this.amplitude === parseFloat(this.enterA) ? 'correct' : 'not-correct'
      return check
    },
    checkedEc: function () {
      let check
      console.log('classical energy => ' + this.energy + ' : ' + parseFloat(this.enterEc))
      check = this.energy === parseFloat(this.enterEc) ? 'correct' : 'not-correct'
      return check
    },
    checkedF: function () {
      let check
      console.log('Frequency => ' + this.frequency + ' : ' + this.enterF)
      check = this.frequency === parseFloat(this.enterF) ? 'correct' : 'not-correct'
      return check
    },
    checkedN: function () {
      let check
      console.log('Level => ' + this.level + ' : ' + this.enterN)
      check = this.level === parseFloat(this.enterN) ? 'correct' : 'not-correct'
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
