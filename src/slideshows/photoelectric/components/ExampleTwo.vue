<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A {{ mass }}-kg block is attached to a massless spring that has a force constant of k = {{ elasticK }} N/m. The spring is stretched {{ amplitude }} m from its equilibrium position and released from rest. <br>(A) Find the total energy of the system and the frequency of oscillation according to classical calculations. (B) Assuming the energy of the oscillator is quantized, find the quantum number n for the system oscillating with this amplitude.

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data m (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
        <span class="error" v-if="errorMass">[e: {{ errorMass.toPrecision(3) }}%]</span>
      p.inline.data k (N/m)
        input.center.data(:class="checkedK" v-model.number='enterK')
        <span class="error" v-if="errorK">[e: {{ errorK.toPrecision(3) }}%]</span>
      p.inline.data A (m)
        input.center.data(:class="checkedA" v-model.number='enterA')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
      p.inline.data a) E<sub>Classical</sub> (J)
        input.center.data(:class="checkedEc" v-model='enterEc')
        <span class="error" v-if="errorEc">[e: {{ errorEc.toPrecision(3) }}%]</span>
      p.inline.data f (Hz)
        input.center.data(:class="checkedF" v-model='enterF')
        <span class="error" v-if="errorF">[e: {{ errorF.toPrecision(3) }}%]</span>
      p.inline.data b) n
        input.center.data(:class="checkedN" v-model='enterN')
        <span class="error" v-if="errorN">[e: {{ errorN.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterMass: '',
      errorMass: 0,
      enterK: '',
      errorK: 0,
      enterA: '',
      errorA: 0,
      enterEc: '',
      errorEc: 0,
      enterF: '',
      errorF: 0,
      enterN: '',
      errorN: 0
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
      return this.elasticK * this.amplitude ** 2 / 2
    },
    frequency: function () {
      return Math.sqrt(this.elasticK / this.mass) / (2 * Math.PI)
    },
    level: function () {
      return this.energy / (6.626e-34 * this.frequency)
    },
    checkedMass: function () {
      let check
      console.log('Mass => ' + this.mass + ' : ' + parseFloat(this.enterMass))
      this.errorMass = 100 * Math.abs(this.mass - parseFloat(this.enterMass)) / this.mass
      console.log('error  ' + this.errorMass + ' %')
      check = this.errorMass < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedK: function () {
      let check
      console.log('K => ' + this.elasticK + ' : ' + parseFloat(this.enterK))
      this.errorK = 100 * Math.abs(this.elasticK - parseFloat(this.enterK)) / this.elasticK
      console.log('error  ' + this.errorK + ' %')
      check = this.errorK < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedA: function () {
      let check
      console.log('Amplitude => ' + this.amplitude + ' : ' + parseFloat(this.enterA))
      this.errorA = 100 * Math.abs(this.amplitude - parseFloat(this.enterA)) / this.amplitude
      console.log('error  ' + this.errorA + ' %')
      check = this.errorA < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedEc: function () {
      let check
      console.log('classical energy => ' + this.energy + ' : ' + parseFloat(this.enterEc))
      this.errorEc = 100 * Math.abs(this.energy - parseFloat(this.enterEc)) / this.energy
      console.log('error  ' + this.errorEc + ' %')
      check = this.errorEc < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedF: function () {
      let check
      console.log('Frequency => ' + this.frequency + ' : ' + this.enterF)
      this.errorF = 100 * Math.abs(this.frequency - parseFloat(this.enterF)) / this.frequency
      console.log('error  ' + this.errorF + ' %')
      check = this.errorF < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedN: function () {
      let check
      console.log('Level => ' + this.level + ' : ' + this.enterN)
      this.errorN = 100 * Math.abs(this.level - parseFloat(this.enterN)) / this.level
      console.log('error  ' + this.errorN + ' %')
      check = this.errorN < 1e-1 ? 'correct' : 'not-correct'
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
