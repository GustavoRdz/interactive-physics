<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Suppose a {{ l2.toFixed(3) }}m javelin is thrown horizontally with a velocity of {{ speed.toFixed(3) }}c. What length will the thrower appreciate as the javelin goes through the air?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data L<sub>1</sub> (m)
        input.center.data(:class="checkedL1" v-model.number='enterL1')
        <span class="error" v-if="errorL1">[e: {{ errorL1.toPrecision(3) }}%]</span>
      p.inline.data L<sub>2</sub> (m)
        input.center.data(:class="checkedL2" v-model.number='enterL2')
        <span class="error" v-if="errorL2">[e: {{ errorL2.toPrecision(3) }}%]</span>
      p.inline.data v (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')
        <span class="error" v-if="errorV">[e: {{ errorV.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterL1: '',
      errorL1: 0,
      enterL2: '',
      errorL2: 0,
      enterV: '',
      errorV: 0,
      direction: '',
      side: ''
    }
  },
  computed: {
    l2: function () {
      console.clear()
      let max = 30
      let min = 20
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    speed: function () {
      let max = 80
      let min = 50
      this.direction = (Math.round(Math.random()) - 0.5) * 2
      this.side = this.direction === 1 ? 'rigth' : 'left'
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    l1: function () {
      return parseFloat((this.l2 * Math.sqrt(1 - Math.pow(this.speed, 2))).toPrecision(3))
    },
    checkedL1: function () {
      this.errorL1 = this.errorRelative('Length 1 => ', this.l1, parseFloat(this.enterL1))
      return this.errorL1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedL2: function () {
      this.errorL2 = this.errorRelative('Length 2 => ', this.l2, parseFloat(this.enterL2))
      return this.errorL2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedV: function () {
      this.errorV = this.errorRelative('speed => ', this.speed, parseFloat(this.enterV))
      return this.errorV < 1e-1 ? 'correct' : 'not-correct'
    }
  },
  methods: {
    message: function (name) {
      return
    },
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
