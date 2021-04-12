<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A photon is emitted when a hydrogen atom undergoes a transition from the n = {{ levelUp }} state to the n = {{ levelDown }} state. Calculate
    p.problem (a) the energy in electron volts and Joules,
    p.problem (b) the wavelength, and
    p.problem (c) the frequency of the emitted photon.

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data a) E  (eV)
        input.center.data(:class="checkedE" v-model.number='enterE')
        <span class="error" v-if="errorE">[e: {{ errorE.toPrecision(3) }}%]</span>
      p.inline.data E (J)
        input.center.data(:class="checkedEj" v-model.number='enterEj')
        <span class="error" v-if="errorEj">[e: {{ errorEj.toPrecision(3) }}%]</span>
      p.inline.data b) λ (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
        <span class="error" v-if="errorL">[e: {{ errorL.toPrecision(3) }}%]</span>
      p.inline.data c) f (Hz)
        input.center.data(:class="checkedF" v-model='enterF')
        <span class="error" v-if="errorF">[e: {{ errorF.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterE: '',
      errorE: 0,
      enterEj: '',
      errorEj: 0,
      enterL: '',
      errorL: 0,
      enterF: '',
      errorF: 0,
      e: 1.6e-19,
      h: 6.626e-34,
      c: 3e8
    }
  },
  computed: {
    levelDown: function () {
      let max = 5
      let min = 1
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    levelUp: function () {
      let max = 10
      let min = this.levelDown + 1
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    energyEv: function () {
      return -13.606 * (1 / Math.pow(this.levelUp, 2) - 1 / Math.pow(this.levelDown, 2))
    },
    energyJ: function () {
      return this.energyEv * this.e
    },
    lambda: function () {
      return this.h * this.c / this.energyJ
    },
    frequency: function () {
      return this.energyJ / this.h
    },
    checkedE: function () {
      let check
      console.log('E (eV) => ' + this.energyEv + ' : ' + parseFloat(this.enterE))
      this.errorE = 100 * Math.abs((this.energyEv - parseFloat(this.enterE)) / (this.energyEv + Number.MIN_VALUE))
      console.log('error  ' + this.errorE + ' %')
      check = this.errorE < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedEj: function () {
      let check
      console.log('E (J) => ' + this.energyJ + ' : ' + parseFloat(this.enterEj))
      this.errorEj = 100 * Math.abs((this.energyJ - parseFloat(this.enterEj)) / (this.energyJ + Number.MIN_VALUE))
      console.log('error  ' + this.errorEj + ' %')
      check = this.errorEj < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedL: function () {
      let check
      console.log('λ => ' + this.lambda + ' : ' + parseFloat(this.enterL))
      this.errorL = 100 * Math.abs((this.lambda - parseFloat(this.enterL)) / (this.lambda + Number.MIN_VALUE))
      console.log('error  ' + this.errorL + ' %')
      check = this.errorL < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedF: function () {
      let check
      console.log('Frequency => ' + this.frequency + ' : ' + this.enterF)
      this.errorF = 100 * Math.abs((this.frequency - parseFloat(this.enterF)) / (this.frequency + Number.MIN_VALUE))
      console.log('error  ' + this.errorF + ' %')
      check = this.errorF < 1e-1 ? 'correct' : 'not-correct'
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
