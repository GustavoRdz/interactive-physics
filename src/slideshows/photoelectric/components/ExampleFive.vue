<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem If the work function of a given material is {{ work }} eV, what is the maximum kinetic energy of electrons ejected from a polished surface of that material by the {{ (wavelength * 1e10).toPrecision(4) }} Å ultraviolet line of mercury (1Å = 10<sup>-10</sup> m). Also determine the maximum speed and stopping potential.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data φ (J)
        input.center.data(:class="checkedPhi" v-model.number='enterPhi')
        <span class="error" v-if="errorPhi">[e: {{ errorPhi.toPrecision(3) }}%]</span>
      p.inline.data  λ (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
        <span class="error" v-if="errorL">[e: {{ errorL.toPrecision(3) }}%]</span>
      p.inline.data K<sub>max</sub> (J)
        input.center.data(:class="checkedKmax" v-model.number='enterKmax')
        <span class="error" v-if="errorKmax">[e: {{ errorKmax.toPrecision(3) }}%]</span>
      p.inline.data v<sub>max</sub> (m/s)
        input.center.data(:class="checkedVmax" v-model='enterVmax')
        <span class="error" v-if="errorVmax">[e: {{ errorVmax.toPrecision(3) }}%]</span>
      p.inline.data V<sub>0</sub> (volts)
        input.center.data(:class="checkedV0" v-model='enterV0')
        <span class="error" v-if="errorV0" >[e: {{ errorV0.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterPhi: '',
      errorPhi: 0,
      enterL: '',
      errorL: 0,
      enterKmax: '',
      errorKmax: 0,
      enterVmax: '',
      errorVmax: 0,
      enterV0: '',
      errorV0: 100,
      h: 6.626e-34,
      e: 1.6e-19,
      c: 3e8,
      me: 9.1e-31
    }
  },
  computed: {
    work: function () {
      let max = 500
      let min = 400
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    wavelength: function () {
      let max = 3000
      let min = 2000
      return Math.round(Math.random() * (max - min + 1) + min) * 1e-10
    },
    phi: function () {
      return this.work * this.e
    },
    kMax: function () {
      return this.h * this.c / this.wavelength - this.phi
    },
    vMax: function () {
      let v = Math.sqrt(2 * this.kMax / this.me)
      return v > 0 ? v : 0
    },
    v0: function () {
      let v = this.kMax / this.e
      return v > 0 ? v : 0
    },
    checkedPhi: function () {
      let check
      console.log('phi => ' + this.phi + ' : ' + parseFloat(this.enterPhi))
      this.errorPhi = 100 * Math.abs((this.phi - parseFloat(this.enterPhi)) / this.phi)
      console.log('error  ' + this.errorPhi + ' %')
      check = this.errorPhi < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedL: function () {
      let check
      console.log('λ => ' + this.wavelength + ' : ' + parseFloat(this.enterL))
      this.errorL = 100 * Math.abs((this.wavelength - parseFloat(this.enterL)) / this.wavelength)
      console.log('error  ' + this.errorL + ' %')
      check = this.errorL < 1e-5 ? 'correct' : 'not-correct'
      return check
    },
    checkedKmax: function () {
      let check
      console.log('Kmax => ' + this.kMax + ' : ' + parseFloat(this.enterKmax))
      this.errorKmax = 100 * Math.abs((this.kMax - parseFloat(this.enterKmax)) / (this.kMax + Number.MIN_VALUE))
      console.log('error  ' + this.errorKmax + ' %')
      check = this.errorKmax < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedVmax: function () {
      let check
      console.log('vmax => ' + this.vMax + ' : ' + parseFloat(this.enterVmax))
      this.errorVmax = 100 * Math.abs(this.vMax - parseFloat(this.enterVmax)) / (this.vMax + Number.MIN_VALUE)
      console.log('error  ' + this.errorVmax + ' %')
      check = this.errorVmax < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedV0: function () {
      let check
      console.log('V0 => ' + this.v0 + ' : ' + parseFloat(this.enterV0))
      this.errorV0 = 100 * Math.abs((this.v0 - parseFloat(this.enterV0)) / (this.v0 + Number.MIN_VALUE))
      console.log('error  ' + this.errorV0 + ' %')
      check = this.errorV0 < 1e-0 ? 'correct' : 'not-correct'
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
