<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem (A) Find the peak wavelength of the blackbody radiation emitted by the human body when the skin temperature is {{ tempA - 273.15 }}°C.
    //- p.problem (B) Find the peak wavelength of the blackbody radiation emitted by the tungsten filament of a lightbulb, which operates at {{ tempB }} K.
    //- p.problem (C) Find the peak wavelength of the blackbody radiation emitted by the Sun, which has a surface temperature of approximately {{ tempC }} K.

    p.problem (A) Encuentre la longitud de onda máxima de la radiación del cuerpo negro emitida por el cuerpo humano cuando la temperatura de la piel es {{ tempA - 273.15 }}°C.
    p.problem (B) Encuentre la longitud de onda máxima de la radiación del cuerpo negro emitida por el filamento de tungsteno de una bombilla, que funciona a {{ tempB }} K.
    p.problem (C) Encuentre la longitud de onda máxima de la radiación del cuerpo negro emitida por el Sol, que tiene una temperatura superficial de aproximadamente {{ tempC }} K.

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data a) T (K)
        input.center.data(:class="checkedTA" v-model='enterTA')
        <span class="error" v-if="errorTA">[e: {{ errorTA.toPrecision(3) }}%]</span>
      p.inline.data a) λ (m)
        input.center.data(:class="checkedA" v-model='enterA')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
      p.inline.data b) T (K)
        input.center.data(:class="checkedTB" v-model='enterTB')
        <span class="error" v-if="errorTB">[e: {{ errorTB.toPrecision(3) }}%]</span>
      p.inline.data b) λ (m)
        input.center.data(:class="checkedB" v-model='enterB')
        <span class="error" v-if="errorB">[e: {{ errorB.toPrecision(3) }}%]</span>
      p.inline.data c) T (K)
        input.center.data(:class="checkedTC" v-model='enterTC')
        <span class="error" v-if="errorTC">[e: {{ errorTC.toPrecision(3) }}%]</span>
      p.inline.data c) λ (m)
        input.center.data(:class="checkedC" v-model.number='enterC')
        <span class="error" v-if="errorC">[e: {{ errorC.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterTA: '',
      errorTA: 0,
      enterTB: '',
      errorTB: 0,
      enterTC: '',
      errorTC: 0,
      enterA: '',
      errorA: 0,
      enterB: '',
      errorB: 0,
      enterC: '',
      errorC: 0
    }
  },
  computed: {
    tempA: function () {
      let max = 39
      let min = 34
      return Math.round(Math.random() * (max - min + 1) + min) + 273.15
    },
    tempB: function () {
      let max = 2500
      let min = 1500
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    tempC: function () {
      let max = 59
      let min = 55
      return 100 * (Math.floor(Math.random() * (max - min + 1)) + min)
    },
    lamA: function () {
      return 2.898e-3 / this.tempA
    },
    lamB: function () {
      return 2.898e-3 / this.tempB
    },
    lamC: function () {
      return 2.898e-3 / this.tempC
    },
    checkedTA: function () {
      let check
      console.log('a) Temperature (K): => ' + this.tempA + ' : ' + parseFloat(this.enterTA))
      this.errorTA = 100 * Math.abs(this.tempA - parseFloat(this.enterTA)) / (this.tempA)
      console.log('error  ' + this.errorTA + ' %')
      check = this.errorTA < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedA: function () {
      let check
      console.log('a) lambda: => ' + this.lamA + ' : ' + parseFloat(this.enterA))
      this.errorA = 100 * Math.abs(this.lamA - parseFloat(this.enterA)) / (this.lamA)
      console.log('error  ' + this.errorA + ' %')
      check = this.errorA < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedTB: function () {
      let check
      console.log('b) Temperature (K): => ' + this.tempB + ' : ' + parseFloat(this.enterTB))
      this.errorTB = 100 * Math.abs(this.tempB - parseFloat(this.enterTB)) / (this.tempB)
      console.log('error  ' + this.errorTB + ' %')
      check = this.errorTB < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedB: function () {
      let check
      console.log('b) lambda: => ' + this.lamB + ' : ' + parseFloat(this.enterB))
      this.errorB = 100 * Math.abs(this.lamB - parseFloat(this.enterB)) / this.lamB
      console.log('error  ' + this.errorB + ' %')
      check = this.errorB < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedTC: function () {
      let check
      console.log('c) Temperature (K): => ' + this.tempC + ' : ' + parseFloat(this.enterTC))
      this.errorTC = 100 * Math.abs(this.tempC - parseFloat(this.enterTC)) / (this.tempC)
      console.log('error  ' + this.errorTC + ' %')
      check = this.errorTC < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedC: function () {
      let check
      console.log('b) lambda: => ' + this.lamC + ' : ' + parseFloat(this.enterC))
      this.errorC = 100 * Math.abs(this.lamC - parseFloat(this.enterC)) / this.lamC
      console.log('error  ' + this.errorC + ' %')
      check = this.errorC < 1e-1 ? 'correct' : 'not-correct'
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
  margin: auto;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  color: blue;
  width: 70%;
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
