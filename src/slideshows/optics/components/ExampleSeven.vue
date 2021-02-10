<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A viewing screen is separated from a double slit by {{ L }} m. The distance between the two slits is {{ d }} &mu;m. Monochromatic light is directed toward the double slit and forms an interference pattern on the screen. The {{ order }} {{ kindLegend }} fringe is {{ y }} cm from the center line on the screen. <br>a) Determine the wavelength of the light <br>b) Calculate the distance between adjacent bright fringes.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data L (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
      p.inline.data d (m)
        input.center.data(:class="checkedD" v-model.number='enterD')
      p.inline.data Order: m
        input.center.data(:class="checkedM" v-model.number='enterM')
      p.inline.data {{ order  }} fringe position (m)
        input.center.data(:class="checkedY" v-model.number='enterY')
      p.inline.data &lambda; (m)
        input.center.data(:class="checkedLambda" v-model.number='enterLambda')
      p.inline.data adjacent fringes distance (m)
        input.center.data(:class="checkedDy" v-model.number='enterDy')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterL: '',
      enterD: '',
      enterM: '',
      enterY: '',
      enterLambda: '',
      enterDy: '',
      orderList: ['first', 'second', 'third', 'fourth', 'fifth'],
      kindList: ['bright', 'dark']
    }
  },
  computed: {
    L: function () {
      let max = 20
      let min = 10
      return Math.round(10 * Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    d: function () {
      let max = 100
      let min = 10
      return parseFloat((Math.floor(Math.random() * (max - min + 1)) + min)).toPrecision(3)
    },
    y: function () {
      let max = 20
      let min = 1
      return parseFloat(((1 * Math.floor(Math.random() * (max - min + 1)) + min)).toPrecision(3))
    },
    m: function () {
      let max = 5
      let min = 1
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    order: function () {
      return this.orderList[this.m - 1]
    },
    kind: function () {
      return Math.floor(2 * Math.random())
    },
    kindLegend: function () {
      return this.kindList[this.kind]
    },
    lambda: function () {
      // console.log(parseFloat((this.y * this.d / ((this.m + this.kind * 0.5) * this.L)).toPrecision(3)))
      // console.log(parseFloat((this.y * this.d / ((this.m + 0.5) * this.L)).toPrecision(3)))
      // console.log(parseFloat((this.y * this.d / ((this.m) * this.L)).toPrecision(3)))
      return parseFloat((1e-2 * this.y * 1e-6 * this.d / ((this.m + this.kind * 0.5) * this.L)).toPrecision(3))
    },
    dy: function () {
      return (this.L * this.lambda / (this.d * 1e-6))
    },
    checkedL: function () {
      let check
      console.log('L => ' + this.L + ' : ' + parseFloat(this.enterL))
      check = this.L === parseFloat(this.enterL) ? 'correct' : 'not-correct'
      return check
    },
    checkedD: function () {
      let check
      console.log('d => ' + this.d * 1e-6 + ' : ' + parseFloat(this.enterD))
      check = this.d * 1e-6 === parseFloat(this.enterD) ? 'correct' : 'not-correct'
      return check
    },
    checkedM: function () {
      let check
      console.log('m => ' + this.m + ' : ' + parseFloat(this.enterM))
      check = this.m === parseFloat(this.enterM) ? 'correct' : 'not-correct'
      return check
    },
    checkedY: function () {
      let check
      console.log('Y => ' + this.y * 1e-2 + ' : ' + parseFloat(this.enterY))
      check = this.y * 1e-2 === parseFloat(this.enterY) ? 'correct' : 'not-correct'
      return check
    },
    checkedLambda: function () {
      let check
      console.log('lambda => ' + this.lambda + ' : ' + parseFloat(this.enterLambda))
      check = this.lambda === parseFloat(this.enterLambda) ? 'correct' : 'not-correct'
      return check
    },
    checkedDy: function () {
      let check
      console.log('Dy => ' + this.dy + ' : ' + parseFloat(this.enterDy))
      check = this.dy === parseFloat(this.enterDy) ? 'correct' : 'not-correct'
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
