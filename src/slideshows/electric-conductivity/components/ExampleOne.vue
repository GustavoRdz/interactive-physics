<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The radius of 22-gauge Nichrome wire is 0.32 mm.<br>(A) Calculate the resistance per unit length of this wire.<br>(B) If a potential difference of 10 V is maintained across a 1.0-m length of the Nichrome wire, what is the current in the wire? (&rho; = 1&times; 10<sup>-6</sup>)
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Frequency: f (Hz)
    //-     input.center.data(:class="checkedF" v-model.number='enterF')
    //-     <span class="error" v-if="errorF">[e: {{ errorF.toPrecision(3) }}%]</span>
    //-   p.inline.data Period:T (s)
    //-     input.center.data(:class="checkedT" v-model.number='enterT')
    //-     <span class="error" v-if="errorT">[e: {{ errorT.toPrecision(3) }}%]</span>
    //-   p.inline.data Angular frequency: &omega; (rad/s)
    //-     input.center.data(:class="checkedOmega" v-model.number='enterOmega')
    //-     <span class="error" v-if="errorOmega">[e: {{ errorOmega.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterF: '',
      errorF: 0,
      enterT: '',
      errorT: 0,
      enterOmega: '',
      errorOmega: 0
    }
  },
  computed: {
    frequency: function () {
      console.clear()
      let max = 8
      let min = 5
      return 1e6 * (Math.random() * (max - min + 1) + min)
    },
    period: function () {
      return 1 / this.frequency
    },
    omega: function () {
      return 2 * Math.PI * this.frequency
    },
    errorAngular: function () {
      return Math.abs(this.angular - this.angularFrequency) / this.angularFrequency
    },
    checkedF: function () {
      this.errorF = this.errorRelative('frequency => ', this.frequency, parseFloat(this.enterF))
      return this.errorF < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedT: function () {
      this.errorT = this.errorRelative('Period => ', this.period, parseFloat(this.enterT))
      return this.errorT < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOmega: function () {
      this.errorOmega = this.errorRelative('Angular freq => ', this.omega, parseFloat(this.enterOmega))
      return this.errorOmega < 1e-1 ? 'correct' : 'not-correct'
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
