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
      p.inline.data A) E<sub>n = {{ levelB1 }} to {{ levelB2 }} </sub> (eV)
        input.center.data(:class="checkedEb" v-model='enterEb')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterEa: '',
      enterEb: ''
    }
  },
  computed: {
    levelA1: function () {
      let max = 3
      let min = 1
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    levelA2: function () {
      let max = 8
      let min = 4
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    levelB1: function () {
      let max = 6
      let min = 3
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    levelB2: function () {
      let max = 10
      let min = 7
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    eA: function () {
      return parseFloat((-13.606 * (1 / Math.pow(this.levelA2, 2) - 1 / Math.pow(this.levelA1, 2))).toFixed(3))
    },
    eB: function () {
      return parseFloat((-13.606 * (1 / Math.pow(this.levelB2, 2) - 1 / Math.pow(this.levelB1, 2))).toFixed(3))
    },
    checkedEa: function () {
      let check
      console.log('a) E: => ' + this.eA + ' : ' + parseFloat(this.enterEa))
      check = this.eA === parseFloat(this.enterEa) ? 'correct' : 'not-correct'
      return check
    },
    checkedEb: function () {
      let check
      console.log('b) E: => ' + this.eB + ' : ' + parseFloat(this.enterEb))
      check = this.eB === parseFloat(this.enterEb) ? 'correct' : 'not-correct'
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
  width: 130px;
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
