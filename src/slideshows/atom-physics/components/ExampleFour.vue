<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Suppose the electron in the simply ionized helium atom is spinning in the ground state. Calculate:
    p(style="margin-top: 7px;").problem a) The necessary energy that must be supplied to the atom to bring it to n = {{ n1 }}, since the electron is spinning at n = 1.
    p(style="margin-top: 7px;").problem b) The additional energy that must be supplied to the atom to bring the electron into orbit n = {{ n2 }}.
    p(style="margin-top: 7px;").problem c) For that orbit (n = {{ n2 }}), the energy that must be given to the atom to release its electron.
    p(style="margin-top: 7px;").problem d) Suppose that by carrying the electron in n = {{ n2 }}, it remains in that state for a time of {{ t }}x10^-8 seconds before returning to the ground state, calculate how many laps it will make in that state.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data E<sub>1-{{ n1 }}</sub> (eV)
        input.center.data(:class="checkedEn1" v-model.number='enterEn1')
        <span class="error" v-if="errorEn1">[e: {{ errorEn1.toPrecision(3) }}%]</span>
      p.inline.data  E<sub>{{ n1 }}-{{ n2 }}</sub> (eV)
        input.center.data(:class="checkedEn2" v-model.number='enterEn2')
        <span class="error" v-if="errorEn2">[e: {{ errorEn2.toPrecision(3) }}%]</span>
      p.inline.data E<sub>n:{{ n2 }}- release</sub> (eV)
        input.center.data(:class="checkedErel" v-model.number='enterErel')
        <span class="error" v-if="errorErel">[e: {{ errorErel.toPrecision(3) }}%]</span>
      p.inline.data f<sub>n={{ n2 }}</sub> (Hz)
        input.center.data(:class="checkedFn2" v-model='enterFn2')
        <span class="error" v-if="errorFn2">[e: {{ errorFn2.toPrecision(3) }}%]</span>
      p.inline.data t(s)
        input.center.data(:class="checkedT" v-model='enterT')
        <span class="error" v-if="errorT">[e: {{ errorT.toPrecision(3) }}%]</span>
      p.inline.data Laps <sub>in n={{ n2 }}</sub>
        input.center.data(:class="checkedLaps" v-model='enterLaps')
        <span class="error" v-if="errorLaps">[e: {{ errorLaps.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterEn1: '',
      errorEn1: 0,
      enterEn2: '',
      errorEn2: 0,
      enterErel: '',
      errorErel: 0,
      enterFn2: '',
      errorFn2: 0,
      enterT: '',
      errorT: 0,
      enterLaps: '',
      errorLaps: 0,
      h: 6.626e-34,
      e: 1.6e-19,
      c: 3e8,
      me: 9.1e-31,
      z: 2

    }
  },
  computed: {
    n1: function () {
      console.clear()
      let max = 4
      let min = 2
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    n2: function () {
      let max = 10
      let min = this.n1 + 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    t: function () {
      let max = 9
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    En1: function () {
      return -13.606 * (1 / this.n1 ** 2 - 1) * this.z ** 2
    },
    En2: function () {
      return -13.606 * (1 / this.n2 ** 2 - 1 / this.n1 ** 2) * this.z ** 2
    },
    Erel: function () {
      return -13.606 * (0 - 1 / this.n2 ** 2) * this.z ** 2
    },
    fn2: function () {
      return 13.606 * this.e * this.z ** 2 / (this.n2 * this.h)
    },
    laps: function () {
      return this.fn2 * this.t * 1e-8
    },
    checkedEn1: function () {
      let check
      console.log('E n1 => ' + this.En1 + ' : ' + parseFloat(this.enterEn1))
      this.errorEn1 = 100 * Math.abs((this.En1 - parseFloat(this.enterEn1)) / (this.En1 + Number.MIN_VALUE))
      console.log('error  ' + this.errorEn1 + ' %')
      check = this.errorEn1 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedEn2: function () {
      let check
      console.log('E n2 => ' + this.En2 + ' : ' + parseFloat(this.enterEn2))
      this.errorEn2 = 100 * Math.abs((this.En2 - parseFloat(this.enterEn2)) / (this.En2 + Number.MIN_VALUE))
      console.log('error  ' + this.errorEn2 + ' %')
      check = this.errorEn2 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedErel: function () {
      let check
      console.log('E release => ' + this.Erel + ' : ' + parseFloat(this.enterErel))
      this.errorErel = 100 * Math.abs((this.Erel - parseFloat(this.enterErel)) / (this.Erel + Number.MIN_VALUE))
      console.log('error  ' + this.errorErel + ' %')
      check = this.errorErel < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedFn2: function () {
      let check
      console.log('frequency => ' + this.fn2 + ' : ' + parseFloat(this.enterFn2))
      this.errorFn2 = 100 * Math.abs((this.fn2 - parseFloat(this.enterFn2)) / (this.fn2 + Number.MIN_VALUE))
      console.log('error  ' + this.errorFn2 + ' %')
      check = this.errorFn2 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedT: function () {
      let check
      console.log('t => ' + this.t * 1e-8 + ' : ' + parseFloat(this.enterT))
      this.errorT = 100 * Math.abs((this.t * 1e-8 - parseFloat(this.enterT)) / (this.t * 1e-8 + Number.MIN_VALUE))
      console.log('error  ' + this.errorT + ' %')
      check = this.errorT < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedLaps: function () {
      let check
      console.log('Laps => ' + this.laps + ' : ' + this.enterLaps)
      this.errorLaps = 100 * Math.abs((this.laps - parseFloat(this.enterLaps)) / (this.laps + Number.MIN_VALUE))
      console.log('error  ' + this.errorLaps + ' %')
      check = this.errorLaps < 1e-1 ? 'correct' : 'not-correct'
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
