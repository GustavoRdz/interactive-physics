<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The electron and proton of a hydrogen atom are separated (on the average) by a distance of approximately {{ distance }} m. Find the magnitudes of the electric force and the gravitational force between the two particles. 
    p.small.center G = 6.67x10<sup>-11</sup> N·m<sup>2</sup>/kg<sup>2</sup>&emsp;m<sub>e</sub> = 9.109x10<sup>-31</sup>kg&emsp;m<sub>p</sub> = 1.672x10<sup>-27</sup>kg<br>e = 1.602x10<sup>-19</sup>C&emsp;k<sub>e</sub> = 8.9876x10<sup>9</sup>Nm<sup>2</sup>/C<sup>2</sup> 
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data r (m)
        input.center.data(:class="checkedR" v-model.number='enterR')
        <span class="error" v-if="errorR">[e: {{ errorR.toPrecision(3) }}%]</span>
      p.inline.data K<sub>e</sub> (Nm<sup>2</sup>/C<sup>2</sup>)
        input.center.data(:class="checkedKe" v-model.number='enterKe')
        <span class="error" v-if="errorKe">[e: {{ errorKe.toPrecision(3) }}%]</span>
      p.inline.data electron charge (C)
        input.center.data(:class="checkedQ1" v-model.number='enterQ1')
        <span class="error" v-if="errorQ1">[e: {{ errorQ1.toPrecision(3) }}%]</span>
      p.inline.data proton charge (C)
        input.center.data(:class="checkedQ2" v-model.number='enterQ2')
        <span class="error" v-if="errorQ2">[e: {{ errorQ2.toPrecision(3) }}%]</span>
      p.inline.data electric force: F (N)
        input.center.data(:class="checkedFe" v-model.number='enterFe')
        <span class="error" v-if="errorFe">[e: {{ errorFe.toPrecision(3) }}%]</span>
      p.inline.data Gravity F (N)
        input.center.data(:class="checkedFg" v-model.number='enterFg')
        <span class="error" v-if="errorFg">[e: {{ errorFg.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterR: '',
      errorR: 0,
      enterKe: '',
      errorKe: 0,
      enterQ1: '',
      errorQ1: 0,
      enterQ2: '',
      errorQ2: 0,
      enterFe: '',
      errorFe: 0,
      enterFg: '',
      errorFg: 0,
      ke: 8.9876e9,
      e: 1.602e-19,
      me: 9.109e-31,
      mp: 1.672e-27,
      G: 6.67e-11
    }
  },
  computed: {
    distance: function () {
      console.clear()
      let max = 7
      let min = 5
      return 1e-11 * (Math.round(10 * (Math.random() * (max - min + 1) + min)) / 10)
    },
    forceE: function () {
      return this.ke * this.e * this.e / this.distance ** 2
    },
    forceG: function () {
      return this.G * this.me * this.me / this.distance ** 2
    },
    checkedR: function () {
      this.errorR = this.errorRelative('distance=> ', this.distance, parseFloat(this.enterR))
      return this.errorR < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedKe: function () {
      this.errorKe = this.errorRelative('Ke => ', this.ke, parseFloat(this.enterKe))
      return this.errorKe < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQ1: function () {
      this.errorQ1 = this.errorRelative('electron charge => ', -this.e, parseFloat(this.enterQ1))
      return this.errorQ1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQ2: function () {
      this.errorQ2 = this.errorRelative('proton charge => ', this.e, parseFloat(this.enterQ2))
      return this.errorQ2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFe: function () {
      this.errorFe = this.errorRelative('electric force => ', this.forceE, parseFloat(this.enterFe))
      return this.errorFe < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFg: function () {
      this.errorFg = this.errorRelative('gravity force => ', this.forceG, parseFloat(this.enterFg))
      return this.errorFg < 1e-1 ? 'correct' : 'not-correct'
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
