<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    div(class="container" style="display: flex; flex-direction: column;")
      div(style="display: flex; flex-direction: row; height: 100%;  align-items: center;")
        div(style="flex-shrink: 4;")
          p.problem The Balmer series for the hydrogen atom corresponds to electronic transitions that terminate in the state with quantum number n = 2 as shown. Consider the photon of longest wavelength corresponding to a transition shown in the figure.
          p.problem Determine (a) its energy and (b) its wavelength.
          p.problem Consider the spectral line of shortest wavelength corresponding to a transition shown in the figure.
          p.problem Find (c) its photon energy and (d) its wavelength. (e) What is the shortest possible wavelength in the Balmer series?
        div(style="flex-shrink: 3;")
          .center
            img(src='../assets/balmerSeries.png' width="700px;")
      div(style="align-content: center;")
        .center
          p.solution Please do calculations and introduce your results
          p.inline.data a) E (eV)
            input.center.data(:class="checkedEeV1" v-model.number='enterEeV1')
          p.inline.data E (J)
            input.center.data(:class="checkedEj1" v-model.number='enterEj1')
          p.inline.data b) λ (m)
            input.center.data(:class="checkedL1" v-model.number='enterL1')
          p.inline.data c) E (eV)
            input.center.data(:class="checkedEeV2" v-model.number='enterEeV2')
          p.inline.data E (J)
            input.center.data(:class="checkedEj2" v-model.number='enterEj2')
          p.inline.data d) λ (m)
            input.center.data(:class="checkedL2" v-model='enterL2')
          p.inline.data e) λ<sub>short</sub> (m)
            input.center.data(:class="checkedLs" v-model='enterLs')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterEeV1: '',
      enterEj1: '',
      enterL1: '',
      enterEeV2: '',
      enterEj2: '',
      enterL2: '',
      enterLs: '',
      h: 6.626e-34,
      e: 1.6e-19,
      c: 3e8,
      el2: 3.401
    }
  },
  computed: {
    eEv1: function () {
      console.clear()
      return Math.round(1000 * 13.606 * (1 / 4 - 1 / 9)) / 1000
    },
    eJ1: function () {
      return parseFloat((this.eEv1 * this.e).toPrecision(4))
    },
    lambda1: function () {
      return parseFloat((this.h * this.c / this.eJ1).toPrecision(4))
    },
    eEv2: function () {
      return Math.round(1000 * 13.606 * (1 / 4 - 1 / 36)) / 1000
    },
    eJ2: function () {
      return parseFloat((this.eEv2 * this.e).toPrecision(4))
    },
    lambda2: function () {
      return parseFloat((this.h * this.c / this.eJ2).toPrecision(4))
    },
    lambdaS: function () {
      return parseFloat((this.h * this.c / (this.el2 * this.e)).toPrecision(4))
    },
    checkedEeV1: function () {
      let check
      console.log('a) E (eV) => ' + this.eEv1 + ' : ' + parseFloat(this.enterEeV1))
      check = this.eEv1 === parseFloat(this.enterEeV1) ? 'correct' : 'not-correct'
      return check
    },
    checkedEj1: function () {
      let check
      console.log('   E (J) => ' + this.eJ1 + ' : ' + parseFloat(this.enterEj1))
      check = this.eJ1 === parseFloat(this.enterEj1) ? 'correct' : 'not-correct'
      return check
    },
    checkedL1: function () {
      let check
      console.log('b) λ => ' + this.lambda1 + ' : ' + parseFloat(this.enterL1))
      check = this.lambda1 === parseFloat(this.enterL1) ? 'correct' : 'not-correct'
      return check
    },
    checkedEeV2: function () {
      let check
      console.log('c) E (eV) => ' + this.eEv2 + ' : ' + parseFloat(this.enterEeV2))
      check = this.eEv2 === parseFloat(this.enterEeV2) ? 'correct' : 'not-correct'
      return check
    },
    checkedEj2: function () {
      let check
      console.log('   E (J) => ' + this.eJ2 + ' : ' + parseFloat(this.enterEj2))
      check = this.eJ2 === parseFloat(this.enterEj2) ? 'correct' : 'not-correct'
      return check
    },
    checkedL2: function () {
      let check
      console.log('d) λ => ' + this.lambda2 + ' : ' + parseFloat(this.enterL2))
      check = this.lambda2 === parseFloat(this.enterL2) ? 'correct' : 'not-correct'
      return check
    },
    checkedLs: function () {
      let check
      console.log('e) λs => ' + this.lambdaS + ' : ' + parseFloat(this.enterLs))
      check = this.lambdaS === parseFloat(this.enterLs) ? 'correct' : 'not-correct'
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
