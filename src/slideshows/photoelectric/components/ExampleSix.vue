<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem An X-ray photon whose wavelength is {{ (lambda1 * 1e10).toPrecision(3)}} Å collides with an electron, scattered photons are detected at an angle of {{ theta }}º to its original path. Calculate:<br>a) The electron scattering angle<br> B) The kinetic energy of the electron.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data λ<sub>1</sub> (m)
        input.center.data(:class="checkedLambda1" v-model.number='enterLambda1')
        <span class="error" v-if="errorLambda1">[e: {{ errorLambda1.toPrecision(3) }}%]</span>
      p.inline.data θ (º)
        input.center.data(:class="checkedTheta" v-model.number='enterTheta')
        <span class="error" v-if="errorTheta">[e: {{ errorTheta.toPrecision(3) }}%]</span>
      p.inline.data λ<sub>2</sub> (m)
        input.center.data(:class="checkedLambda2" v-model.number='enterLambda2')
        <span class="error" v-if="errorLambda2">[e: {{ errorLambda2.toPrecision(3) }}%]</span>
      p.inline.data φ (º)
        input.center.data(:class="checkedPhi" v-model.number='enterPhi')
        <span class="error" v-if="errorPhi">[e: {{ errorPhi.toPrecision(3) }}%]</span>
      p.inline.data K<sub>e</sub> (J)
        input.center.data(:class="checkedKe" v-model.number='enterKe')
        <span class="error" v-if="errorKe">[e: {{ errorKe.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterLambda1: '',
      errorLambda1: 0,
      enterTheta: '',
      errorTheta: 0,
      enterLambda2: '',
      errorLambda2: 0,
      enterPhi: '',
      errorPhi: 0,
      enterKe: '',
      errorKe: 0,
      h: 6.626e-34,
      m: 9.1e-31,
      c: 3e8
    }
  },
  computed: {
    lambda1: function () {
      let max = 1000
      let min = 100
      return parseFloat((1e-12 * Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100).toPrecision(4))
    },
    theta: function () {
      let max = 350
      let min = 10
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1)
    },
    lambda2: function () {
      return parseFloat((this.lambda1 + this.h * (1 - Math.cos(this.theta * Math.PI / 180)) / (this.m * this.c)).toPrecision(3))
    },
    phi: function () {
      return Math.round(100 * Math.atan(this.lambda1 * Math.sin(this.theta * Math.PI / 180) / (this.lambda2 - this.lambda1 * Math.cos(this.theta * Math.PI / 180))) * 180 / Math.PI) / 100
    },
    Ke: function () {
      return parseFloat((this.h * this.c * (1 / this.lambda1 - 1 / this.lambda2)).toPrecision(3))
    },
    checkedLambda1: function () {
      let check
      console.log('Lambda1 => ' + this.lambda1 + ' : ' + parseFloat(this.enterLambda1))
      this.errorLambda1 = 100 * Math.abs((this.lambda1 - parseFloat(this.enterLambda1)) / this.lambda1)
      console.log('error  ' + this.errorLambda1 + ' %')
      check = this.errorLambda1 < 1e-0 ? 'correct' : 'not-correct'
      return check
    },
    checkedTheta: function () {
      let check
      console.log('Theta => ' + this.theta + ' : ' + parseFloat(this.enterTheta))
      this.errorTheta = 100 * Math.abs((this.theta - parseFloat(this.enterTheta)) / this.theta)
      console.log('error  ' + this.errorTheta + ' %')
      check = this.errorTheta < 1e-0 ? 'correct' : 'not-correct'
      return check
    },
    checkedLambda2: function () {
      let check
      console.log('Lambda2 => ' + this.lambda2 + ' : ' + parseFloat(this.enterLambda2))
      this.errorLambda2 = 100 * Math.abs((this.lambda2 - parseFloat(this.enterLambda2)) / this.lambda2)
      console.log('error  ' + this.errorLambda2 + ' %')
      check = this.errorLambda2 < 1e-0 ? 'correct' : 'not-correct'
      return check
    },
    checkedPhi: function () {
      let check
      console.log('Phi => ' + this.phi + ' : ' + parseFloat(this.enterPhi))
      this.errorPhi = 100 * Math.abs((this.phi - parseFloat(this.enterPhi)) / (this.phi + Number.MIN_VALUE))
      console.log('error  ' + this.errorPhi + ' %')
      check = this.errorPhi < 1e-0 ? 'correct' : 'not-correct'
      return check
    },
    checkedKe: function () {
      let check
      console.log('Ke => ' + this.Ke + ' : ' + parseFloat(this.enterKe))
      this.errorKe = 100 * Math.abs((this.Ke - parseFloat(this.enterKe)) / (this.Ke + Number.MIN_VALUE))
      console.log('error  ' + this.errorKe + ' %')
      check = this.errorKe < 1e-0 ? 'correct' : 'not-correct'
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
