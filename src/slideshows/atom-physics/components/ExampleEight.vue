<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Two slits spaced {{ d }} &mu;m apart are placed {{ l }} cm from a screen and illuminated by coherent light with a wavelength of {{ lambda }} nm. The intensity at the center of the central maximum is <br>(a) What is the distance on the screen from the center of the central maximum to the first minimum? <br>(b) What is the distance on the screen from the center of the central maximum to the point where the intensity has fallen to half of I<sub>0</sub>?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data d (m)
        input.center.data(:class="checkedD" v-model.number='enterD')
      p.inline.data L (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
      p.inline.data &lambda; (m)
        input.center.data(:class="checkedLambda" v-model.number='enterLambda')
      p.inline.data a) y (m)
        input.center.data(:class="checkedYa" v-model.number='enterYa')
      p.inline.data b) y (m)
        input.center.data(:class="checkedYb" v-model.number='enterYb')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterD: '',
      enterL: '',
      enterLambda: '',
      enterYa: '',
      enterYb: ''
    }
  },
  computed: {
    d: function () {
      let max = 300
      let min = 100
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    l: function () {
      let max = 150
      let min = 50
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    lambda: function () {
      let max = 700
      let min = 400
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1)
    },
    ya: function () {
      // return parseFloat((this.l * 1e-2 * 0.5 * this.lambda * 1e-9 / (this.d * 1e-6)).toPrecision(3))
      return parseFloat((this.l * 0.5 * this.lambda / this.d).toPrecision(3))
    },
    yb: function () {
      return parseFloat((this.lambda * 1e-9 * this.l * 1e-2 * Math.acos(0.25) / (Math.PI * this.d * 1e-6)).toPrecision(3))
    },
    checkedD: function () {
      let check
      console.log('d => ' + this.d * 1e-6 + ' : ' + parseFloat(this.enterD))
      check = this.d * 1e-6 === parseFloat(this.enterD) ? 'correct' : 'not-correct'
      return check
    },
    checkedL: function () {
      let check
      console.log('L => ' + this.l * 1e-2 + ' : ' + parseFloat(this.enterL))
      check = this.l * 1e-2 === parseFloat(this.enterL) ? 'correct' : 'not-correct'
      return check
    },
    checkedLambda: function () {
      let check
      console.log('lambda => ' + parseFloat((this.lambda * 1e-9).toPrecision(3)) + ' : ' + parseFloat(this.enterLambda))
      check = parseFloat((this.lambda * 1e-9).toPrecision(3)) === parseFloat(this.enterLambda) ? 'correct' : 'not-correct'
      return check
    },
    checkedYa: function () {
      let check
      console.log('a) y => ' + this.ya + ' : ' + parseFloat(this.enterYa))
      check = this.ya === parseFloat(this.enterYa) ? 'correct' : 'not-correct'
      return check
    },
    checkedYb: function () {
      let check
      console.log('b) Y => ' + this.yb + ' : ' + parseFloat(this.enterYb))
      check = this.yb === parseFloat(this.enterYb) ? 'correct' : 'not-correct'
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
