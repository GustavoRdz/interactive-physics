<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Light of wavelength {{ lambda }} nm is incident on a slit having a width of {{ a }} mm. The viewing screen is {{ l }} m from the slit. Find the width of the central bright fringe.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data &lambda; (m)
        input.center.data(:class="checkedLambda" v-model.number='enterLambda')
        <span class="error" v-if="errorLambda">[e: {{ errorLambda.toPrecision(3) }}%]</span>
      p.inline.data a (m)
        input.center.data(:class="checkedA" v-model.number='enterA')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
      p.inline.data L (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
        <span class="error" v-if="errorL">[e: {{ errorL.toPrecision(3) }}%]</span>
      p.inline.data width (m) 
        input.center.data(:class="checkedW" v-model.number='enterW')
        <span class="error" v-if="errorW">[e: {{ errorW.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterLambda: '',
      errorLambda: 0,
      enterA: '',
      errorA: 0,
      enterL: '',
      errorL: 0,
      enterW: '',
      errorW: 0
    }
  },
  computed: {
    lambda: function () {
      console.clear()
      let max = 700
      let min = 400
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    a: function () {
      let max = 30
      let min = 1
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    l: function () {
      let max = 20
      let min = 5
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    width: function () {
      return 2 * this.lambda * 1e-9 * this.l / (this.a * 1e-3)
    },
    checkedLambda: function () {
      this.errorLambda = this.errorRelative('λ => ', this.lambda * 1e-9, parseFloat(this.enterLambda))
      return this.errorLambda < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedA: function () {
      this.errorA = this.errorRelative('a => ', this.a * 1e-3, parseFloat(this.enterA))
      return this.errorA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedL: function () {
      this.errorL = this.errorRelative('L => ', this.l, parseFloat(this.enterL))
      return this.errorL < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedW: function () {
      this.errorW = this.errorRelative('width => ', this.width, parseFloat(this.enterW))
      return this.errorW < 1e-1 ? 'correct' : 'not-correct'
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
