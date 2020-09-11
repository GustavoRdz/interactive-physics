<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Suppose a {{ l2.toFixed(3) }}m javelin is thrown horizontally with a velocity of {{ speed.toFixed(3) }}c. What length will the thrower appreciate as the javelin goes through the air?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data L<sub>1</sub> (m)
        input.center.data(:class="checkedL1" v-model.number='enterL1')
      p.inline.data L<sub>2</sub> (m)
        input.center.data(:class="checkedL2" v-model.number='enterL2')
      p.inline.data v (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterL1: '',
      enterL2: '',
      enterV: '',
      direction: '',
      side: ''
    }
  },
  computed: {
    l2: function () {
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
      let check
      console.log('L1 => ' + this.l1 + ' : ' + parseFloat(this.enterL1))
      check = this.l1 === parseFloat(this.enterL1) ? 'correct' : 'not-correct'
      return check
    },
    checkedL2: function () {
      let check
      console.log('L2 => ' + this.l2 + ' : ' + parseFloat(this.enterL2))
      check = this.l2 === parseFloat(this.enterL2) ? 'correct' : 'not-correct'
      return check
    },
    checkedV: function () {
      let check
      console.log('V => ' + this.speed + ' : ' + parseFloat(this.enterV))
      check = this.speed === parseFloat(this.enterV) ? 'correct' : 'not-correct'
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
