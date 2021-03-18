<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Two slits spaced {{ d }} &mu;m apart are placed {{ l }} cm from a screen and illuminated by coherent light with a wavelength of {{ lambda }} nm. The intensity at the center of the central maximum is <span>I<sub>0</sub></span><br> (a) What is the distance on the screen from the center of the central maximum to the first minimum? <br>(b) What is the distance on the screen from the center of the central maximum to the point where the intensity has fallen to {{ factor }}% of I<sub>0</sub>?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data d (m)
        input.center.data(:class="checkedD" v-model.number='enterD')
        <span class="error" v-if="errorD">[e: {{ errorD.toPrecision(3) }}%]</span>
      p.inline.data L (m) 
        input.center.data(:class="checkedL" v-model.number='enterL')
        <span class="error" v-if="errorL">[e: {{ errorL.toPrecision(3) }}%]</span>
      p.inline.data &lambda; (m) 
        input.center.data(:class="checkedLambda" v-model.number='enterLambda')
        <span class="error" v-if="errorLambda">[e: {{ errorLambda.toPrecision(3) }}%]</span>
      p.inline.data a) y (m) 
        input.center.data(:class="checkedYa" v-model.number='enterYa')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
      p.inline.data b) y (m)
        input.center.data(:class="checkedYb" v-model.number='enterYb')
        <span class="error" v-if="errorB">[e: {{ errorB.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterD: '',
      errorD: 0,
      enterL: '',
      errorL: 0,
      enterLambda: '',
      errorLambda: 0,
      enterYa: '',
      errorA: 0,
      enterYb: '',
      errorB: 0

    }
  },
  computed: {
    d: function () {
      let max = 300
      let min = 100
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    l: function () {
      let max = 150
      let min = 50
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    lambda: function () {
      let max = 700
      let min = 400
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    factor: function () {
      let max = 85
      let min = 15
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    ya: function () {
      // return parseFloat((this.l * 1e-2 * 0.5 * this.lambda * 1e-9 / (this.d * 1e-6)).toPrecision(3))
      return this.l * 1e-2 * 0.5 * this.lambda * 1e-9 / (this.d * 1e-6)
    },
    yb: function () {
      return this.lambda * 1e-9 * this.l * 1e-2 * Math.acos(Math.sqrt(this.factor / 100)) / (Math.PI * this.d * 1e-6)
    },
    checkedD: function () {
      let check
      console.log('d => ' + this.d * 1e-6 + ' : ' + parseFloat(this.enterD))
      this.errorD = 100 * Math.abs(this.d * 1e-6 - parseFloat(this.enterD)) / (this.d * 1e-6)
      console.log('errorD  ' + this.errorD + ' %')
      check = this.errorD < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedL: function () {
      let check
      console.log('L => ' + this.l * 1e-2 + ' : ' + parseFloat(this.enterL))
      this.errorL = 100 * Math.abs(this.l * 1e-2 - parseFloat(this.enterL)) / (this.l * 1e-2)
      console.log('error  ' + this.errorL + ' %')
      // check = this.l * 1e-2 === parseFloat(this.enterL) ? 'correct' : 'not-correct'
      check = this.errorL < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedLambda: function () {
      let check
      console.log('lambda => ' + parseFloat((this.lambda * 1e-9).toPrecision(3)) + ' : ' + parseFloat(this.enterLambda))
      this.errorLambda = 100 * Math.abs(this.lambda * 1e-9 - parseFloat(this.enterLambda)) / (this.lambda * 1e-9)
      console.log('error  ' + this.errorLambda + ' %')
      check = this.errorLambda < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedYa: function () {
      let check
      console.log('a) y => ' + this.ya + ' : ' + parseFloat(this.enterYa))
      this.errorA = 100 * Math.abs(this.ya - parseFloat(this.enterYa)) / this.ya
      console.log('error  ' + this.errorA + ' %')
      // check = this.ya === parseFloat(this.enterYa) ? 'correct' : 'not-correct'
      check = this.errorA < 1e0 ? 'correct' : 'not-correct'
      return check
    },
    checkedYb: function () {
      let check
      console.log('b) Y => ' + this.yb + ' : ' + parseFloat(this.enterYb))
      this.errorB = 100 * Math.abs(this.yb - parseFloat(this.enterYb)) / this.yb
      console.log('error  ' + this.errorB + ' %')
      // check = this.yb === parseFloat(this.enterYb) ? 'correct' : 'not-correct'
      check = this.errorB < 1e0 ? 'correct' : 'not-correct'
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
    width: 100%;
    max-width: 100%;
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
