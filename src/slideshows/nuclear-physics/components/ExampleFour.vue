<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The isotope carbon-14, <sup style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -20px 0px  10px; color: black;"><b>14</b></sup><sub style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -20px 0px  10px; color: black;"><b>6</b></sub> <span style="font-family: Times; font-style: italic; margin: 0 0 0  15px; color: black;"><b>C</b></span>, is radioactive and has a half-life of {{ halfLife }} years. If you start with a sample of {{ initialSample }} carbon-14 nuclei, how many nuclei will still be undecayed in {{ time }} years?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data N<sub>0</sub>
        input.center.data(:class="checkedN0" v-model='enterN0')
        <span class="error" v-if="errorN0">[e: {{ errorN0.toPrecision(3) }}%]</span>
      p.inline.data λ
        input.center.data(:class="checkedL" v-model.number='enterL')
        <span class="error" v-if="errorL">[e: {{ errorL.toPrecision(3) }}%]</span>
      p.inline.data  T<sub>1/2</sub>
        input.center.data(:class="checkedTh" v-model.number='enterTh')
        <span class="error" v-if="errorTh">[e: {{ errorTh.toPrecision(3) }}%]</span>
      p.inline.data N
        input.center.data(:class="checkedN" v-model.number='enterN')
        <span class="error" v-if="errorN">[e: {{ errorN.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterN0: '',
      errorN0: 0,
      enterL: '',
      errorL: 0,
      enterTh: '',
      errorTh: 0,
      enterN: '',
      errorN: 0
    }
  },
  computed: {
    halfLife: function () {
      console.clear()
      return 5730
    },
    initialSample: function () {
      let max = 2000
      let min = 1000
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    time: function () {
      return 25000
    },
    lambda: function () {
      return 0.693 / this.halfLife
    },
    finalSample: function () {
      return this.initialSample * Math.exp(-this.lambda * this.time)
    },
    checkedN0: function () {
      let check
      console.log('N0 => ' + this.initialSample + ' : ' + parseFloat(this.enterN0))
      this.errorN0 = 100 * Math.abs((this.initialSample - parseFloat(this.enterN0)) / (this.initialSample + Number.MIN_VALUE))
      console.log('error  ' + this.errorN0 + ' %')
      check = this.errorN0 < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedL: function () {
      let check
      console.log('λ => ' + this.lambda + ' : ' + parseFloat(this.enterL))
      this.errorL = 100 * Math.abs((this.lambda - parseFloat(this.enterL)) / (this.lambda + Number.MIN_VALUE))
      console.log('error  ' + this.errorL + ' %')
      check = this.errorL < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedTh: function () {
      let check
      console.log('T1/2 => ' + this.halfLife + ' : ' + parseFloat(this.enterTh))
      this.errorTh = 100 * Math.abs((this.halfLife - parseFloat(this.enterTh)) / (this.halfLife + Number.MIN_VALUE))
      console.log('error  ' + this.errorTh + ' %')
      check = this.errorTh < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedN: function () {
      let check
      console.log('Final sample => ' + this.finalSample + ' : ' + parseFloat(this.enterN))
      this.errorN = 100 * Math.abs((this.finalSample - parseFloat(this.enterN)) / (this.finalSample + Number.MIN_VALUE))
      console.log('error  ' + this.errorN + ' %')
      check = this.errorN < 1e-2 ? 'correct' : 'not-correct'
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
