<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A {{ h1 }}-cm-tall object is {{ p1 }} cm to the left of a converging lens of focal length {{ f1 }} cm. A second converging lens, this one having a focal length of {{ f2 }} cm, is located {{ distance }} cm to the right of the first lens along the same optic axis. Find the location, height and magnification of the final image.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data h<sub>1</sub> (cm)
        input.center.data(:class="checkedH1" v-model.number='enterH1')
      p.inline.data p<sub>1</sub> (cm)
        input.center.data(:class="checkedP1" v-model.number='enterP1')
      p.inline.data q<sub>1</sub> (cm)
        input.center.data(:class="checkedQ1" v-model.number='enterQ1')
      p.inline.data M<sub>1</sub>
        input.center.data(:class="checkedM1" v-model.number='enterM1')
      p.inline.data h'<sub>1</sub> (cm)
        input.center.data(:class="checkedH11" v-model.number='enterH11')
      p.inline.data distance between lenses (cm)
        input.center.data(:class="checkedDistance" v-model.number='enterDistance')
      .center
      p.inline.data h<sub>2</sub> (cm)
        input.center.data(:class="checkedH2" v-model.number='enterH2')
      p.inline.data p<sub>2</sub> (cm)
        input.center.data(:class="checkedP2" v-model.number='enterP2')
      p.inline.data q<sub>2</sub> (cm)
        input.center.data(:class="checkedQ2" v-model.number='enterQ2')
      p.inline.data M<sub>2</sub>
        input.center.data(:class="checkedM2" v-model.number='enterM2')
      p.inline.data h<sub>2</sub> (cm)
        input.center.data(:class="checkedH21" v-model.number='enterH21')
      p.inline.data M<sub>T</sub>
        input.center.data(:class="checkedMt" v-model.number='enterMt')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterH1: '',
      enterH11: '',
      enterH2: '',
      enterH21: '',
      enterP1: '',
      enterP2: '',
      enterQ1: '',
      enterQ2: '',
      enterM1: '',
      enterM2: '',
      enterDistance: '',
      enterMt: ''
    }
  },
  computed: {
    h1: function () {
      let max = 30
      let min = 10
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    p1: function () {
      let max = 3 * this.f1
      let min = 3 * this.f1 / 2
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1)
    },
    f1: function () {
      let max = 50
      let min = 30
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1)
    },
    f2: function () {
      let max = 2 * this.f1
      let min = 3 * this.f1 / 2
      console.log('min: ' + min)
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1)
    },
    distance: function () {
      let max = 3 * this.f1
      let min = 2 * this.f1
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1)
    },
    q1: function () {
      return Math.round(1000 * this.p1 * this.f1 / (this.p1 - this.f1)) / 1000
    },
    m1: function () {
      return Math.round(1000 * -this.q1 / this.p1) / 1000
    },
    h11: function () {
      return parseFloat((this.m1 * this.h1).toPrecision(3))
    },
    p2: function () {
      return parseFloat((this.distance - this.q1).toPrecision(3))
    },
    q2: function () {
      return parseFloat((this.p2 * this.f2 / (this.p2 - this.f2)).toPrecision(3))
    },
    m2: function () {
      return parseFloat((-this.q2 / this.p2).toPrecision(3))
    },
    h21: function () {
      return parseFloat((this.m2 * this.h11).toPrecision(3))
    },
    mt: function () {
      return parseFloat((this.m1 * this.m2).toPrecision(3))
    },
    checkedH1: function () {
      let check
      console.log('H1 => ' + this.h1 + ' : ' + parseFloat(this.enterH1))
      check = this.h1 === parseFloat(this.enterH1) ? 'correct' : 'not-correct'
      return check
    },
    checkedP1: function () {
      let check
      console.log('P1 => ' + this.p1 + ' : ' + parseFloat(this.enterP1))
      check = this.p1 === parseFloat(this.enterP1) ? 'correct' : 'not-correct'
      return check
    },
    checkedQ1: function () {
      let check
      console.log('Q1 => ' + this.q1 + ' : ' + parseFloat(this.enterQ1))
      check = this.q1 === parseFloat(this.enterQ1) ? 'correct' : 'not-correct'
      return check
    },
    checkedM1: function () {
      let check
      console.log('M1 => ' + this.m1 + ' : ' + parseFloat(this.enterM1))
      check = this.m1 === parseFloat(this.enterM1) ? 'correct' : 'not-correct'
      return check
    },
    checkedH11: function () {
      let check
      console.log('H11 => ' + this.h11 + ' : ' + parseFloat(this.enterH11))
      check = this.h11 === parseFloat(this.enterH11) ? 'correct' : 'not-correct'
      return check
    },
    checkedDistance: function () {
      let check
      console.log('distance => ' + this.distance + ' : ' + parseFloat(this.enterDistance))
      check = this.distance === parseFloat(this.enterDistance) ? 'correct' : 'not-correct'
      return check
    },
    checkedH2: function () {
      let check
      console.log('H2 => ' + this.h11 + ' : ' + parseFloat(this.enterH2))
      check = this.h11 === parseFloat(this.enterH2) ? 'correct' : 'not-correct'
      return check
    },
    checkedP2: function () {
      let check
      console.log('P2 => ' + this.p2 + ' : ' + parseFloat(this.enterP2))
      check = this.p2 === parseFloat(this.enterP2) ? 'correct' : 'not-correct'
      return check
    },
    checkedQ2: function () {
      let check
      console.log('Q2 => ' + this.q2 + ' : ' + parseFloat(this.enterQ2))
      check = this.q2 === parseFloat(this.enterQ2) ? 'correct' : 'not-correct'
      return check
    },
    checkedM2: function () {
      let check
      console.log('M2 => ' + this.m2 + ' : ' + parseFloat(this.enterM2))
      check = this.m2 === parseFloat(this.enterM2) ? 'correct' : 'not-correct'
      return check
    },
    checkedH21: function () {
      let check
      console.log('H2 => ' + this.h2 + ' : ' + parseFloat(this.enterH2))
      check = this.h2 === parseFloat(this.enterH2) ? 'correct' : 'not-correct'
      return check
    },
    checkedMt: function () {
      let check
      console.log('Mt => ' + this.mt + ' : ' + parseFloat(this.enterMt))
      check = this.mt === parseFloat(this.enterMt) ? 'correct' : 'not-correct'
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
