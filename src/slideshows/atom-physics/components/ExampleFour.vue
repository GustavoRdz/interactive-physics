<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The threshold frequency for a certain material is {{ thresholdF.toExponential() }} cycles/s.<br> a) Determine the maximum kinetic energy for photoelectrons when light, whose frequency is {{ frequency.toExponential() }} cycles/s, strikes that material.<br> b) Calculate the stopping potential and<br>c) finally find the maximum velocity of the photoelectrons.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data f<sub>Th</sub> (Hz)
        input.center.data(:class="checkedFTh" v-model.number='enterFTh')
      p.inline.data  φ (J)
        input.center.data(:class="checkedPhi" v-model.number='enterPhi')
      p.inline.data f<sub>photon</sub> (Hz)
        input.center.data(:class="checkedF" v-model.number='enterF')
      p.inline.data E<sub>photon</sub> (J)
        input.center.data(:class="checkedE" v-model='enterE')
      p.inline.data K<sub>max</sub>
        input.center.data(:class="checkedK" v-model='enterK')
      p.inline.data V<sub>0</sub> (volts)
        input.center.data(:class="checkedV0" v-model='enterV0')
      p.inline.data  v<sub>max</sub> (m/s)
        input.center.data(:class="checkedVmax" v-model.number='enterVmax')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterFTh: '',
      enterPhi: '',
      enterF: '',
      enterE: '',
      enterK: '',
      enterV0: '',
      enterVmax: '',
      h: 6.626e-34,
      e: 1.6e-19,
      c: 3e8,
      me: 9.1e-31

    }
  },
  computed: {
    thresholdF: function () {
      let max = 200
      let min = 100
      return 1e15 * Math.round(Math.floor(Math.random() * (max - min + 1) + min)) / 100
    },
    frequency: function () {
      let max = 250
      let min = (this.thresholdF / 1e15) * 10
      return 1e15 * Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    phi: function () {
      return parseFloat((this.h * this.thresholdF).toPrecision(3))
    },
    eF: function () {
      return parseFloat((this.h * this.frequency).toPrecision(4))
    },
    kMax: function () {
      return parseFloat((this.h * (this.frequency - this.thresholdF)).toPrecision(4))
    },
    v0: function () {
      return parseFloat((this.eF / this.e).toPrecision(4))
    },
    ve: function () {
      return parseFloat((Math.sqrt(2 * this.kMax / this.me)).toPrecision(4))
    },
    checkedFTh: function () {
      let check
      console.log('F threshold => ' + this.thresholdF + ' : ' + parseFloat(this.enterFTh))
      check = this.thresholdF === parseFloat(this.enterFTh) ? 'correct' : 'not-correct'
      return check
    },
    checkedPhi: function () {
      let check
      console.log('Phi => ' + this.phi + ' : ' + parseFloat(this.enterPhi))
      check = this.phi === parseFloat(this.enterPhi) ? 'correct' : 'not-correct'
      return check
    },
    checkedF: function () {
      let check
      console.log('frequency => ' + this.frequency + ' : ' + parseFloat(this.enterF))
      check = this.frequency === parseFloat(this.enterF) ? 'correct' : 'not-correct'
      return check
    },
    checkedE: function () {
      let check
      console.log('Efoton => ' + this.eF + ' : ' + parseFloat(this.enterE))
      check = this.eF === parseFloat(this.enterE) ? 'correct' : 'not-correct'
      return check
    },
    checkedK: function () {
      let check
      console.log('Kmax => ' + this.kMax + ' : ' + parseFloat(this.enterK))
      check = this.kMax === parseFloat(this.enterK) ? 'correct' : 'not-correct'
      return check
    },
    checkedV0: function () {
      let check
      console.log('V0 => ' + this.v0 + ' : ' + parseFloat(this.enterV0))
      check = this.v0 === parseFloat(this.enterV0) ? 'correct' : 'not-correct'
      return check
    },
    checkedVmax: function () {
      let check
      console.log('vmax => ' + this.ve + ' : ' + this.enterVmax)
      check = this.ve === this.enterVmax ? 'correct' : 'not-correct'
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
