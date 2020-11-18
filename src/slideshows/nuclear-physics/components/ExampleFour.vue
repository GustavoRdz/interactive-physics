<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The isotope carbon-14, <sup style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -20px 0px  10px"><b>14</b></sup><sub style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -20px 0px  10px"><b>6</b></sub> <span style="font-family: Times; font-style: italic; margin: 0 0 0  15px"><b>C</b></span>, is radioactive and has a half-life of {{ halfLife }} years. If you start with a sample of {{ initialSample }} carbon-14 nuclei, how many nuclei will still be undecayed in {{ time }} years?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data N<sub>0</sub>
        input.center.data(:class="checkedN0" v-model='enterN0')
      p.inline.data λ
        input.center.data(:class="checkedL" v-model.number='enterL')
      p.inline.data  T<sub>1/2</sub>
        input.center.data(:class="checkedTh" v-model.number='enterTh')
      p.inline.data N
        input.center.data(:class="checkedN" v-model.number='enterN')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterN0: '',
      enterL: '',
      enterTh: '',
      enterN: ''
    }
  },
  computed: {
    halfLife: function () {
      return 5730
    },
    initialSample: function () {
      let max = 2000
      let min = 1000
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    time: function () {
      return 25000
    },
    lambda: function () {
      return parseFloat((0.693 / this.halfLife).toPrecision(4))
    },
    finalSample: function () {
      return parseFloat((this.initialSample * Math.exp(-this.lambda * this.time)).toPrecision(4))
    },
    checkedN0: function () {
      let check
      console.log('N0 => ' + this.initialSample + ' : ' + parseFloat(this.enterN0))
      check = this.initialSample === parseFloat(this.enterN0) ? 'correct' : 'not-correct'
      return check
    },
    checkedL: function () {
      let check
      console.log('λ => ' + this.lambda + ' : ' + parseFloat(this.enterL))
      check = this.lambda === parseFloat(this.enterL) ? 'correct' : 'not-correct'
      return check
    },
    checkedTh: function () {
      let check
      console.log('T1/2 => ' + this.halfLife + ' : ' + parseFloat(this.enterTh))
      check = this.halfLife === parseFloat(this.enterTh) ? 'correct' : 'not-correct'
      return check
    },
    checkedN: function () {
      let check
      console.log('Final sample => ' + this.finalSample + ' : ' + parseFloat(this.enterN))
      check = this.finalSample === parseFloat(this.enterN) ? 'correct' : 'not-correct'
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
