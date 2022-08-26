<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 0px 0px 0px 0px;").problem Monochromatic light with λ = {{ lambda }}nm is incident normally on a diffraction grating containing {{ N }} grooves per centimeter. Find the angles at which the first-, second- and third-order maxima are observed.
    p(v-if = 'language' style="margin: 0px 0px 0px 0px;").problem La luz monocromática con λ = {{ lambda }} nm incide normalmente en una rejilla de difracción que contiene {{ N }} surcos por centímetro. Encuentre los ángulos en los que se observan los máximos de primer, segundo y tercer orden.
    .center
      p(v-if = '!language' style="margin: 30px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 30px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data λ (m)
        input.center.data(:class="checkedLambda" v-model.number='enterLambda')
        <span class="error" v-if="errorLambda">[e: {{ errorLambda.toPrecision(3) }}%]</span>
      p.inline.data N (1/cm)
        input.center.data(:class="checkedN" v-model.number='enterN')
        <span class="error" v-if="errorN">[e: {{ errorN.toPrecision(3) }}%]</span>
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
  props: {
    language: Boolean
  },
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
      console.clear()
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
      this.errorLambda = this.errorRelative('λ => ', this.lambda * 1e-9, parseFloat(this.enterLambda))
      return this.errorLambda < 1e-3 ? 'correct' : 'not-correct'
    },
    checkedN: function () {
      this.errorN = this.errorRelative('n => ', this.N, parseFloat(this.enterN))
      return this.errorN < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedD: function () {
      this.errorD = this.errorRelative('d => ', this.d * 1e-2, parseFloat(this.enterD))
      return this.errorD < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedThetaA: function () {
      this.errorThetaA = this.errorRelative('a) θ => ', this.thetaA, parseFloat(this.enterThetaA))
      return this.errorThetaA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedThetaB: function () {
      this.errorThetaB = this.errorRelative('b) θ => ', this.thetaB, parseFloat(this.enterThetaB))
      return this.errorThetaB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedThetaC: function () {
      this.errorThetaC = this.errorRelative('c) θ => ', this.thetaC, parseFloat(this.enterThetaC))
      return this.errorThetaC < 1e-1 ? 'correct' : 'not-correct'
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
