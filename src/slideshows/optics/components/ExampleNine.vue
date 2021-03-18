<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Light of wavelength {{ lambda }} nm is incident on a slit having a width of {{ a }} mm. The viewing screen is {{ l }} m from the slit. Find the width of the central bright fringe.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data &lambda; (m)
        input.center.data(:class="checkedLambda" v-model.number='enterLambda')
      p.inline.data a (m)
        input.center.data(:class="checkedA" v-model.number='enterA')
      p.inline.data L (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
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
      return (2 * this.lambda * 1e-9 * this.l / (this.a * 1e-3)).toPrecision(3)
    },
    checkedLambda: function () {
      let check
      console.log('λ => ' + this.lambda * 1e-9 + ' : ' + parseFloat(this.enterLambda))
      this.errorLambda = 100 * Math.abs(this.lambda * 1e-9 - parseFloat(this.enterLambda)) / (this.lambda * 1e-9)
      console.log('error  ' + this.errorLambda + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorLambda < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedA: function () {
      let check
      console.log('a => ' + this.a * 1e-3 + ' : ' + parseFloat(this.enterA))
      this.errorA = 100 * Math.abs(this.a * 1e-3 - parseFloat(this.enterA)) / (this.a * 1e-3)
      console.log('error  ' + this.errorA + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorA < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedL: function () {
      let check
      console.log('L => ' + this.l + ' : ' + parseFloat(this.enterL))
      console.log('error  ' + 100 * Math.abs(this.l - parseFloat(this.enterL)) / this.l + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      this.errorL = 100 * Math.abs(this.l - parseFloat(this.enterL)) / this.l
      check = this.errorL < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedW: function () {
      let check
      console.log('Width => ' + this.width + ' : ' + parseFloat(this.enterW))
      console.log('error  ' + 100 * Math.abs(this.width - parseFloat(this.enterW)) / this.width + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      this.errorW = 100 * Math.abs(this.width - parseFloat(this.enterW)) / this.width
      check = this.errorW < 1e0 ? 'correct' : 'not-correct'
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
