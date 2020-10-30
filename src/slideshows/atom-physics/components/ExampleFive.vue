<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem If the work function of a given material is {{ work }} eV, what is the maximum kinetic energy of electrons ejected from a polished surface of that material by the {{ wavelength }} Å ultraviolet line of mercury (1Å = 10<sup>-10</sup> m). Also determine the maximum speed and stopping potential.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data φ (J)
        input.center.data(:class="checkedPhi" v-model.number='enterPhi')
      p.inline.data  λ (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
      p.inline.data K<sub>max</sub> (J)
        input.center.data(:class="checkedKmax" v-model.number='enterKmax')
      p.inline.data v<sub>max</sub> (m/s)
        input.center.data(:class="checkedVmax" v-model='enterVmax')
      p.inline.data V<sub>0</sub> (volts)
        input.center.data(:class="checkedV0" v-model='enterV0')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterPhi: '',
      enterL: '',
      enterKmax: '',
      enterVmax: '',
      enterV0: '',
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
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    phi: function () {
      return parseFloat((this.work * this.e).toPrecision(4))
    },
    kMax: function () {
      return parseFloat((this.h * this.c / (this.wavelength * 1e-10) - this.phi).toPrecision(4))
    },
    vMax: function () {
      return parseFloat((Math.sqrt(2 * this.kMax / this.me)).toPrecision(4))
    },
    v0: function () {
      return parseFloat((this.kMax / this.e).toPrecision(4))
    },
    checkedPhi: function () {
      let check
      console.log('phi => ' + this.phi + ' : ' + parseFloat(this.enterPhi))
      check = this.phi === parseFloat(this.enterPhi) ? 'correct' : 'not-correct'
      return check
    },
    checkedL: function () {
      let check
      console.log('λ => ' + this.wavelength * 1e-10 + ' : ' + parseFloat(this.enterL))
      check = this.wavelength * 1e-10 === parseFloat(this.enterL) ? 'correct' : 'not-correct'
      return check
    },
    checkedKmax: function () {
      let check
      console.log('Kmax => ' + this.kMax + ' : ' + parseFloat(this.enterKmax))
      check = this.kMax === parseFloat(this.enterKmax) ? 'correct' : 'not-correct'
      return check
    },
    checkedVmax: function () {
      let check
      console.log('vmax => ' + this.vMax + ' : ' + parseFloat(this.enterVmax))
      check = this.vMax === parseFloat(this.enterVmax) ? 'correct' : 'not-correct'
      return check
    },
    checkedV0: function () {
      let check
      console.log('V0 => ' + this.v0 + ' : ' + parseFloat(this.enterV0))
      check = this.v0 === parseFloat(this.enterV0) ? 'correct' : 'not-correct'
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
