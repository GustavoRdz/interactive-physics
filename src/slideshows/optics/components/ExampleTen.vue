<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Monochromatic light with λ = {{ lambda }}nm is incident normally on a diffraction grating containing {{ N }} grooves per centimeter. Find the angles at which the first-, second- and third-order maxima are observed.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data λ (m)
        input.center.data(:class="checkedLambda" v-model.number='enterLambda')
      p.inline.data N (1/cm)
        input.center.data(:class="checkedN" v-model.number='enterN')
      p.inline.data d (m) 
        input.center.data(:class="checkedD" v-model.number='enterD')
        <span class="error" v-if="errorD">[e: {{ errorD.toPrecision(3) }}%]</span>
      p.inline.data a) θ (º)
        input.center.data(:class="checkedThetaA" v-model.number='enterThetaA')
        <span class="error" v-if="errorThetaA">[e: {{ errorThetaA.toPrecision(3) }}%]</span>
      p.inline.data b) θ (º) 
        input.center.data(:class="checkedThetaB" v-model.number='enterThetaB')
        <span class="error" v-if="errorThetaB">[e: {{ errorThetaB.toPrecision(3) }}%]</span>
      p.inline.data c) θ (º)
        input.center.data(:class="checkedThetaC" v-model.number='enterThetaC')
        <span class="error" v-if="errorThetaC">[e: {{ errorThetaC.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterLambda: '',
      errorLambda: 0,
      enterN: '',
      errorN: 0,
      enterD: '',
      errorD: 0,
      enterThetaA: '',
      errorThetaA: 0,
      enterThetaB: '',
      errorThetaB: 0,
      enterThetaC: '',
      errorThetaC: 0
    }
  },
  computed: {
    lambda: function () {
      let max = 700
      let min = 400
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    N: function () {
      let max = 7000
      let min = 3000
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    d: function () {
      return 1 / this.N
    },
    thetaA: function () {
      return 180 * Math.asin(1 * this.lambda * 1e-9 / (this.d * 1e-2)) / Math.PI
    },
    thetaB: function () {
      return 180 * Math.asin(2 * this.lambda * 1e-9 / (this.d * 1e-2)) / Math.PI
    },
    thetaC: function () {
      return 180 * Math.asin(3 * this.lambda * 1e-9 / (this.d * 1e-2)) / Math.PI
    },
    checkedLambda: function () {
      let check
      console.log('λ => ' + this.lambda * 1e-9 + ' : ' + parseFloat(this.enterLambda))
      this.errorLambda = 100 * Math.abs(this.lambda * 1e-9 - parseFloat(this.enterLambda)) / (this.lambda * 1e-9)
      console.log('error  ' + this.errorLambda + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorLambda < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedN: function () {
      let check
      console.log('N => ' + this.N + ' : ' + parseFloat(this.enterN))
      this.errorN = 100 * Math.abs(this.N - parseFloat(this.enterN)) / (this.N)
      console.log('error  ' + this.errorN + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorN < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedD: function () {
      let check
      console.log('d => ' + this.d * 1e-2 + ' : ' + parseFloat(this.enterD))
      this.errorD = 100 * Math.abs(this.d * 1e-2 - parseFloat(this.enterD)) / (this.d * 1e-2)
      console.log('error  ' + this.errorD + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorD < 1e0 ? 'correct' : 'not-correct'
      return check
    },
    checkedThetaA: function () {
      let check
      console.log('a) theta => ' + this.thetaA + ' : ' + parseFloat(this.enterThetaA))
      this.errorThetaA = 100 * Math.abs(this.thetaA - parseFloat(this.enterThetaA)) / (this.thetaA)
      console.log('error  ' + this.errorThetaA + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorThetaA < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedThetaB: function () {
      let check
      console.log('b) theta => ' + this.thetaB + ' : ' + parseFloat(this.enterThetaB))
      this.errorThetaB = 100 * Math.abs(this.thetaB - parseFloat(this.enterThetaB)) / (this.thetaB)
      console.log('error  ' + this.errorThetaB + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorThetaB < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedThetaC: function () {
      let check
      console.log('c) theta => ' + this.thetaC + ' : ' + parseFloat(this.enterThetaC))
      this.errorThetaC = 100 * Math.abs(this.thetaC - parseFloat(this.enterThetaC)) / (this.thetaC)
      console.log('error  ' + this.errorThetaC + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorThetaC < 1e-1 ? 'correct' : 'not-correct'
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
