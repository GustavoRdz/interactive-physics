<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem What is the energy of a photon that, when absorbed by a hydrogen atom, could cause an electronic transition from
    p.problem (a) the n = {{ levelA1 }} state to the n = {{ levelA2 }} state
    p.problem (b) the n = {{ levelB1 }} state to the n = {{ levelB2 }} state?

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data a) E<sub>n = {{ levelA1 }} to {{ levelA2 }}</sub> (eV)
        input.center.data(:class="checkedEa" v-model='enterEa')
        <span class="error" v-if="errorEa">[e: {{ errorEa.toPrecision(3) }}%]</span>
      p.inline.data A) E<sub>n = {{ levelB1 }} to {{ levelB2 }} </sub> (eV)
        input.center.data(:class="checkedEb" v-model='enterEb')
        <span class="error" v-if="errorEb">[e: {{ errorEb.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterEa: '',
      errorEa: 0,
      enterEb: '',
      errorEb: 0
    }
  },
  computed: {
    levelA1: function () {
      let max = 3
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    levelA2: function () {
      let max = 8
      let min = 4
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    levelB1: function () {
      let max = 6
      let min = 3
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    levelB2: function () {
      let max = 10
      let min = 7
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    eA: function () {
      return -13.606 * (1 / Math.pow(this.levelA2, 2) - 1 / Math.pow(this.levelA1, 2))
    },
    eB: function () {
      return -13.606 * (1 / Math.pow(this.levelB2, 2) - 1 / Math.pow(this.levelB1, 2))
    },
    checkedEa: function () {
      let check
      console.log('a) E: => ' + this.eA + ' : ' + parseFloat(this.enterEa))
      this.errorEa = 100 * Math.abs((this.eA - parseFloat(this.enterEa)) / (this.eA + Number.MIN_VALUE))
      console.log('error  ' + this.errorEa + ' %')
      check = this.errorEa < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedEb: function () {
      let check
      console.log('b) E: => ' + this.eB + ' : ' + parseFloat(this.enterEb))
      this.errorEb = 100 * Math.abs((this.eB - parseFloat(this.enterEb)) / (this.eB + Number.MIN_VALUE))
      console.log('error  ' + this.errorEb + ' %')
      check = this.errorEb < 1e-1 ? 'correct' : 'not-correct'
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
