<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Calculate the energy released when {{ mass.toPrecision(3) }} kg of <sup>{{ masic }}</sup>U fissions, taking the disintegration energy per event to be Q = {{ fisionEnergy }} MeV.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Nuclei number
        input.center.data(:class="checkedN" v-model.number='enterN')
        <span class="error" v-if="errorN">[e: {{ errorN.toPrecision(3) }}%]</span>
      p.inline.data Energy per fision (MeV)
        input.center.data(:class="checkedEf" v-model.number='enterEf')
        <span class="error" v-if="errorEf">[e: {{ errorEf.toPrecision(3) }}%]</span>
      p.inline.data Total energy (MeV)
        input.center.data(:class="checkedEt" v-model.number='enterEt')
        <span class="error" v-if="errorEt">[e: {{ errorEt.toPrecision(3) }}%]</span>
      p.inline.data Energy (kWh)
        input.center.data(:class="checkedE" v-model.number='enterE')
        <span class="error" v-if="errorE">[e: {{ errorE.toPrecision(3) }}%]</span>
      p.small <span class="small">N<sub>A</sub> = 6.02 x10<sup>23</sup> mol<sup>-1</sup></span> -- <span class="small">1 kWh = 3.6x10<sup>6</sup>J</span>
      p(v-if="legend").small Energy which, if released slowly, is enough energy to keep a 100-W lightbulb operating for 30 000 years!<br> If were suddenly released, it would be equivalent to detonating about 20 000 tons of TNT.
</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterN: '',
      errorN: 0,
      enterEf: '',
      errorEf: 0,
      enterEt: '',
      errorEt: 0,
      enterE: '',
      errorE: 0,
      legend: false
    }
  },
  computed: {
    mass: function () {
      console.clear()
      return 1.0
    },
    masic: function () {
      return 235
    },
    fisionEnergy: function () {
      return 208
    },
    N: function () {
      return this.mass * 1e3 * 6.02e23 / this.masic
    },
    energy: function () {
      return this.N * this.fisionEnergy
    },
    energykWh: function () {
      return this.energy * 1.6e-13 / 3.6e6
    },
    checkedN: function () {
      let check
      let elem = this.N
      console.log('N => ' + elem + ' : ' + parseFloat(this.enterN))
      this.errorN = 100 * Math.abs((elem - parseFloat(this.enterN)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorN + ' %')
      check = this.errorN < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedEf: function () {
      let check
      let elem = this.fisionEnergy
      console.log('Qf => ' + elem + ' : ' + parseFloat(this.enterEf))
      this.errorEf = 100 * Math.abs((elem - parseFloat(this.enterEf)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorEf + ' %')
      check = this.errorEf < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedEt: function () {
      let check
      let elem = this.energy
      console.log('Qt => ' + elem + ' : ' + parseFloat(this.enterEt))
      this.errorEt = 100 * Math.abs((elem - parseFloat(this.enterEt)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorEt + ' %')
      check = this.errorEt < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedE: function () {
      let check
      let elem = this.energykWh
      console.log('Q kWh => ' + elem + ' : ' + parseFloat(this.enterE))
      this.errorE = 100 * Math.abs((elem - parseFloat(this.enterE)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorE + ' %')
      check = this.errorE < 1e-1 ? 'correct' : 'not-correct'
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
      width: 100%;
      margin-left: 0%;
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
