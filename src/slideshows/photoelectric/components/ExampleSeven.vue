<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem In a scattering experiment, incident photons of {{ e1 }} MeV produce photons scattered at an angle of {{ theta }}º respect to its original trajectory.<br>a) Calculate the energy in MeV of the scattered photons.<br> b) Find the velocity of the electron<br>c) Determine the angle of scattering of the electron
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data E<sub>1</sub> (J)
        input.center.data(:class="checkedE1" v-model.number='enterE1')
        <span class="error" v-if="errorE1">[e: {{ errorE1.toPrecision(3) }}%]</span>
      p.inline.data λ<sub>1</sub> (m)
        input.center.data(:class="checkedLambda1" v-model.number='enterLambda1')
        <span class="error" v-if="errorLambda1">[e: {{ errorLambda1.toPrecision(3) }}%]</span>
      p.inline.data θ (º)
        input.center.data(:class="checkedTheta" v-model.number='enterTheta')
        <span class="error" v-if="errorTheta">[e: {{ errorTheta.toPrecision(3) }}%]</span>
      p.inline.data λ<sub>2</sub> (m)
        input.center.data(:class="checkedLambda2" v-model.number='enterLambda2')
        <span class="error" v-if="errorLambda2">[e: {{ errorLambda2.toPrecision(3) }}%]</span>
      p.inline.data K<sub>e</sub>(J)
        input.center.data(:class="checkedKe" v-model.number='enterKe')
        <span class="error" v-if="errorKe">[e: {{ errorKe.toPrecision(3) }}%]</span>
      p.inline.data v<sub>e</sub> (m/s)
        input.center.data(:class="checkedVe" v-model.number='enterVe')
        <span class="error" v-if="errorVe">[e: {{ errorVe.toPrecision(3) }}%]</span>
      p.inline.data φ (º)
        input.center.data(:class="checkedPhi" v-model.number='enterPhi')
        <span class="error" v-if="errorPhi">[e: {{ errorPhi.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterE1: '',
      errorE1: 0,
      enterLambda1: '',
      errorLambda1: 0,
      enterTheta: '',
      errorTheta: 0,
      enterLambda2: '',
      errorLambda2: 0,
      enterKe: '',
      errorKe: 0,
      enterVe: '',
      errorVe: 0,
      enterPhi: '',
      errorPhi: 0,
      h: 6.626e-34,
      m: 9.1e-31,
      c: 3e8
    }
  },
  computed: {
    e1: function () {
      let max = 10000
      let min = 1000
      return Math.round(Math.random() * (max - min + 1) + min) / 10000
    },
    theta: function () {
      let max = 350
      let min = 10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    e1j: function () {
      return this.e1 * 1e6 * 1.6e-19
    },
    lambda1: function () {
      return this.h * this.c / this.e1j
    },
    lambda2: function () {
      return (this.lambda1 + this.h * (1 - Math.cos(this.theta * Math.PI / 180)) / (this.m * this.c))
    },
    ke: function () {
      return this.h * this.c * (1 / this.lambda1 - 1 / this.lambda2)
    },
    ve: function () {
      return Math.sqrt(2 * this.ke / this.m)
    },
    phi: function () {
      return 180 * Math.atan(this.lambda1 * Math.sin(this.theta * Math.PI / 180) / (this.lambda2 - this.lambda1 * Math.cos(this.lambda1 * Math.PI / 180))) / Math.PI
    },
    checkedE1: function () {
      let check
      console.log('E1 J => ' + this.e1j + ' : ' + parseFloat(this.enterE1))
      this.errorE1 = 100 * Math.abs((this.e1j - parseFloat(this.enterE1)) / (this.e1j + Number.MIN_VALUE))
      console.log('error  ' + this.errorE1 + ' %')
      check = this.errorE1 < 1e-0 ? 'correct' : 'not-correct'
      return check
    },
    checkedLambda1: function () {
      let check
      console.log('λ1 => ' + this.lambda1 + ' : ' + parseFloat(this.enterLambda1))
      this.errorLambda1 = 100 * Math.abs((this.lambda1 - parseFloat(this.enterLambda1)) / (this.lambda1 + Number.MIN_VALUE))
      console.log('error  ' + this.errorLambda1 + ' %')
      check = this.errorLambda1 < 1e-0 ? 'correct' : 'not-correct'
      return check
    },
    checkedTheta: function () {
      let check
      console.log('θ => ' + this.theta + ' : ' + parseFloat(this.enterTheta))
      this.errorTheta = 100 * Math.abs((this.theta - parseFloat(this.enterTheta)) / (this.theta + Number.MIN_VALUE))
      console.log('error  ' + this.errorTheta + ' %')
      check = this.errorTheta < 1e-0 ? 'correct' : 'not-correct'
      return check
    },
    checkedLambda2: function () {
      let check
      console.log('λ2 => ' + this.lambda2 + ' : ' + parseFloat(this.enterLambda2))
      this.errorLambda2 = 100 * Math.abs((this.lambda2 - parseFloat(this.enterLambda2)) / (this.lambda2 + Number.MIN_VALUE))
      console.log('error  ' + this.errorLambda2 + ' %')
      check = this.errorLambda2 < 1e-0 ? 'correct' : 'not-correct'
      return check
    },
    checkedKe: function () {
      let check
      console.log('Ke => ' + this.ke + ' : ' + parseFloat(this.enterKe))
      this.errorKe = 100 * Math.abs((this.ke - parseFloat(this.enterKe)) / (this.ke + Number.MIN_VALUE))
      console.log('error  ' + this.errorKe + ' %')
      check = this.errorKe < 1e-0 ? 'correct' : 'not-correct'
      return check
    },
    checkedVe: function () {
      let check
      console.log('Ve => ' + this.ve + ' : ' + parseFloat(this.enterVe))
      this.errorVe = 100 * Math.abs((this.ve - parseFloat(this.enterVe)) / (this.ve + Number.MIN_VALUE))
      console.log('error  ' + this.errorVe + ' %')
      check = this.errorVe < 1e-0 ? 'correct' : 'not-correct'
      return check
    },
    checkedPhi: function () {
      let check
      console.log('φ => ' + this.phi + ' : ' + parseFloat(this.enterPhi))
      this.errorPhi = 100 * Math.abs((this.phi - parseFloat(this.enterPhi)) / (this.phi + Number.MIN_VALUE))
      console.log('error  ' + this.errorPhi + ' %')
      check = this.errorPhi < 1e-0 ? 'correct' : 'not-correct'
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
