<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem An X-ray photon whose wavelength is {{ (lambda1 * 1e10).toPrecision(3)}} Å collides with an electron, scattered photons are detected at an angle of {{ theta }}º to its original path. Calculate:<br>a) The electron scattering angle<br> B) The kinetic energy of the electron.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data λ<sub>1</sub> (m)
        input.center.data(:class="checkedLambda1" v-model.number='enterLambda1')
      p.inline.data θ (º)
        input.center.data(:class="checkedTheta" v-model.number='enterTheta')
      p.inline.data λ<sub>2</sub> (m)
        input.center.data(:class="checkedLambda2" v-model.number='enterLambda2')
      p.inline.data φ (º)
        input.center.data(:class="checkedPhi" v-model.number='enterPhi')
      p.inline.data K<sub>e</sub> (J)
        input.center.data(:class="checkedKe" v-model.number='enterKe')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterLambda1: '',
      enterTheta: '',
      enterLambda2: '',
      enterPhi: '',
      enterKe: '',
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
      check = this.lambda1 === parseFloat(this.enterLambda1) ? 'correct' : 'not-correct'
      return check
    },
    checkedTheta: function () {
      let check
      console.log('Theta => ' + this.theta + ' : ' + parseFloat(this.enterTheta))
      check = this.theta === parseFloat(this.enterTheta) ? 'correct' : 'not-correct'
      return check
    },
    checkedLambda2: function () {
      let check
      console.log('Lambda2 => ' + this.lambda2 + ' : ' + parseFloat(this.enterLambda2))
      check = this.lambda2 === parseFloat(this.enterLambda2) ? 'correct' : 'not-correct'
      return check
    },
    checkedPhi: function () {
      let check
      console.log('Phi => ' + this.phi + ' : ' + parseFloat(this.enterPhi))
      check = this.phi === parseFloat(this.enterPhi) ? 'correct' : 'not-correct'
      return check
    },
    checkedKe: function () {
      let check
      console.log('Ke => ' + this.Ke + ' : ' + parseFloat(this.enterKe))
      check = this.Ke === parseFloat(this.enterKe) ? 'correct' : 'not-correct'
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
