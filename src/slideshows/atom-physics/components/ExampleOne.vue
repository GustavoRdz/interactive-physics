<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem (A) Find the peak wavelength of the blackbody radiation emitted by the human body when the skin temperature is {{ tempA - 273 }}°C.
    p.problem (B) Find the peak wavelength of the blackbody radiation emitted by the tungsten filament of a lightbulb, which operates at {{ tempB }} K.
    p.problem (C) Find the peak wavelength of the blackbody radiation emitted by the Sun, which has a surface temperature of approximately {{ tempC }} K.

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data A) T (K)
        input.center.data(:class="checkedTA" v-model='enterTA')
      p.inline.data A) λ (m)
        input.center.data(:class="checkedA" v-model='enterA')
      p.inline.data B) T (K)
        input.center.data(:class="checkedTB" v-model='enterTB')
      p.inline.data B) λ (m)
        input.center.data(:class="checkedB" v-model='enterB')
      p.inline.data C) T (K)
        input.center.data(:class="checkedTC" v-model='enterTC')
      p.inline.data C) λ (m)
        input.center.data(:class="checkedC" v-model.number='enterC')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterTA: '',
      enterTB: '',
      enterTC: '',
      enterA: '',
      enterB: '',
      enterC: ''
    }
  },
  computed: {
    tempA: function () {
      let max = 39 + 273
      let min = 34 + 273
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1)
    },
    tempB: function () {
      let max = 2500
      let min = 1500
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1)
    },
    tempC: function () {
      let max = 59
      let min = 55
      return 100 * (Math.floor(Math.random() * (max - min + 1)) + min)
    },
    lamA: function () {
      return parseFloat((2.898e-3 / this.tempA).toPrecision(4))
    },
    lamB: function () {
      return parseFloat((2.898e-3 / this.tempB).toPrecision(4))
    },
    lamC: function () {
      return parseFloat((2.898e-3 / this.tempC).toPrecision(4))
    },
    checkedTA: function () {
      let check
      console.log('a) Temperature (K): => ' + this.tempA + ' : ' + parseFloat(this.enterTA))
      check = this.tempA === parseFloat(this.enterTA) ? 'correct' : 'not-correct'
      return check
    },
    checkedA: function () {
      let check
      console.log('A) lambda: => ' + this.lamA + ' : ' + parseFloat(this.enterA))
      check = this.lamA === parseFloat(this.enterA) ? 'correct' : 'not-correct'
      return check
    },
    checkedTB: function () {
      let check
      console.log('a) Temperature (K): => ' + this.tempB + ' : ' + parseFloat(this.enterTB))
      check = this.tempB === parseFloat(this.enterTB) ? 'correct' : 'not-correct'
      return check
    },
    checkedB: function () {
      let check
      console.log('B) lambda: => ' + this.lamB + ' : ' + parseFloat(this.enterB))
      check = this.lamB === parseFloat(this.enterB) ? 'correct' : 'not-correct'
      return check
    },
    checkedTC: function () {
      let check
      console.log('a) Temperature (K): => ' + this.tempC + ' : ' + parseFloat(this.enterTC))
      check = this.tempC === parseFloat(this.enterTC) ? 'correct' : 'not-correct'
      return check
    },
    checkedC: function () {
      let check
      console.log('C) lambda: => ' + this.lamC + ' : ' + parseFloat(this.enterC))
      check = this.lamC === parseFloat(this.enterC) ? 'correct' : 'not-correct'
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
