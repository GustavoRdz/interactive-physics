<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Light of wavelength {{ lambda }} nm is incident on a slit having a width of {{ a }} mm. The viewing screen is {{ l }} m from the slit. Find the width of the central bright fringe.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data &lambda; (m)
        input.center.data(:class="checkedT1" v-model.number='enterT1')
      p.inline.data a (m)
        input.center.data(:class="checkedT2" v-model.number='enterT2')
      p.inline.data L (m)
        input.center.data(:class="checkedV" v-model.number='enterV')
      p.inline.data width (m)
        input.center.data(:class="checkedV" v-model.number='enterV')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterT1: '',
      enterT2: '',
      enterV: ''
    }
  },
  computed: {
    t1: function () {
      let max = 50
      let min = 25
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    t2: function () {
      let max = 20
      let min = 10
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    speed: function () {
      return Math.round(100 * Math.sqrt(1 - Math.pow(this.t2, 2) / Math.pow(this.t1, 2))) / 100
    },
    checkedT1: function () {
      let check
      console.log('T1 => ' + this.t1 + ' : ' + parseFloat(this.enterT1))
      check = this.t1 === parseFloat(this.enterT1) ? 'correct' : 'not-correct'
      return check
    },
    checkedV: function () {
      let check
      console.log('V => ' + this.speed + ' : ' + parseFloat(this.enterV))
      check = this.speed === parseFloat(this.enterV) ? 'correct' : 'not-correct'
      return check
    },
    checkedT2: function () {
      let check
      console.log('T2 => ' + this.t2 + ' : ' + parseFloat(this.enterT2))
      check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
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
