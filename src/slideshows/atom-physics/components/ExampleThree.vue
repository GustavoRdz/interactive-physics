<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    div(class="container" style="display: flex; flex-direction: column;")
      div(style="display: flex; flex-direction: row; height: 100%;  align-items: center;")
        div(style="flex-shrink: 4;")
          p.problem The Balmer series for the hydrogen atom corresponds to electronic transitions that terminate in the state with quantum number n = 2 as shown.
          p(style="color: #447304; margin-top: 10px;").problem Consider the photon of longest wavelength corresponding to a transition shown in the figure.
          p.problem Determine (a) its energy and (b) its wavelength.
          p(style="color: #447304; margin-top: 10px;").problem Consider the spectral line of shortest wavelength corresponding to a transition shown in the figure.
          p.problem Find (c) its photon energy and (d) its wavelength. (e) What is the shortest possible wavelength in the Balmer series?
        div(style="flex-shrink: 3;")
          .center
            img(src='../assets/balmerSeries.png' width="700px;")
      div(style="align-content: center; ")
        .center
          p.solution Please do calculations and introduce your results
          p.inline.data a) E (eV)
            input.center.data(:class="checkedEeV1" v-model.number='enterEeV1')
            <span class="error" v-if="errorEeV1">[e: {{ errorEeV1.toPrecision(3) }}%]</span>
          p.inline.data E (J)
            input.center.data(:class="checkedEj1" v-model.number='enterEj1')
            <span class="error" v-if="errorEj1">[e: {{ errorEj1.toPrecision(3) }}%]</span>
          p.inline.data b) λ (m)
            input.center.data(:class="checkedL1" v-model.number='enterL1')
            <span class="error" v-if="errorL1">[e: {{ errorL1.toPrecision(3) }}%]</span>
          p.inline.data c) E (eV)
            input.center.data(:class="checkedEeV2" v-model.number='enterEeV2')
            <span class="error" v-if="errorEeV2">[e: {{ errorEeV2.toPrecision(3) }}%]</span>
          p.inline.data E (J)
            input.center.data(:class="checkedEj2" v-model.number='enterEj2')
            <span class="error" v-if="errorEj2">[e: {{ errorEj2.toPrecision(3) }}%]</span>
          p.inline.data d) λ (m)
            input.center.data(:class="checkedL2" v-model='enterL2')
            <span class="error" v-if="errorL2">[e: {{ errorL2.toPrecision(3) }}%]</span>
          p.inline.data e) λ<sub>short</sub> (m)
            input.center.data(:class="checkedLs" v-model='enterLs')
            <span class="error" v-if="errorLs">[e: {{ errorLs.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterEeV1: '',
      errorEeV1: 0,
      enterEj1: '',
      errorEj1: 0,
      enterL1: '',
      errorL1: 0,
      enterEeV2: '',
      errorEeV2: 0,
      enterEj2: '',
      errorEj2: 0,
      enterL2: '',
      errorL2: 0,
      enterLs: '',
      errorLs: 0,
      h: 6.626e-34,
      e: 1.6e-19,
      c: 3e8,
      el2: 3.401
    }
  },
  computed: {
    eEv1: function () {
      console.clear()
      return 13.606 * (1 / 4 - 1 / 9)
    },
    eJ1: function () {
      return this.eEv1 * this.e
    },
    lambda1: function () {
      return this.h * this.c / this.eJ1
    },
    eEv2: function () {
      return 13.606 * (1 / 4 - 1 / 36)
    },
    eJ2: function () {
      return this.eEv2 * this.e
    },
    lambda2: function () {
      return this.h * this.c / this.eJ2
    },
    lambdaS: function () {
      return this.h * this.c / (this.el2 * this.e)
    },
    checkedEeV1: function () {
      let check
      console.log('a) E (eV) => ' + this.eEv1 + ' : ' + parseFloat(this.enterEeV1))
      this.errorEeV1 = 100 * Math.abs((this.eEv1 - parseFloat(this.enterEeV1)) / (this.eEv1 + Number.MIN_VALUE))
      console.log('error  ' + this.errorEeV1 + ' %')
      check = this.errorEeV1 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedEj1: function () {
      let check
      console.log('   E (J) => ' + this.eJ1 + ' : ' + parseFloat(this.enterEj1))
      this.errorEj1 = 100 * Math.abs((this.eJ1 - parseFloat(this.enterEj1)) / (this.eJ1 + Number.MIN_VALUE))
      console.log('error  ' + this.errorEj1 + ' %')
      check = this.errorEj1 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedL1: function () {
      let check
      console.log('b) λ => ' + this.lambda1 + ' : ' + parseFloat(this.enterL1))
      this.errorL1 = 100 * Math.abs((this.lambda1 - parseFloat(this.enterL1)) / (this.lambda1 + Number.MIN_VALUE))
      console.log('error  ' + this.errorL1 + ' %')
      check = this.errorL1 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedEeV2: function () {
      let check
      console.log('c) E (eV) => ' + this.eEv2 + ' : ' + parseFloat(this.enterEeV2))
      this.errorEeV2 = 100 * Math.abs((this.eEv2 - parseFloat(this.enterEeV2)) / (this.eEv2 + Number.MIN_VALUE))
      console.log('error  ' + this.errorEeV2 + ' %')
      check = this.errorEeV2 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedEj2: function () {
      let check
      console.log('   E (J) => ' + this.eJ2 + ' : ' + parseFloat(this.enterEj2))
      this.errorEj2 = 100 * Math.abs((this.eJ2 - parseFloat(this.enterEj2)) / (this.eJ2 + Number.MIN_VALUE))
      console.log('error  ' + this.errorEj2 + ' %')
      check = this.errorEj2 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedL2: function () {
      let check
      console.log('d) λ => ' + this.lambda2 + ' : ' + parseFloat(this.enterL2))
      this.errorL2 = 100 * Math.abs((this.lambda2 - parseFloat(this.enterL2)) / (this.lambda2 + Number.MIN_VALUE))
      console.log('error  ' + this.errorL2 + ' %')
      check = this.errorL2 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedLs: function () {
      let check
      console.log('e) λs => ' + this.lambdaS + ' : ' + parseFloat(this.enterLs))
      this.errorLs = 100 * Math.abs((this.lambdaS - parseFloat(this.enterLs)) / (this.lambdaS + Number.MIN_VALUE))
      console.log('error  ' + this.errorLs + ' %')
      check = this.errorLs < 1e-1 ? 'correct' : 'not-correct'
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
      width: 100%;
      margin-left: 0%;
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
