<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem In a scattering experiment, incident photons of {{ e1 }} MeV produce photons scattered at an angle of {{ theta }}º respect to its original trajectory.<br>a) Calculate the energy in MeV of the scattered photons.<br> b) Find the velocity of the electron<br>c) Determine the angle of scattering of the electron
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data E<sub>1</sub> (J)
        input.center.data(:class="checkedE1" v-model.number='enterE1')
      p.inline.data λ<sub>1</sub> (m)
        input.center.data(:class="checkedLambda1" v-model.number='enterLambda1')
      p.inline.data θ (º)
        input.center.data(:class="checkedTheta" v-model.number='enterTheta')
      p.inline.data λ<sub>2</sub> (m)
        input.center.data(:class="checkedLambda2" v-model.number='enterLambda2')
      p.inline.data K<sub>e</sub>(J)
        input.center.data(:class="checkedKe" v-model.number='enterKe')
      p.inline.data v<sub>e</sub> (m/s)
        input.center.data(:class="checkedVe" v-model.number='enterVe')
      p.inline.data φ (º)
        input.center.data(:class="checkedPhi" v-model.number='enterPhi')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterE1: '',
      enterLambda1: '',
      enterTheta: '',
      enterLambda2: '',
      enterKe: '',
      enterVe: '',
      enterPhi: '',
      h: 6.626e-34,
      m: 9.1e-31,
      c: 3e8
    }
  },
  computed: {
    e1: function () {
      let max = 10000
      let min = 1000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 10000
    },
    theta: function () {
      let max = 350
      let min = 10
      return parseFloat((Math.floor(Math.random() * (max - min + 1)) + min).toPrecision(4))
    },
    e1j: function () {
      return parseFloat((this.e1 * 1e6 * 1.6e-19).toPrecision(4))
    },
    lambda1: function () {
      return parseFloat((this.h * this.c / this.e1j).toPrecision(4))
    },
    lambda2: function () {
      return parseFloat((this.lambda1 + this.h * (1 - Math.cos(this.theta * Math.PI / 180)) / (this.m * this.c)).toPrecision(4))
    },
    ke: function () {
      return parseFloat((this.h * this.c * (1 / this.lambda1 - 1 / this.lambda2)).toPrecision(4))
    },
    ve: function () {
      return Math.round(1000 * Math.sqrt(2 * this.ke / this.m)) / 1000
    },
    phi: function () {
      return parseFloat((this.lambda1 * Math.sin(this.theta * Math.PI / 180) / (this.lambda2 - this.lambda1 * Math.cos(this.lambda1 * Math.PI / 180))).toPrecision(3))
    },
    checkedE1: function () {
      let check
      console.log('E1 J => ' + this.e1j + ' : ' + parseFloat(this.enterE1))
      check = this.e1j === parseFloat(this.enterE1) ? 'correct' : 'not-correct'
      return check
    },
    checkedLambda1: function () {
      let check
      console.log('λ1 => ' + this.lambda1 + ' : ' + parseFloat(this.enterLambda1))
      check = this.lambda1 === parseFloat(this.enterLambda1) ? 'correct' : 'not-correct'
      return check
    },
    checkedTheta: function () {
      let check
      console.log('θ => ' + this.theta + ' : ' + parseFloat(this.enterTheta))
      check = this.theta === parseFloat(this.enterTheta) ? 'correct' : 'not-correct'
      return check
    },
    checkedLambda2: function () {
      let check
      console.log('λ2 => ' + this.lambda2 + ' : ' + parseFloat(this.enterLambda2))
      check = this.lambda2 === parseFloat(this.enterLambda2) ? 'correct' : 'not-correct'
      return check
    },
    checkedKe: function () {
      let check
      console.log('Ke => ' + this.ke + ' : ' + parseFloat(this.enterKe))
      check = this.ke === parseFloat(this.enterKe) ? 'correct' : 'not-correct'
      return check
    },
    checkedVe: function () {
      let check
      console.log('Ve => ' + this.ve + ' : ' + parseFloat(this.enterVe))
      check = this.ve === parseFloat(this.enterVe) ? 'correct' : 'not-correct'
      return check
    },
    checkedPhi: function () {
      let check
      console.log('φ => ' + this.phi + ' : ' + parseFloat(this.enterPhi))
      check = this.phi === parseFloat(this.enterPhi) ? 'correct' : 'not-correct'
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
