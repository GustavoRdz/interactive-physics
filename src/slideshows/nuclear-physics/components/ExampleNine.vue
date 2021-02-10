<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Calculate the energy released when {{ mass.toPrecision(3) }} kg of <sup>{{ masic }}</sup>U fissions, taking the disintegration energy per event to be Q = {{ fisionEnergy }} MeV.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Nuclei number
        input.center.data(:class="checkedN" v-model.number='enterN')
      p.inline.data Energy per fision (MeV)
        input.center.data(:class="checkedEf" v-model.number='enterEf')
      p.inline.data Total energy (MeV)
        input.center.data(:class="checkedEt" v-model.number='enterEt')
      p.inline.data Energy (kWh)
        input.center.data(:class="checkedE" v-model.number='enterE')
      p.small <span class="small">N<sub>A</sub> = 6.02 x10<sup>23</sup> mol<sup>-1</sup></span> -- <span class="small">1 kWh = 3.6x10<sup>6</sup>J</span>
      p(v-if="legend").small Energy which, if released slowly, is enough energy to keep a 100-W lightbulb operating for 30 000 years!<br> If were suddenly released, it would be equivalent to detonating about 20 000 tons of TNT.
</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterN: '',
      enterEf: '',
      enterEt: '',
      enterE: '',
      legend: false
    }
  },
  computed: {
    mass: function () {
      return 1.0
    },
    masic: function () {
      return 235
    },
    fisionEnergy: function () {
      return 208
    },
    N: function () {
      return parseFloat((this.mass * 1e3 * 6.02e23 / this.masic).toPrecision(4))
    },
    energy: function () {
      return parseFloat((this.N * this.fisionEnergy).toPrecision(4))
    },
    energykWh: function () {
      return parseFloat((this.energy * 1.6e-13 / 3.6e6).toPrecision(4))
    },
    checkedN: function () {
      let check
      console.log('N => ' + this.N + ' : ' + parseFloat(this.enterN))
      check = this.N === parseFloat(this.enterN) ? 'correct' : 'not-correct'
      return check
    },
    checkedEf: function () {
      let check
      console.log('Qf => ' + this.fisionEnergy + ' : ' + parseFloat(this.enterEf))
      check = this.fisionEnergy === parseFloat(this.enterEf) ? 'correct' : 'not-correct'
      return check
    },
    checkedEt: function () {
      let check
      console.log('Qt => ' + this.energy + ' : ' + parseFloat(this.enterEt))
      check = this.energy === parseFloat(this.enterEt) ? 'correct' : 'not-correct'
      return check
    },
    checkedE: function () {
      let check
      console.log('Q kWh => ' + this.energykWh + ' : ' + parseFloat(this.enterE))
      check = this.energykWh === parseFloat(this.enterE) ? 'correct' : 'not-correct'
      if (this.energykWh === parseFloat(this.enterE)) {
        this.legend = true
      } else {
        this.legend = false
      }
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
