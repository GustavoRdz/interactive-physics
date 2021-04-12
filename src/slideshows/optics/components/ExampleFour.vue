<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A concave spherical mirror has a focus distance radius of curvature of magnitude {{ (2 * focus).toPrecision(2) }} cm. (a) Find the location of the image for object distances of (i) {{ (4 * focus).toPrecision(2) }} cm, (ii) {{ (2 * focus).toPrecision(2) }} cm, and (iii) {{ focus.toPrecision(2) }} cm. For each case, state whether the image is (b) real or virtual and (c) upright or inverted. (d) Find the magnification in each case.
    .center
      p.solution Please do calculations and introduce your results <span style="font-size: 14px; color: black;">some other options:infinite,none</span>
      p.inline.data Focus (cm)
        input.center.data(:class="checkedFocus" v-model.number='enterFocus')
        <span class="error" v-if="errorFocus">[e: {{ errorFocus.toPrecision(2) }}%]</span>
      p.inline.data  p<sub>i</sub> (cm)
        input.center.data(:class="checkedPi" v-model.number='enterPi')
        <span class="error" v-if="errorPi">[e: {{ errorPi.toPrecision(2) }}%]</span>
      p.inline.data q<sub>i</sub> (cm)
        input.center.data(:class="checkedQi" v-model.number='enterQi')
        <span class="error" v-if="errorQi">[e: {{ errorQi.toPrecision(2) }}%]</span>
      p.inline.data M<sub>i</sub>
        input.center.data(:class="checkedMi" v-model='enterMi')
        <span class="error" v-if="errorMi">[e: {{ errorMi.toPrecision(2) }}%]</span>
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRVi" v-model='enterRVi')
        <span class="error" v-if="errorRVi">[e: {{ errorRVi.toPrecision(2) }}%]</span>
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIi" v-model='enterUIi')
        <span class="error" v-if="errorUIi">[e: {{ errorUIi.toPrecision(2) }}%]</span>
    .center
      p.inline.data  p<sub>ii</sub> (cm)
        input.center.data(:class="checkedPii" v-model.number='enterPii')
        <span class="error" v-if="errorPii">[e: {{ errorPii.toPrecision(2) }}%]</span>
      p.inline.data q<sub>ii</sub> (cm)
        input.center.data(:class="checkedQii" v-model.number='enterQii')
        <span class="error" v-if="errorQii">[e: {{ errorQii.toPrecision(2) }}%]</span>
      p.inline.data M<sub>ii</sub>
        input.center.data(:class="checkedMii" v-model='enterMii')
        <span class="error" v-if="errorMii">[e: {{ errorMii.toPrecision(2) }}%]</span>
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRVii" v-model='enterRVii')
        <span class="error" v-if="errorRVii">[e: {{ errorRVii.toPrecision(2) }}%]</span>
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIii" v-model='enterUIii')
        <span class="error" v-if="errorUIii">[e: {{ errorUIii.toPrecision(2) }}%]</span>
    .center
      p.inline.data  p<sub>iii</sub> (cm)
        input.center.data(:class="checkedPiii" v-model.number='enterPiii')
        <span class="error" v-if="errorPiii">[e: {{ errorPiii.toPrecision(2) }}%]</span>
      p.inline.data q<sub>iii</sub> (cm)
        input.center.data(:class="checkedQiii" v-model.number='enterQiii')
        <span class="error" v-if="errorQiii">[e: {{ errorQiii.toPrecision(2) }}%]</span>
      p.inline.data M<sub>iii</sub>
        input.center.data(:class="checkedMiii" v-model='enterMiii')
        <span class="error" v-if="errorMiii">[e: {{ errorMiii.toPrecision(2) }}%]</span>
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRViii" v-model='enterRViii')
        <span class="error" v-if="errorRViii">[e: {{ errorRViii.toPrecision(2) }}%]</span>
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIiii" v-model='enterUIiii')
        <span class="error" v-if="errorUIiii">[e: {{ errorUIiii.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterFocus: '',
      errorFocus: 0,
      enterPi: '',
      errorPi: 0,
      enterPii: '',
      errorPii: 0,
      enterPiii: '',
      errorPiii: 0,
      enterQi: '',
      errorQi: 0,
      enterQii: '',
      errorQii: 0,
      enterQiii: '',
      errorQiii: 0,
      enterMi: '',
      errorMi: 0,
      enterMii: '',
      errorMii: 0,
      enterMiii: '',
      errorMiii: 0,
      enterRVi: '',
      errorRVi: 0,
      enterRVii: '',
      errorRVii: 0,
      enterRViii: '',
      errorRViii: 0,
      enterUIi: '',
      errorUIi: 0,
      enterUIii: '',
      errorUIii: 0,
      enterUIiii: '',
      errorUIiii: 0
    }
  },
  computed: {
    focus: function () {
      console.clear()
      let max = 50
      let min = 10
      return (Math.round(10 * Math.random() * (max - min + 1) + min) / 10)
    },
    qi: function () {
      return 4 * this.focus / 3
    },
    qii: function () {
      return 2 * this.focus
    },
    qiii: function () {
      return 'infinite'
    },
    Mi: function () {
      return this.qi / (4 * this.focus)
    },
    Mii: function () {
      return this.qii / (2 * this.focus)
    },
    Miii: function () {
      return ['infinite', '-infinite']
    },
    rVi: function () {
      return 'real'
    },
    rVii: function () {
      return 'real'
    },
    rViii: function () {
      return 'none'
    },
    uIi: function () {
      return 'inverted'
    },
    uIii: function () {
      return 'inverted'
    },
    uIiii: function () {
      return 'none'
    },
    checkedFocus: function () {
      this.errorFocus = this.errorRelative('Focus => ', this.focus, parseFloat(this.enterFocus))
      return this.errorFocus < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPi: function () {
      this.errorPi = this.errorRelative('Pi => ', 4 * this.focus, parseFloat(this.enterPi))
      return this.errorPi < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPii: function () {
      this.errorPii = this.errorRelative('Pii => ', 2 * this.focus, parseFloat(this.enterPii))
      return this.errorPii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPiii: function () {
      this.errorPiii = this.errorRelative('Piii => ', this.focus, parseFloat(this.enterPiii))
      return this.errorPiii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQi: function () {
      this.errorQi = this.errorRelative('Qi => ', this.qi, parseFloat(this.enterQi))
      return this.errorQi < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQii: function () {
      this.errorQii = this.errorRelative('Qii => ', this.qii, parseFloat(this.enterQii))
      return this.errorQii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQiii: function () {
      // this.errorQiii = this.errorRelative('Qiii => ', this.qiii, parseFloat(this.enterQiii))
      // return this.errorQiii < 1e-1 ? 'correct' : 'not-correct'
      let check
      console.log('Qii=> +/-' + this.qiii + ' : ' + this.enterQiii.toString().toLowerCase())
      // check = this.qiii === this.enterQiii.toString().toLowerCase() ? 'correct' : 'not-correct'
      check = (this.Miii[0] === this.enterQiii || this.Miii[1] === this.enterQiii) ? 'correct' : 'not-correct'
      return check
    },
    checkedMi: function () {
      this.errorMi = this.errorRelative('Mi => ', this.Mi, parseFloat(this.enterMi))
      return this.errorMi < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMii: function () {
      this.errorMii = this.errorRelative('Mii => ', this.Mii, parseFloat(this.enterMii))
      return this.errorMii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMiii: function () {
      let check
      console.log('Miii: ' + this.Miii[0] + ' : ' + this.enterMiii)
      console.log('Miii: ' + this.Miii[1] + ' : ' + this.enterMiii)
      check = (this.Miii[0] === this.enterMiii || this.Miii[1] === this.enterMiii) ? 'correct' : 'not-correct'
      return check
    },
    checkedRVi: function () {
      let check
      console.log('Real o vitual i=> ' + this.rVi + ' : ' + this.enterRVi.toString().toLowerCase())
      check = this.rVi === this.enterRVi.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedRVii: function () {
      let check
      console.log('Real o vitual ii=> ' + this.rVii + ' : ' + this.enterRVii.toString().toLowerCase())
      check = this.rVii === this.enterRVii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedRViii: function () {
      let check
      console.log('Real o vitual iii=> ' + this.rViii + ' : ' + this.enterRViii.toString().toLowerCase())
      check = this.rViii === this.enterRViii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedUIi: function () {
      let check
      console.log('Upright or inverted i=> ' + this.uIi + ' : ' + this.enterUIi.toString().toLowerCase())
      check = this.uIi === this.enterUIi.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedUIii: function () {
      let check
      console.log('Upright or inverted ii=> ' + this.uIii + ' : ' + this.enterUIii.toString().toLowerCase())
      check = this.uIii === this.enterUIii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedUIiii: function () {
      let check
      console.log('Upright or inverted iii=> ' + this.uIiii + ' : ' + this.enterUIiii.toString().toLowerCase())
      check = this.uIiii === this.enterUIiii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    errorRelative: function (comment, A, x) {
      let relativeError
      relativeError = 100 * Math.abs((A - x) / (A + Number.MIN_VALUE))
      console.log(comment + A + ' : ' + x + ' ==> ' + 'error  ' + relativeError + ' %')
      return relativeError
    }
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
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
